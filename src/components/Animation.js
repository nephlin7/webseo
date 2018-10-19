import { TweenMax, Elastic, Power2, Bounce,  Power1 } from "gsap";

const duration = 1;

export default {

    show(target, cb) {
         
        return TweenMax.fromTo(target, duration, 
            {x: '-=100'}, 
            {x: 0, 
                ease:Power2.easeInOut, 
                onStart(){
                    console.log('start')
                }
            }).to
        },
    hide(target, cb) {
        return TweenMax
        .from(target, duration, {
                opacity:0,
                height:0,
                onComplete(){
                    console.log('complete')
                },
                ease: Elastic.easeOut.config(0.25, 1),
        });
    }
}
