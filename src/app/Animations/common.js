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
                delay: .5,
                transition: 'ease-in',
                duration: 1,
                css: {
                    height: 'auto'
                }
            })
        })
    })
}