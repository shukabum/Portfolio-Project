import * as THREE from 'three'
import Camera from '../Utilitities/Camera';
import Sizes from '../Utilitities/Sizes';
import Renderer from './Renderer';
import Time from '../Utilitities/Time';
import World from '../World/World';
import Resources from '../Utilitities/Resources';
import assets from '../Utilitities/assets';
import Theme from '../World/Theme';
import Preloader from './Preloader';
import Controls from '../World/Controls';
export default class Experience{
    static instance;
    constructor(canvas){
        if(Experience.instance){
            return Experience.instance
        }
        Experience.instance = this;
        this.canvas= canvas;
        this.scene= new THREE.Scene();
        this.time = new Time(); 
        this.sizes= new Sizes();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources= new Resources(assets);
        this.theme = new Theme();    
        this.world = new World();
        this.preLoader = new Preloader();
        this.preLoader.on('enablecontrols',()=>{
            this.controls = new Controls();
        })
        this.time.on('update',()=>{
            this.update();
        })
        this.sizes.on('resize',()=>{
            this.resize();
        })
    }
    resize(){
        this.camera.resize();
       // this.world.resize();
        this.renderer.resize();

    }
    update()
    {
        //this.preloader.update();
        this.camera.update();
        this.world.update();
        this.renderer.update();

    }
}