import { Scene } from 'three/src/scenes/Scene';
import { WebGLRenderTarget } from 'three/src/renderers/WebGLRenderTarget';
import { WebGLRenderer } from 'three/src/renderers/WebGLRenderer';
import { Texture } from 'three/src/textures/Texture';
import { Camera } from 'three/src/cameras/Camera';
import { RGBAFormat } from 'three/src/constants';

export class Capture extends Scene {

    public opt:any = {}

    private _tgNum:number = 1
    private _texture:Array<WebGLRenderTarget> = []


    // --------------------------------
    // コンストラクタ
    // --------------------------------
    constructor(num:number = 1) {
        super()
        this._tgNum = num

        for(let i = 0; i < this._tgNum; i++) {
            const t:WebGLRenderTarget = new WebGLRenderTarget(16, 16, {format:RGBAFormat})
            this._texture.push(t)
        }
    }


    // --------------------------------
    // 破棄
    // --------------------------------
    public dispose():void {
        if(this._texture != undefined) {
            this._texture.forEach((val) => {
                val.dispose()
            })
            this._texture.splice(0)
        }
    }


    // --------------------------------
    // テクスチャ取得
    // --------------------------------
    public texture(key:number = 0):Texture {
        return this._texture[key].texture
    }


    // --------------------------------
    // レンダリング
    // --------------------------------
    public render(renderer:WebGLRenderer, camera:Camera, key:number = 0, isClear:boolean = true):void {
        const t = this._texture[key]

        renderer.setRenderTarget(t)
        if(isClear) {
            renderer.clear()
        }

        renderer.render(this, camera)
        renderer.setRenderTarget(null)
    }


    // --------------------------------
    // サイズ設定
    // --------------------------------
    setSize(width:number, height:number, ratio:number = 1):void {
        const len = this._texture.length
        for(let i = 0; i < len; i++) {
            this._texture[i].setSize(width * ratio, height * ratio)
        }
    }
}