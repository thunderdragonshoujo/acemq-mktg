import { IO } from './observe';
import gsap from 'gsap';

export default function milestone() {
    const mileStone = document.querySelectorAll("[data-animation-id = 'milestone']")
    mileStone.forEach((item) => {
        gsap.set(item, {
            css: {
                height: 0
            }
        })
        IO(item, { threshold: .7 }).then(() => {
            gsap.to(item, {
                delay: .7,
                transition: 'ease-in',
                duration: 1.2,
                css: {
                    height: 'auto'
                }
            })
        })
    })
}

export const slideIn = () => {
    const slideIn = document.querySelectorAll("[data-animation-id='slideIn']")

    slideIn.forEach((item) => {
        IO(item, { threshold: .7 }).then(() => {
            gsap.to(item, {
                css: {
                    opacity: 1,
                    transform: 'translateX(0)'
                },
                duration: .5,
            })
        })
    })
}


export const fadeIn = () => {
    const fadeIn = document.querySelectorAll("[data-animation-id='fadeIn']")

    fadeIn.forEach((item) => {
        gsap.fromTo(item, {
            css: {
                opacity: 0
            }
        }, {
            css: {
                opacity: 1,
            },
            delay: .5
        })
    })
}