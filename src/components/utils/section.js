import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const section = () => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
    gsap.set("#motionSVG2", { scale: 0.7, autoAlpha: 1 });

    gsap.set("#tractor", { transformOrigin: "50% 50%" });
    gsap.set("#fur", { transformOrigin: "50% 50%" });

    gsap.to("#motionSVG", {
        scrollTrigger: {
            trigger: "#motionPath",
            start: "top 80%",
            scrub: 3,
        },
        duration: 10,
        ease: "none",
        immediateRender: true,
        motionPath: {
            path: "#motionPath",
            align: "#motionPath",
            alignOrigin: [0.5, 0.5],
            autoRotate: 210,
        },
    });

    gsap.to("#motionSVG2", {
        scrollTrigger: {
            trigger: "#motionPath2",
            start: "top 130%",
            scrub: 1,
        },
        duration: 10,
        ease: "none",
        immediateRender: true,
        motionPath: {
            path: "#motionPath2",
            align: "#motionPath2",
            alignOrigin: [0.5, 0.5],
        },
    });

    ScrollTrigger.create({
        trigger: ".divider.type-03",
        scrub: 1,

        animation: gsap.fromTo(
            ".lama_fur2",
            {
                transform: "rotate(-70deg)",
                yPercent: "100",
            },
            {
                transform: "rotate(70deg)",
                yPercent: "0",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#end",
        scrub: 1,

        animation: gsap.fromTo(
        ".section16_lama",
        {
            right: "-100%",
        },
        {
            right: "0%",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: "#motionPath2",
        scrub: 1,
        animation: gsap.fromTo(
            "#motionSVG2",
            {
            rotate: "+=3000",
            },
            {
            rotate: "+=3000",
            }
        ),
    });
};

export default section;
