import * as THREE from 'three'
import Experience from '../Experience/Experience'
import GSAP from 'gsap'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';
export default class Room {
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.room = this.resources.items.room;
        this.actualRoom = this.room.scene;
        this.roomChildren = {};
        this.floor = this.experience.world.floor;
        
        this.lerp = {
            current:0,
            target:0,
            ease:0.1
        };
        
        
        
        
        this.setModel();
       // console.log(this.actualRoom);
       this.onMouseMove();

    }
    setModel(){
        this.actualRoom.children.forEach(child=>{
            child.castShadow = true ;
            child.recieveShadow = true;
            
             //console.log(child); 
            if(child instanceof THREE.Group ){
                child.children.forEach((groupchild)=>{
                    child.castShadow = true ;
                    child.recieveShadow = true;
                })
            }
            //console.log(child.name,child.scale);
            child.scale.set(0,0,0);
            if (child.name === "Boxed") {
                child.scale.set(1, 1, 1);
                child.position.set(2,1, 0);
                child.rotation.y = Math.PI / 4;
            }
            this.roomChildren[child.name.toLowerCase()] = child;
        });
       
        const width = 1.2;
        const height = 0.5;
        const intensity =20;
        const width1 =0.3;
        const height1 = 0.3;
        const intensity1 =100;
        this.rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
        this.rectLight1 = new THREE.RectAreaLight( 0xffffff, intensity1,  width1, height1 );
        this.rectLight.position.set( 0, 4.1,0);
        this.rectLight.rotation.x = -Math.PI/2;
        //rectLight.rotation.y = Math.PI/2;
        this.rectLight1.position.set( -7, 15,0);
        this.rectLight1.rotation.x =- Math.PI/2;

        this.actualRoom.add( this.rectLight );
        this.actualRoom.add( this.rectLight1 );
        
        // const rectLightHelper = new RectAreaLightHelper( rectLight );
        // rectLight.add( rectLightHelper );
        
        this.scene.add(this.actualRoom);
        this.actualRoom.scale.set(0.15,0.15,0.15);
        //this.actualRoom.rotateY.set(Math.PI/2);
        this.roomChildren["rectLight"] = this.rectLight;
        this.roomChildren["rectLight1"] = this.rectLight1;
       //console.log(this.roomChildren);
       this.roomChildren['circlefirst']=this.floor.circleFirst;
    }
    onMouseMove(){
        window.addEventListener('mousemove',(e)=>{
            
            this.rotation = (e.clientX-window.innerWidth/2)/window.innerWidth;
           // console.log(e.clientX,this.rotation);
           this.lerp.target = this.rotation *0.2;
        })
    }
    update()
    {
        this.lerp.current = GSAP.utils.interpolate(
            this.lerp.current,
            this.lerp.target,
            this.lerp.ease
        );
        this.actualRoom.rotation.y= this.lerp.current;
        

        
    }
}