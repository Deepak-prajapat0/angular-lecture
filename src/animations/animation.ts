import { animate, animation, keyframes, style, transition, trigger } from "@angular/animations";

export const bounceAnimation = animation(
    animate(".5s ease-in-out",keyframes([
        style({
            offset:.2,
            opacity:1,
            transform:"translateX(20px)"

        }),
        style({
            offset:1,
            opacity:0,
            transform:"translateX(-100%)"
        })
    ]))
)

export const slide = trigger('slide',[
    transition(':enter',[
        style({transform:'translateX(-10px)'}),
        animate(500)
    ]),
    transition(':leave',[
        animate(500,style({transform:'translateX(-100%'}))
    ])
])