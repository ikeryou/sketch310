
import { Bodies, Body, Composite, Engine, Render, Runner, Composites, Constraint } from "matter-js";
import { Conf } from "../core/conf";
import { Func } from "../core/func";
import { MousePointer } from "../core/mousePointer";
import { MyObject3D } from "../webgl/myObject3D";

export class MatterjsMgr extends MyObject3D {

  public engine:Engine;
  public render:Render;

  private _runner:Runner;

  public lineBodies:Array<Array<Body>> = [];

  public mouse:Body;

  constructor() {
    super()

    const sw = Func.instance.sw();
    const sh = Func.instance.sh();

    // エンジン
    this.engine = Engine.create();
    this.engine.gravity.x = 0;
    this.engine.gravity.y = 1;

    // レンダラー
    this.render = Render.create({
      element: document.body,
      engine: this.engine,
      options: {
        width: sw,
        height: sh,
        showAngleIndicator: false,
        showCollisions: false,
        showVelocity: false,
        pixelRatio:Conf.instance.FLG_SHOW_MATTERJS ? 1 : 0.1
      }
    });
    this.render.canvas.classList.add('l-matter');

    if(!Conf.instance.FLG_SHOW_MATTERJS) {
      this.render.canvas.classList.add('-hide');
    }

    const num = 10;
    for(let i = 0; i < num; i++) {
      this._makeLine((sh / num) * i);
    }

    const mouseSize = sw * Func.instance.val(0.2, 0.1) * 1;
    this.mouse = Bodies.circle(0, 0, mouseSize, {isStatic:true, render:{visible: Conf.instance.FLG_SHOW_MATTERJS}});
    Composite.add(this.engine.world, [
      this.mouse,
    ]);
    Body.setPosition(this.mouse, {x:9999, y:9999});

    this._runner = Runner.create();
    this.start();
    this._resize();
  }


  private _makeLine(baseY:number): void {
    const sw = Func.instance.sw();
    // const sh = Func.instance.sh();

    const stiffness = 0.015;
    const bridgeNum = 20;
    const bridgeSize = (sw / bridgeNum) * 0.25;

    const bridge = Composites.stack(0, 0, bridgeNum, 1, 0, 0, (x:number, y:number) => {
      return Bodies.circle(x, y, bridgeSize, {
        collisionFilter: { group: Body.nextGroup(true) },
        // density: 0.05,
        friction: 0.9,
        render: {
          fillStyle: '#060a19',
          visible: Conf.instance.FLG_SHOW_MATTERJS
        }
      });
    });

    Composites.chain(bridge, 0, 0, 0, 0, {
      stiffness: stiffness,
      length: 2,
      render: {
        visible: Conf.instance.FLG_SHOW_MATTERJS
      }
    });

    Composite.add(this.engine.world, [
      bridge,
      Constraint.create({
          pointA: { x: 0, y: baseY },
          bodyB: bridge.bodies[0],
          pointB: { x: 0, y: 0 },
          length: 1,
          stiffness: 1
      }),
      Constraint.create({
          pointA: { x: sw, y: baseY },
          bodyB: bridge.bodies[bridge.bodies.length - 1],
          pointB: { x: 0, y: 0 },
          length: 1,
          stiffness: 1
      })
    ]);

    // Bodyだけ入れておく
    this.lineBodies.push([]);
    const lineKey = this.lineBodies.length - 1;
    bridge.bodies.forEach((b,i) => {
      Body.setPosition(b, {x:(sw / bridgeNum) * i, y:baseY});
      this.lineBodies[lineKey].push(b);
    })
  }


  public start(): void {
    Render.run(this.render);
    Runner.run(this._runner, this.engine);
  }


  public stop(): void {
    Render.stop(this.render);
    Runner.stop(this._runner);
  }




  // ---------------------------------
  // 更新
  // ---------------------------------
  protected _update():void {
    super._update();

    let mx = MousePointer.instance.x;
    let my = MousePointer.instance.y;

    // this.engine.gravity.x = MousePointer.instance.easeNormal.x * 0.5;
    this.engine.gravity.y = MousePointer.instance.easeNormal.y;
    this.engine.gravity.x = MousePointer.instance.easeNormal.x;

    if(Conf.instance.USE_TOUCH && MousePointer.instance.isDown == false) {
      mx = 9999
      my = 9999
    }

    // my = (Update.instance.cnt * 15) % Func.instance.sh()

    Body.setPosition(this.mouse, {x:mx, y:my});
  }


  protected _resize(): void {
    super._resize();

    const sw = Func.instance.sw();
    const sh = Func.instance.sh();

    this.render.canvas.width = sw;
    this.render.canvas.height = sh;
  }
}