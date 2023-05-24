import * as THREE from 'three'
import Experience from '../Experience/Experience'
import GSAP from 'gsap'
import GUI from 'lil-gui';
export default class Environment {
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        //this.gui  = new GUI({container: document.querySelector('.main')});
        this.obj = {
            colorObj:{r:0,g:0,b:0},
            intensity:3,
        }
        this.setSunLight();
        //this.setGUI();

       // console.log(this.actualRoom);
    }
 
    setGUI() {
        this.gui.addColor(this.obj, "colorObj").onChange(() => {
            this.sunLight.color.copy(this.obj.colorObj);
            this.ambientLight.color.copy(this.obj.colorObj);
            console.log(this.obj.colorObj);
        });
        this.gui.add(this.obj, "intensity", 0, 10).onChange(() => {
            this.sunLight.intensity = this.obj.intensity;
            this.sunLight.ambientLight = this.obj.intensity;
        });
    }

    setSunLight(){
        this.sunLight = new THREE.DirectionalLight('#ffffff' ,5 );
        this.sunLight.castShadow = true;
        this.sunLight.shadow.camera.far= 20;
        this.sunLight.shadow.mapSize.set(1024,1024);
        this.sunLight.shadow.normalBias = 0.05;
        //const helper = new THREE.CameraHelper(this.sunLight.shadow.camera);
        //this.scene.add(helper);
        this.sunLight.position.set(1.5,7,3); 
        this.scene.add(this.sunLight);
        this.ambientLight = new THREE.AmbientLight('#ffffff',0.6 );
        this.scene.add(this.ambientLight);
    }
    switchTheme(theme){
        if(theme==='dark'){
            GSAP.to(this.sunLight.color,{
                b:  0.5490196078431373,
                g: 0.2196078431372549,
                r: 0.11372549019607843
            
                
            })
            GSAP.to(this.ambientLight.color,{
                b:  0.5490196078431373,
                g: 0.2196078431372549,
                r: 0.11372549019607843
            })
            GSAP.to(this.sunLight,{
                intensity:6,
            })
            GSAP.to(this.ambientLight,{
                intensity:2,
            })
        }
        else{
            GSAP.to(this.sunLight.color,{
                r:255/255,
                g:255/255,
                b:255/255
            })
            GSAP.to(this.ambientLight.color,{
                r:255/255,
                g:255/255,
                b:255/255
            })
            GSAP.to(this.sunLight,{
                intensity:5 ,
            })
            GSAP.to(this.ambientLight,{
                intensity:0.5,
            })

        }

    }
    update()
    {

    }
}