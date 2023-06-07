import * as THREE from 'three'
import Experience from '../Experience/Experience'
import GSAP from 'gsap';
import '../style.css'
import { ScrollTrigger } from 'gsap/all';

export default class Controls {
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.sizes = this.experience.sizes;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.camera = this.experience.camera;
        this.room = this.experience.world.room.actualRoom;
        this.floor= this.experience.world.floor;
        GSAP.registerPlugin(ScrollTrigger);
        document.querySelector('.page').style.overflow = 'visibile';
        this.setPath();
        this.setScrollTrigger();


        this.circleFirst = this.experience.world.floor.circleFirst;
        this.circleSecond = this.experience.world.floor.circleSecond;
        this.circleThird = this.experience.world.floor.circleThird;


    }
    setPath(){}
   

    setScrollTrigger()
    {
        //Desktop
        ScrollTrigger.matchMedia({
            "(min-width: 500px)":()=>{
                this.room.scale.set(0.15, 0.15, 0.15);

                this.camera.orthographicCamera.position.set(0.5, 0.5, 0);
                this.room.position.set(0, 0, 0);
                 // First section -----------------------------------------
                 this.firstMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".first-move",
                        start: "top 90%",
                        end: "bottom bottom",
                        scrub: 0.6,
                        // markers: true,
                        invalidateOnRefresh: true,
                    },
                });
               
                this.firstMoveTimeline.fromTo(
                    this.room.position,
                    { x: 0, y: 0, z: 0 },
                    {
                        x: () => {
                            return this.sizes.width * 0.0014;
                        },
                    },
                    
                );
                this.firstMoveTimeline.to(this.floor.plane.position,{
                    y:-12, 
                    scrollTrigger:{
                        trigger:".first-move",
                       // markers:true,
                        start:'top 90%',
                        end:'100% 100%',
                        scrub:1
                    }
                    
                })
                this.firstMoveTimeline.to(this.floor.circleFirst.scale,{
                    x:3,
                    y:3,
                    z:3,
                    scrollTrigger:{
                        trigger:".first-move",
                       // markers:true,
                        start:'top bottom',
                        end:'100% 100%',
                        scrub:0.3
                    }
                    
                })
                this.firstMoveTimeline.to(this.floor.circleFirst.position,{
                    y:-11,
                    scrollTrigger:{
                        trigger:".first-section",
                       // markers:true,
                        start:'top bottom',
                        end:'5% 100%',
                        scrub:1
                    }
                    
                })
             
              


                this.firstMoveTimeline.to(
                    this.room.scale,
                   { x:1.1,
                    y:1.1,
                    z:1.1,
                    scrollTrigger:{
                        trigger:".first-section",
                       //  markers:true,
                        start:'top bottom',
                        end:'20% 10%',
                        scrub:1
                        },
                        
                    }
                );
                this.firstMoveTimeline.to(
                    this.room.position,
                   { y:-12,
                    scrollTrigger:{
                        trigger:".first-section",
                       //  markers:true,
                        start:'top bottom',
                        end:'20% 10%',
                        scrub:1
                        },
                        
                    }
                );
                // Second section -----------------------------------------
                this.secondMoveTimeline = new GSAP.timeline({
                    
                })
                .to(
                        
                        this.room.position,{
                            y:0.7,
                            x:()=>{ return this.sizes.width*(-0.0001); },
                            z:0.7,
                          
                
                            scrollTrigger:{
                                trigger:".second-move",
                               // markers:true,
                                start:'top bottom',
                                end:'10% 10%',
                                scrub:1,
                                invalidateOnRefresh :true
                            }
                        }
                    )
                    .to(
                        this.room.scale,
                      {  x:0.15,
                        y:0.15,
                        z:0.15,
             
                         scrollTrigger:{
                             trigger:".second-move",
                            // markers:true,
                             start:'top bottom',
                             end:'120% 120%',
                             scrub:1,
                             invalidateOnRefresh :true,
                
                         }}
                    )
                    
                    .to(this.room.position,{
            
                        x:()=>{ return this.sizes.width*(-0.000001); },
                        
                      
            
                        scrollTrigger:{
                            trigger:".second-section",
                           // markers:true,
                            start:'top bottom',
                            end:'10% 10%',
                            scrub:1,
                            invalidateOnRefresh :true
                        }
                        
                    })
                    .to(this.room.scale,{
                        
                       x:1.5,
                       y:1.5,
                       z:1.5,
            
                        scrollTrigger:{
                            trigger:".second-section",
                           // markers:true,
                            start:'top bottom',
                            end:'50% 50%',
                            scrub:1,
                            invalidateOnRefresh :true
                        }
                        
                    })
                    .to(this.room.position,{
                               
                        y:-17,
                        x:-14,
             
                         scrollTrigger:{
                             trigger:".second-section",
                            // markers:true,
                             start:'top bottom',
                             end:'10% 10%',
                             scrub:1,
                             invalidateOnRefresh :true
                         }
                         
                     });
                // third section -----------------------------------------
                this.thirdMoveTimeline = new GSAP.timeline({
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "-20% top",
                        end: "100% 100%",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                })
                .to(this.room.scale,{
                    x:0.15,
                    y:0.15,
                    z:0.15,
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "-20% top",
                        end: "100% 100%",
                        scrub: 0.6,
                        
                    },
                    
                    
                })
                .to(this.room.position,{
                    x:0,
                    y:0,
                    scrollTrigger: {
                        trigger: ".third-move",
                        start: "-20% top",
                        end: "100% 100%",
                        scrub: 0.6,
                        invalidateOnRefresh: true,
                    },
                    
                    
                    
                })
                .to(this.room.scale,{
                    x:1,
                    y:1,
                    z:1,
                    scrollTrigger:{
                        trigger:".third-section",
                       //  markers:true,
                        start:'top bottom',
                        end:'100% bottom',
                        scrub:1
                        }

                })
                .to(
                    this.room.position,
                    { 
                        y:-5 ,
                        x:3,
                        
                        scrollTrigger:{
                         trigger:".third-section",
                        //  markers:true,
                         start:'top bottom',
                         end:'100% bottom',
                         scrub:1
                         }
                         
                     }
                   )
               //FORTH-section------------
               this.forthMoveTimeleine = new GSAP.timeline(
                {scrollTrigger: {
                    trigger: ".forth-move",
                    start: "top 80%",
                    end: "100% 100%",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                },}
                
               )
               .to(this.room.scale,{
                x:0.15,
                y:0.15,
                z:0.15,
                scrollTrigger:{
                    trigger: ".forth-move",
                    start: "top 80%",
                    end: "100% 100%",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                    
                }
               })
               .to(this.room.position,{
                x:0,
                y:0,
                
                scrollTrigger:{
                    trigger: ".forth-move",
                    start: "top 80%",
                    end: "100% 100%",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                    
                }
               })
               .to(this.room.position,{
                x:-2,
                
                
                scrollTrigger:{
                    trigger: ".forth-move",
                    start: "5% bottom",
                    end: "100% 100%",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                    
                }
               })
               .to(this.room.scale,{
                x:1,
                y:1,
                z:1,
                
                
                scrollTrigger:{
                    trigger: ".forth-section",
                    start: "top bottom",
                    end: "100% 100%",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                    
                }
               })
               .to(this.room.position,{
                x:-12,
                y:-9.5,
                
                
                
                scrollTrigger:{
                    trigger: ".forth-section",
                    start: "top bottom",
                    end: "100% 100%",
                    scrub: 0.6,
                    invalidateOnRefresh: true,
                    
                }
               })

                    

            },
             //mobile
        "(max-width: 500px)": () => {
            // console.log("fired mobile");

            // Resets
            this.room.scale.set(0.07, 0.07, 0.07);
            this.room.position.set(0.3, 0.25, 0);
            this.experience.world.room.rectLight.width = 0.5;
            this.experience.world.room.rectLight.height = 0.5;
            this.experience.world.room.rectLight1.height =0.1;
            this.experience.world.room.rectLight1.width = 0.1;
            this.floor.circleFirst.position.set(.50,0);
           // this.camera.orthographicCamera.position.set(0.5, 0.5, 10);

             // First section -----------------------------------------
            this.firstMoveTimeline = new GSAP.timeline({
                scrollTrigger:{
                    trigger:'.first-move',
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.6,
                },

             }).to(this.floor.plane.position,{
                y:-10, 
                scrollTrigger:{
                    trigger:".first-move",
                   // markers:true,
                    start:'top 90%',
                    end:'100% 100%',
                    scrub:1
                }
                
            },'same')
            this.firstMoveTimeline.to(this.floor.circleFirst.scale,{
                x:1,
                y:1,
                z:1,
                scrollTrigger:{
                    trigger:".first-move",
                   // markers:true,
                    start:'top bottom',
                    end:'100% 100%',
                    scrub:1
                }
                
            })
            this.firstMoveTimeline.to(this.floor.circleFirst.position,{
                y:-20,
                scrollTrigger:{
                    trigger:".first-move",
                   // markers:true,
                    start:'75% bottom',
                    end:'5% 100%',
                    scrub:1
                }
                
            })
             .to(this.room.scale,{
                x:0.5,
                y:0.5,
                z:0.5,
             }).to(this.room.position,{
                y:-6,
             },'same')
             //second move-------------------
             this.secondMoveTimeline = new GSAP.timeline({
                scrollTrigger:{
                    trigger:'.second-move',
                    start:'top 90%',
                    end:'100% 100%',
                    scrub:1,
                }
             }).to(this.room.scale,{
                x:0.07,y: 0.07, z:0.07,
             },'same').to(this.room.position,{
               y:0,
             },'same')
             //second-section-----------------
             this.thirdMoveTimeline = new GSAP.timeline({
                scrollTrigger:{
                    trigger:'.second-section',
                    start:'top 90%',
                    end:'100% 100%',
                    scrub:1,
                }
             })
             .to(this.room.position,{
                y:-7,
                x:-9,
              },'same')
              .to(this.room.scale,{
                x:1,
                y:1,
                z:1,

              },'same');
             
              
              //fouth-section-----------------
            
              this.fifthMoveTimeline = new GSAP.timeline({
                scrollTrigger:{
                    trigger:'.third-move',
                    start:'top 90%',
                    end:'100% 100%',
                    scrub:1,
                }
             }) .to(this.room.scale,{
                x:0.07,y: 0.07, z:0.07,
                
              },'same').to(this.room.position,{
                x:0.2,
                y:0,
                z:0,
               
              },'same')//////////////////////////////////////////////////////////
             /* .to(this.room.postion,{
                x:3,
                y:-5,
                scrollTrigger:{
                    trigger:'.third-section',
                    start:'top bottom',
                    end:'80% 100%',
                    scrub:1,
                }
               
              })
             .to(this.room.scale,{
                x:0.5,
                y:0.5,
                z:0.5,
                scrollTrigger:{
                    trigger:'.third-section',
                    start:'top bottom',
                    end:'80% 100%',
                    scrub:1,
                }
             
              })*/;
              //forth-section--------------
              this.forthMoveTimeline = new GSAP.timeline({
                scrollTrigger:{
                    trigger:'.forth-move',
                    start:'10% 90%',
                    end:'100% 100%',
                    scrub:1,
                }
             }).to(this.room.scale,{
                x:1,
                y:1,
                z:1,
             },'same')
             .to(this.room.position,{
                x:-10,
                y:-10,
                
             },'same')
        },
        })
        
        
       
    }
    resize(){}
  
    update(){}
}