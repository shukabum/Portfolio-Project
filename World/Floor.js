import * as THREE from 'three'
import Experience from '../Experience/Experience'
import GSAP from 'gsap';
import { ScrollTrigger } from 'gsap/all';
export default class Floor {
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
       // this.floor = this.experience.world.floor.plane;
       
        this.setFloor();
        this.setCircles();

    }
    setFloor()
    {
        this.geometry = new THREE.PlaneGeometry(100,100);
        this.material  = new THREE.MeshStandardMaterial({
            color:'black',
        })

        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane);
        this.plane.rotation.x =- Math.PI/2;
        this.plane.position.y = -0.6;
        
        this.plane.receiveShadow= true;
    }
    setCircles() {
        const geometry = new THREE.CircleGeometry(5, 64);
        const material = new THREE.MeshStandardMaterial({ color:'#7AD0AC'});
        this.circleFirst = new THREE.Mesh(geometry, material);

        this.circleFirst.castShadow= true;


        this.circleFirst.position.y = -1;
        this.circleFirst.position.x = 0;

        this.circleFirst.rotation.x = -Math.PI/2;

        this.circleFirst.scale.set(0.11,.11, .11);

  
        this.circleFirst.receiveShadow = true;

        this.scene.add(this.circleFirst);
        
    }

    update()
    {


        
    }
}