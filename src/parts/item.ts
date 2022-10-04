import vBase from "../glsl/base.vert";
import fImage from "../glsl/dest.frag";
import { MyObject3D } from "../webgl/myObject3D";
import { Mesh } from 'three/src/objects/Mesh';
import { Util } from "../libs/util";
import { PlaneGeometry } from 'three/src/geometries/PlaneGeometry';
import { ShaderMaterial } from 'three/src/materials/ShaderMaterial';
import { DoubleSide } from 'three/src/constants';
import { Conf } from '../core/conf';


export class Item extends MyObject3D {

  private _mesh:Mesh;

  constructor(opt:any = {}) {
    super()

    this._mesh = new Mesh(
      new PlaneGeometry(1, 1),
      new ShaderMaterial({
        vertexShader:vBase,
        fragmentShader:fImage,
        transparent:true,
        side:DoubleSide,
        depthTest:false,
        uniforms:{
          tDiffuse:{value:opt.tex},
          alpha:{value:1},
          color:{value:Util.instance.randomArr(Conf.instance.COLOR)},
          time:{value:Util.instance.randomInt(0, 1000)},
          bright:{value:0},
          contrast:{value:1},
        }
      })
    )
    this.add(this._mesh);

  }





  protected _update():void {
    super._update();

    // const uni = this._getUni(this._mesh);
    // uni.time.value += this._speed * 0.5;
  }


  protected _resize(): void {
    super._resize();
  }
}