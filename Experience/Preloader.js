import { EventEmitter } from "events";
import Experience from "./Experience.js";
import GSAP from 'gsap'

export default class Preloader extends EventEmitter {
    constructor() {
        super();
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.camera = this.experience.camera;
        this.world = this.experience.world;
        this.device =  this.sizes.device;
        this.sizes.on("switchdevice", (device) => {
            this.device = device;
        });
       
        this.world.on("worldready", () => {
            this.setAssets();
            this.playIntro();
        });
    }
    setAssets() {
        /*convert(document.querySelector(".intro-text"));
        convert(document.querySelector(".main-title"));
        convert(document.querySelector(".main-description"));
        convert(document.querySelector(".second-title"));
        convert(document.querySelector(".second-description"));*/
        this.room = this.experience.world.room.actualRoom;
        this.roomChildren = this.experience.world.room.roomChildren;
        //console.log(this.roomChildren);

    }
    firstIntro()
    {
        return new Promise((resolve) => {
        this.timeline = new GSAP.timeline();
        
        if (this.device === "desktop") {
            this.timeline
                .to(this.roomChildren.boxed.scale, {
                    x: 1.4,
                    y: 1.4,
                    z: 1.4,
                    ease: "back.out(2.5)",
                    duration: 1,
                })
                .to(this.room.position, {
                    x: -1,
                  
                    ease: "power1.out",
                    duration: 0.7,
                    
                });
                
        }else {
            this.timeline
            .set(this.roomChildren.circlefirst.scale,{
                x:0,
                y:0,
                z:0,

            })
             
                .to(this.roomChildren.boxed.scale, {
                    x: 1.4,
                    y: 1.4,
                    z: 1.4,
                    ease: "back.out(2.5)",
                    duration: 0.7,
                })
                .to(this.room.position, {
                    y: 0.5   ,
                    ease: "power1.out",
                    duration: 0.7,
                    
                });
        }
        this.timeline
        .to(".intro-text  ", {
            yPercent: 0,
            stagger: 0.05,
            ease: "back.out(1.7)",
            opacity:1,
           
        })
        .to(
            ".arrow-svg-wrapper  " ,
            {
                opacity: 1,
            },
            "same"
        )
        .to(
            ".main  " ,
            {
                opacity: 1,
                
            },
            "same"
        )
        .to(
            ".second  " ,
            {
                opacity: 1,
            },
            "same"
        )
        
        .to(
            ".toggle-bar",
            {
                opacity: 1,
                onComplete: resolve,
            },
            "same"
        );
    })
    }
    secondIntro() {
        return new Promise((resolve) => {
            this.secondTimeline = new GSAP.timeline();

            if (this.device === "desktop") {
                this.secondTimeline
               
                .to(this.room.position, {
                    x: 0,
                    y:0,
                    z:0,
                    ease: "power1.out",
                    
                },'same')
                .to(this.roomChildren.boxed.scale, {
                        x: 8,
                        y: 8,
                        z: 8,
                        ease: "back.out(2.5)",
                        duration:0.7,
                        
                    },'same')
                    //cube027 -bins and desksmaterial
                    //cube020- wallsmaterial
                    //text- wall
                   
                    .to(this.roomChildren.boxed.scale, {
                        x: 0,
                        y: 0,
                        z: 0,
                        ease: "back.out(2.2)",
                        duration:1
                        
                    },'same')
                    .to(this.roomChildren.text.scale,{x: 0.23000000417232513, y: 1.7200000286102295, z: 0.25999999046325684,
                        ease:"back.out(2.2)",
                        duration:0.3
                    },'same')
                    .to(this.roomChildren.cube006.scale,
                        {x: 0.23122549057006836, y: 0.10207211971282959, z: 2.6072778701782227
                        ,ease:"back.out(2.2)",
                        duration:0.7},'same'
                    )
                    .to(this.roomChildren.monitor003.scale,
                        {x: -3.8512420654296875, y: -1.402246117591858, z: -0.04916592687368393,
                            ease:"back.out(2.2)",
                            duration:0.5},'same'
                    )
                    .to(this.roomChildren.cube012.scale,
                        {x:1,y:1,z:1,
                            ease:"back.out(2.2)",
                        duration:0.7},'same'
                    )
                    .to(this.roomChildren.cube027.scale,
                        {x:1,y:1,z:1,
                            ease:"back.out(2.2)",
                        duration:0.7},'same'
                    )
                    .to(this.roomChildren.circle001.scale,
                        {x:1,y:1,z:1,
                            ease:"back.out(2.2)",
                        duration:0.7,},'same'
                    )
                    .to(this.roomChildren.cube020.scale,
                        {x:1,y:1,z:1,
                            ease:"back.out(2.2)",
                        duration:0.7},'same'
                    )
                    .to(this.roomChildren.empty.scale,
                        {x: 0.04189883545041084, y: 0.04189883917570114, z: 0.04189884290099144,
                            ease:"back.out(2.2)",
                            duration:0.7},'same')
                    .to(this.roomChildren.empty002.scale,
                         {x: 0.0397968664765358, y: 0.0397968627512455, z: 0.039796870201826096,
                            ease:"back.out(2.2)",
                            duration:0.7
                        },'same')
                    .to(this.roomChildren.empty003.scale,
                        {x: 0.038516782224178314, y: 0.038516778498888016, z: 0.038516778498888016,
                            ease:"back.out(2.2)",
                            duration:0.7},'same')
                    .to(this.roomChildren.cube004.scale,
                        {x: -0.6176504492759705, y: -0.31758835911750793, z: -0.9204704165458679,
                            ease:"back.out(2.2)",
                            duration:0.7
                        },'same')
                        .to(this.roomChildren.drawer.scale,
                            {x:1,y:1,z:1,
                                ease:"back.out(2.2)",
                            duration:0.7},'same'
                        )
                        .to(this.roomChildren.circle001.scale,
                            {x:1,y:1,z:1,
                                ease:"back.out(2.2)",
                            duration:0.7,
                            onComplete:resolve,},'same'

                        )
                    
                    
            } else {
                this.secondTimeline
                    
                    .to(this.roomChildren.boxed.scale, {
                        x: 0,
                        y: 0,
                        z: 0,
                        ease: "back.out(2.5)",
                        duration: 0.7,
                    },'hell')
                    
                    .to(this.roomChildren.text.scale,{x: 0.23000000417232513, y: 1.7200000286102295, z: 0.25999999046325684,
                        ease:"back.out(2.2)",
                        duration:0.5
                    },'hell')
                    .to(this.roomChildren.text.position,{x: 0, y: 8, z:-7,
                        ease:"back.out(2.2)",
                        duration:0.5
                    },'hell')
                    
                    .to(this.roomChildren.cube006.scale,
                        {x: 0.23122549057006836, y: 0.10207211971282959, z: 2.6072778701782227
                        ,ease:"back.out(2.2)",
                        duration:0.5},'hell'
                    )
                    .to(this.roomChildren.monitor003.scale,
                        {x: -3.8512420654296875, y: -1.402246117591858, z: -0.04916592687368393,
                            ease:"back.out(2.2)",
                            duration:0.5},'hell'
                    )
                    .to(this.roomChildren.cube012.scale,
                        {x:1,y:1,z:1,
                            ease:"back.out(2.2)",
                        duration:0.5},'hell'
                    )
                    .to(this.roomChildren.cube027.scale,
                        {x:1,y:1,z:1,
                            ease:"back.out(2.2)",
                        duration:0.5},'hell'
                    )
                    .to(this.roomChildren.circle001.scale,
                        {x:1,y:1,z:1,
                            ease:"back.out(2.2)",
                        duration:0.5,},'hell'
                    )
                    .to(this.roomChildren.cube020.scale,
                        {x:1,y:1,z:1,
                            ease:"back.out(2.2)",
                        duration:0.5},'hell'
                    )
                    .to(this.roomChildren.empty.scale,
                        {x: 0.04189883545041084, y: 0.04189883917570114, z: 0.04189884290099144,
                            ease:"back.out(2.2)",
                            duration:0.5},'hell')
                    .to(this.roomChildren.empty002.scale,
                         {x: 0.0397968664765358, y: 0.0397968627512455, z: 0.039796870201826096,
                            ease:"back.out(2.2)",
                            duration:0.5
                        },'hell')
                    .to(this.roomChildren.empty003.scale,
                        {x: 0.038516782224178314, y: 0.038516778498888016, z: 0.038516778498888016,
                            ease:"back.out(2.2)",
                            duration:0.5},'hell')
                    .to(this.roomChildren.cube004.scale,
                        {x: -0.6176504492759705, y: -0.31758835911750793, z: -0.9204704165458679,
                            ease:"back.out(2.2)",
                            duration:0.7
                        },'hell')
                        .to(this.roomChildren.drawer.scale,
                            {x:1,y:1,z:1,
                                ease:"back.out(2.2)",
                            duration:0.5},'hell'
                        )
                        .to(this.roomChildren.rectLight.position,
                            {x:1,y:4,z:0,
                                ease:"back.out(2.2)",
                            duration:0.5},'hell'
                        )
                        .to(this.roomChildren.rectLight1.position,
                            {x:-7,y:12,z:-5,
                                ease:"back.out(2.2)",
                            duration:0.5},'hell'
                        )
                        
                        .to(this.roomChildren.circle001.scale,
                            {x:1,y:1,z:1,
                                ease:"back.out(2.2)",
                            duration:0.5,
                            onComplete:resolve,},'hell'

                        )
                    
            }
              
        });
    }
    

    onScroll(e) {
 
        if (e.deltaY > 0) {
            this.removeEventListeners();
            this.playSecondIntro();
        }
    }
    onTouch(e)
    {
        this.initalY = e.touches[0].clientY;

    }
    onTouchMove(e)
    {
        let currentY = e.touches[0].clientY;
        let difference = this.initalY - currentY;
        if (difference > 0) {
            console.log("swipped up");
            this.removeEventListeners();
            this.playSecondIntro();
        }
        this.intialY = null;
    }
    removeEventListeners() {
        window.removeEventListener("wheel", this.scrollOnceEvent);
        window.removeEventListener("touchstart", this.touchStart);
        window.removeEventListener("touchmove", this.touchMove);
    }
    async playIntro(){
        await this.firstIntro();  
        this.scrollOnceEvent = this.onScroll.bind(this);
        this.touchStart = this.onTouch.bind(this);
        this.touchMove = this.onTouchMove.bind(this);
        window.addEventListener("wheel", this.scrollOnceEvent);
        window.addEventListener("touchstart", this.touchStart);
        window.addEventListener("touchmove", this.touchMove);

     
    }
    async  playSecondIntro(){
        await this.secondIntro(); 
        this.emit("enablecontrols");  
    }
    update() {
       
    }
}