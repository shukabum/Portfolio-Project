import EventEmitter from "events";
import * as THREE from 'three'
import Experience from "./Experience";
export default class Renderer extends EventEmitter {
    constructor(){
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        //console.log(this.camera,this.camera.perspectiveCamera);
        this.setRenderer();

    }
    setRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
        });
        this.renderer.useLegacyLights = true;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
        this.renderer.toneMapping = THREE.CineonToneMapping;
        this.renderer.toneMappingExposure = 0.4;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }
    resize() {
        this.renderer.setSize(this.sizes.width, this.sizes.height);
        this.renderer.setPixelRatio(this.sizes.pixelRatio);
    }
    update()
    {
      //  this.renderer.setViewport(0,0,this.sizes.width,this.sizes.height);
        this.renderer.render(this.scene, this.camera.orthographicCamera);
        // second screen
        /*this.renderer.setScissorTest(true);
        
        this.renderer.setViewport(
            this.sizes.width - this.sizes.width/3,
            this.sizes.height - this.sizes.height/3,
            this.sizes.width/3,
            this.sizes.height/3

        );
        this.renderer.setScissor(
            this.sizes.width - this.sizes.width/3,
            this.sizes.height - this.sizes.height/3,
            this.sizes.width/3,
            this.sizes.height/3

        );
        this.renderer.render(this.scene, this.camera.perspectiveCamera)
        this.renderer.setScissorTest(false);*/
    }

}