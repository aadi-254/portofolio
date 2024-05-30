
if( window.innerWidth > 800){
    gsap.registerPlugin(ScrollTrigger);


            // Page 2 Animations
            gsap.from(".para2", {
                y: 100,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".para2",
                    start: "top 100%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            });

            gsap.from(".image", {
                x: 300,
                opacity: 0,
                duration: 1.3,
                scrollTrigger: {
                    trigger: ".image",
                    start: "top 100%",
                    toggleActions: "restart none none none"
                }
            });

            // Page 3 Animations
            gsap.to(".b1", {
                y: -300,
                scrollTrigger: {
                    trigger: ".b1",
                    start: "top 100%",
                    end: "bottom 30%",
                    scrub: true
                }
            });

            gsap.to(".c1", {
                y: -450,
                scrollTrigger: {
                    trigger: ".c1",
                    start: "top 100%",
                    end: "bottom 30%",
                    scrub: true
                }
            });

            gsap.to(".d1", {
                y: -550,
                scrollTrigger: {
                    trigger: ".d1",
                    start: "top 100%",
                    end: "bottom 30%",
                    scrub: true
                }
            });

            gsap.to(".head", {
                x: 800,
                duration: 3,
                scrollTrigger: {
                    trigger: ".head",
                    start: "top 90%",
                    end: "bottom 10%",
                    scrub: true,
                    ease: "power.in"
                }
            });

            // Page 4 Animations
            gsap.from(".h4head", {
                y: 300,
                opacity: 0,
                duration: 1.6,
                delay: 0.28,
                scrollTrigger: {
                    trigger: ".h4head",
                    start: "top 133%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            });

            gsap.from(".certificate", {
                y: 300,
                opacity: 0,
                duration: 1.6,
                delay: 0.70,
                scrollTrigger: {
                    trigger: ".certificate",
                    start: "top 143%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            });

            gsap.from(".textP4", {
                y: 250,
                opacity: 0,
                duration: 1.7,
                delay: 0.70,
                scrollTrigger: {
                    trigger: ".textP4",
                    start: "top 156%",
                    toggleActions: "restart none none none",
                    markers: false
                }
            });

            // Page 5 Animations
            
            gsap.from(".h5head", {
              y:300,
              opacity:0,
              duration:1.1,
              delay:0.28,          
              scrollTrigger: {
                  trigger: ".h5head", // Set the trigger on .div2
                  start:"top 134%",
                  toggleActions: "restart none none none",
                  markers: false
              }   
            });


            gsap.to('.hobbies',{
              //x:-200,
              duration:3,
              scrollTrigger:{
                  trigger:'.hobbies',
                  scrub: true,
                  markers : false,
                  start: 'top 20%',
                  end:'+=2000',   
                  pin:'.hobbies',  
                  markers:false                                        
              }
            });




            window.addEventListener("scroll", () => {
            let scrol = window.scrollY;
            
            scrol -= 4100;
            scrol = Math.ceil(scrol);
            //console.log(scrol);
            const content = document.getElementById("hobbies");
            content.style.transform = `translateX(-${scrol}px)`;
            
            /****  inside img scroll  ****/
              scrol -= 120;
              const img1 = document.getElementById("i1");
              img1.style.transform = `translateX(-${scrol/2.5}px)`;
            
              scrol -= 180;
              const img2 = document.getElementById("i2");
              img2.style.transform = `translateX(-${scrol/2.5}px)`;   //here scrol/3 is controlling speed
            
              const img3 = document.getElementById("i3");
              img3.style.transform = `translateX(-${scrol/3}px)`;
            
              scrol -= 500;
              const img4 = document.getElementById("i4");
              img4.style.transform = `translateX(-${scrol/3}px)`;
            console.log(scrol);
            
            
            });

}
 
