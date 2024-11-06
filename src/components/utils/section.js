import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const section = () => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    ScrollTrigger.create({
        trigger: ".section4_fixed",
        scrub: 1,
        animation: gsap.fromTo(
        ".section4_fixed",
        {
            scale: (1.3, 1.3),
            opacity: 0,
            transformOrigin: "900px 18px",
        },
        {
            scale: 1,
            opacity: 1,
            transformOrigin: "50% 0%",
            translate3d: "0,-25px,0",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: "#reference .container-title",
        scrub: 1,
        animation: gsap.fromTo(
        "#reference .container-title",
        {
            scale: (1.3, 1.3),
            opacity: 0,
            transform: "translate(-50%, -50%)",
        },
        {
            scale: 1,
            opacity: 1,
            transform: "translate(-50%, -50%)",
        }
        ),
    });

    // =============================

    ScrollTrigger.create({
        trigger: "#site",
        scrub: 1,

        animation: gsap.fromTo(
            "#site .container-title",
            {
            transform: "translateX(-50%) skew(5deg,5deg) rotate(360deg)",
            yPercent: "50",
            },
            {
            transform: "translateX(-50%) skew(37deg, 349deg) rotate(60deg)",
            yPercent: "500",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#site",
        scrub: 1,

        animation: gsap.fromTo(
            ".item.project-01 .screenshot",
            {
            transform: "translateX(-50%) skew(346deg, 354deg) rotate(340deg)",
            yPercent: "50",
            },
            {
            transform: "translateX(-50%) skew(336deg, 334deg) rotate(20deg)",
            yPercent: "0",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#site",
        scrub: 1,

        animation: gsap.fromTo(
            ".item.project-01 .desc",
            {
            transform: "translateX(-50%) skew(0deg, 0deg) rotate(340deg)",
            yPercent: "100",
            },
            {
            transform: "translateX(-50%) skew(3deg, 3deg) rotate(10deg)",
            yPercent: "0",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#site",
        scrub: 1,

        animation: gsap.fromTo(
            ".item.project-02 .screenshot",
            {
            transform: "translateX(-50%) skew(19deg, 10deg) rotate(340deg)",
            yPercent: "50",
            },
            {
            transform: "translateX(-50%) skew(10deg, 29deg) rotate(20deg)",
            yPercent: "0",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#site",
        scrub: 1,

        animation: gsap.fromTo(
            ".item.project-02 .desc",
            {
            transform: "translateX(-50%) skew(340deg, 360deg) rotate(340deg)",
            yPercent: "100",
            },
            {
            transform: "translateX(-50%) skew(360deg, 340deg) rotate(20deg)",
            yPercent: "0",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#site",
        scrub: 1,

        animation: gsap.fromTo(
            ".item.project-03 .screenshot",
            {
            transform: "translateX(-50%) skew(346deg, 354deg) rotate(340deg)",
            yPercent: "50",
            },
            {
            transform: "translateX(-50%) skew(336deg, 334deg) rotate(20deg)",
            yPercent: "0",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#site",
        scrub: 1,

        animation: gsap.fromTo(
            ".item.project-03 .desc",
            {
            transform: "translateX(-50%) skew(0deg, 0deg) rotate(340deg)",
            yPercent: "100",
            },
            {
            transform: "translateX(-50%) skew(3deg, 3deg) rotate(10deg)",
            yPercent: "0",
            }
        ),
    });

    // ===========================

    ScrollTrigger.create({
        trigger: "#project",
        scrub: 1,

        animation: gsap.fromTo(
            "#project .container-title",
            {
            transform: "translateX(-50%) skew(5deg,5deg) rotate(360deg)",
            yPercent: "50",
            },
            {
            transform: "translateX(-50%) skew(37deg, 349deg) rotate(60deg)",
            yPercent: "500",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#project",
        scrub: 1,

        animation: gsap.fromTo(
            "#project .item.project-01 .screenshot",
            {
            transform: "translateX(-50%) skew(346deg, 354deg) rotate(340deg)",
            yPercent: "50",
            },
            {
            transform: "translateX(-50%) skew(336deg, 334deg) rotate(20deg)",
            yPercent: "0",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#project",
        scrub: 1,

        animation: gsap.fromTo(
            "#project .item.project-01 .desc",
            {
            transform: "translateX(-50%) skew(0deg, 0deg) rotate(340deg)",
            yPercent: "100",
            },
            {
            transform: "translateX(-50%) skew(3deg, 3deg) rotate(10deg)",
            yPercent: "0",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#project",
        scrub: 1,

        animation: gsap.fromTo(
            "#project .item.project-02 .screenshot",
            {
            transform: "translateX(-50%) skew(19deg, 10deg) rotate(340deg)",
            yPercent: "50",
            },
            {
            transform: "translateX(-50%) skew(10deg, 29deg) rotate(20deg)",
            yPercent: "0",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#project",
        scrub: 1,

        animation: gsap.fromTo(
            "#project .item.project-02 .desc",
            {
            transform: "translateX(-50%) skew(340deg, 360deg) rotate(340deg)",
            yPercent: "100",
            },
            {
            transform: "translateX(-50%) skew(360deg, 340deg) rotate(20deg)",
            yPercent: "0",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#project",
        scrub: 1,

        animation: gsap.fromTo(
            "#project .item.project-03 .screenshot",
            {
            transform: "translateX(-50%) skew(346deg, 354deg) rotate(340deg)",
            yPercent: "50",
            },
            {
            transform: "translateX(-50%) skew(336deg, 334deg) rotate(20deg)",
            yPercent: "0",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: "#project",
        scrub: 1,

        animation: gsap.fromTo(
            "#project .item.project-03 .desc",
            {
            transform: "translateX(-50%) skew(0deg, 0deg) rotate(340deg)",
            yPercent: "100",
            },
            {
            transform: "translateX(-50%) skew(3deg, 3deg) rotate(10deg)",
            yPercent: "0",
            }
        ),
    });

    //===========================



    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".container-ball", {
            y: -7500,
        }),
        animation: gsap.to(".container-ball", {
            y: 800,
        }),
    });

    // 섹션 5
    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.fromTo(
        ".lama_fur_test",
        {
            rotate: "-100",
            x: "-4000",
            y: "2500",
        },
        {
            rotate: "+=150",
            x: "3000",
            y: "-1000",
        }
        ),
    });

    ScrollTrigger.create({
        scrub: 0.1,
        animation: gsap.fromTo(
        ".lama_fur_top",
        {
            y: "-800",
        },
        {
            y: "100",
        }
        ),
    });

    // 섹션 9 : VUE 프로젝트
    ScrollTrigger.create({
        scrub: 0.1,
        animation: gsap.fromTo(
        ".section9_lama",
        {
            rotate: "+=1000",
            y: "-12800",
        },
        {
            rotate: "+=6000",
            y: "-100",
        }
        ),
    });

    ScrollTrigger.create({
        scrub: 0.1,
        animation: gsap.fromTo(
        ".section10_lama",
        {
            rotate: "+=1000",
            y: "-22800",
        },
        {
            rotate: "+=6000",
            y: "-100",
        }
        ),
    });

    ScrollTrigger.create({
        scrub: 0.1,
        animation: gsap.fromTo(
        ".section11_lama",
        {
            rotate: "+=1000",

            y: "-32800",
        },
        {
            rotate: "+=16000",

            y: "-100",
        }
        ),
    });

    ScrollTrigger.create({
        scrub: 0.1,
        animation: gsap.fromTo(
        ".section12_lama",
        {
            rotate: "+=1000",
            y: "-52800",
        },
        {
            rotate: "+=16000",
            y: "-100",
        }
        ),
    });

    ScrollTrigger.create({
        scrub: 0.1,
        animation: gsap.fromTo(
        ".section13_lama",
        {
            rotate: "+=1000",

            y: "-82800",
        },
        {
            rotate: "+=16000",

            y: "-100",
        }
        ),
    });

    ScrollTrigger.create({
        scrub: 0.1,
        animation: gsap.fromTo(
        ".section14_lama",
        {
            rotate: "+=1000",

            y: "-102800",
        },
        {
            rotate: "+=16000",

            y: "-100",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".vr1",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec8_logo",
        {
            x: "-150%",
            y: "-150%",
            scale: 0.8,
        },
        {
            x: "0%",
            y: "0%",
            scale: 1.6,
        }
        ),
    });
    ScrollTrigger.create({
        trigger: ".vr1",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec8_bg",
        {
            x: "50%",
            y: "0%",
            backgroundSize: 0,
        },
        {
            x: "20%",
            y: "0%",
            scale: 1.2,
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".vr2",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec10_logo",
        {
            x: "40%",
            y: "40%",
        },
        {
            x: "-30%",
            y: "-10%",
            scale: 1.2,
        }
        ),
    });
    ScrollTrigger.create({
        trigger: ".vr2",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec10_bg",
        {
            x: "0%",
            y: "0%",
            backgroundSize: 0,
        },
        {
            x: "20%",
            y: "0%",
            scale: 1.2,
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".vr3",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec11_logo",
        {
            x: "-40%",
            y: "0%",
        },
        {
            x: "30%",
            y: "0%",
            scale: 1.2,
        }
        ),
    });
    ScrollTrigger.create({
        trigger: ".vr3",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec11_bg",
        {
            x: "50%",
            y: "0%",
            backgroundSize: 0,
        },
        {
            x: "20%",
            y: "0%",
            scale: 1.2,
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".vr4",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec12_logo",
        {
            x: "40%",
            y: "0%",
            scale: 0.8,
        },
        {
            x: "-30%",
            y: "0%",
            scale: 1.6,
        }
        ),
    });
    ScrollTrigger.create({
        trigger: ".vr4",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec12_bg",
        {
            x: "0%",
            y: "0%",
            backgroundSize: 0,
        },
        {
            x: "20%",
            y: "0%",
            scale: 1.2,
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".vr5",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec13_logo",
        {
            x: "-40%",
            y: "-50%",
        },
        {
            x: "30%",
            y: "-50%",
            scale: 1.2,
        }
        ),
    });
    ScrollTrigger.create({
        trigger: ".vr5",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec13_bg",
        {
            x: "50%",
            y: "0%",
            backgroundSize: 0,
        },
        {
            x: "20%",
            y: "0%",
            scale: 1.2,
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".vr6",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec14_logo",
        {
            x: "40%",
            y: "0%",
            scale: 0.8,
        },
        {
            x: "-30%",
            y: "0%",
            scale: 1.6,
        }
        ),
    });
    ScrollTrigger.create({
        trigger: ".vr6",
        scrub: 1,
        animation: gsap.fromTo(
        ".sec14_bg",
        {
            x: "0%",
            y: "0%",
            backgroundSize: 0,
        },
        {
            x: "20%",
            y: "0%",
            scale: 1.2,
        }
        ),
    });

    gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
    gsap.set("#tractor", { transformOrigin: "50% 50%" });

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
    // gsap.matchMedia().add("(min-width: 700px)", () => {
    // });

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

    gsap.set("#motionSVG2", { scale: 0.7, autoAlpha: 1 });
    gsap.set("#fur", { transformOrigin: "50% 50%" });

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

    document.querySelectorAll("#mini > section").forEach((slide, i) => {
        let imageWrappers = slide.querySelectorAll("section > div");

        gsap.fromTo(
            imageWrappers,
            {
                y: "-30vh",
            },
            {
                y: "30vh",
                scrollTrigger: {
                    trigger: slide,
                    scrub: true,
                },
                ease: "none",
            }
        );
    });
};

export default section;
