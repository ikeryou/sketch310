import vBase from "../glsl/base.vert";
import fImage from "../glsl/destImg.frag";
import { MyObject3D } from "../webgl/myObject3D";
import { Mesh } from 'three/src/objects/Mesh';
import { Util } from "../libs/util";
import { PlaneGeometry } from 'three/src/geometries/PlaneGeometry';
import { ShaderMaterial } from 'three/src/materials/ShaderMaterial';
import { DoubleSide } from 'three/src/constants';
import { Texture } from 'three/src/textures/Texture';
import { Conf } from '../core/conf';


export class DestImg extends MyObject3D {

  private _mesh:Mesh;

  constructor(opt:any) {
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
          color:{value:Util.instance.randomArr(Conf.instance.COLOR)},
        }
      })
    )
    this.add(this._mesh);

    // this.visible = false;
  }


  public setColor(color:any):void {
    const uni = this._getUni(this._mesh);
    uni.color.value = color;
  }


  public attachTex(tex:Texture):void {
    const uni = this._getUni(this._mesh);
    uni.tDiffuse.value = tex;
    // tex.needsUpdate = true;
    this.visible = true;
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