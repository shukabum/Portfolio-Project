import * as THREE from 'three'
import Experience from '../Experience/Experience'
import Room from './Room';
import Environment from './Environment';
import Controls from './Controls';
import Floor from './Floor';
import EventEmitter from 'events';
export default class World extends EventEmitter{
    constructor(){
        super();
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.camera = this.experience.camera;
        this.canvas = this.experience.canvas;
        //this.room = new Room();
        this.theme =this.experience.theme;

        this.resources = this.experience.resources;
        this.resources.on('ready',()=>{
            this.environment = new Environment();    
            this.floor = new Floor();
            this.room = new Room();
            this.emit('worldready');
            this.controls = new Controls();

            //console.log("created room");
        })
        this.theme.on('switch',(theme)=>{
            this.switchTheme(theme);
        });
        

    }
    switchTheme(theme){
        if(this.environment)
        {
            this.environment.switchTheme(theme);
        }
    }
    update()
    {
        if(this.room)
        {
            this.room.update();
        }
        if(this.controls)
        {
            this.controls.update();
        }
    }
}