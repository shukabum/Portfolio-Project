import Experience from "../Experience/Experience";
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.canvas =this.experience.canvas;
        this.sizes = this.experience.sizes;

        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControls();
        
    }
    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            1000
        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.z=10;
        this.perspectiveCamera.position.x =-5;
        this.perspectiveCamera.position.y =2;
        //this.perspectiveCamera.rotation.x= Math.PI/4;

    }

    createOrthographicCamera() {
       this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -50,
            50
            
       
        );

        this.orthographicCamera.position.x = 0.5; 
        this.orthographicCamera.position.y = 0.5; 
        this.orthographicCamera.position.z = 0; 
        this.orthographicCamera.rotation.x = -Math.PI/6.5;
        
       // this.orthographicCamera.rotation.z = -Math.PI/1000;


        this.scene.add(this.orthographicCamera);
       // this.helper = new THREE.CameraHelper(this.orthographicCamera);
       // t//his.scene.add(this.helper);
      //  this.scene.add(this.orthographicCamera);
        const size= 20;
        const divisions =20;
       // const gridHelper = new THREE.GridHelper(size, divisions);
        //this.scene.add(gridHelper);
      //const axesHelper = new THREE.AxesHelper(10);
       //this.scene.add(axesHelper);

    }
    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = false;
    }
    resize() {
        // Updating Perspective Camera on Resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        // Updating Orthographic Camera on Resize
        this.orthographicCamera.left =
            (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right =
            (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }
    update()
    {
        //console.log(this.perspectiveCamera.position)
        this.controls.update();

        //this.helper.matrixWorldNeedsUpdate = true;
        //this.helper.update();
      //  console.log(this.orthographicCamera.position);
      //  this.helper.position.copy(this.orthographicCamera.position);
       // this.helper.rotation.copy(this.orthographicCamera.rotation);

    }
}