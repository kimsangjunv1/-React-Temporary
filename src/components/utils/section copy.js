import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const section = () => {
    gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".dust_01",
        {
            transform: "translate(-50%,0%) rotate(0deg)",
        },
        {
            transform: "translate(-50%,1020%) scale(3.0) rotate(200deg)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
            ".dust_02",
            {
                transform: "translate(-50%,0) rotate(0deg)",
            },
            {
                transform: "translate(-500%,-120%) scale(4.0) rotate(200deg)",
                filter: "blur(6px)",
            }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".dust_03",
        {
            transform: "translate(70%,0) rotate(0deg)",
        },
        {
            transform: "translate(300%,-200%) scale(1.5) rotate(200deg)",
            filter: "blur(5px)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".dust_07",
        {
            transform: "translate(70%,0) rotate(0deg)",
        },
        {
            transform: "translate(300%,-50%) scale(1.5) rotate(200deg)",
            filter: "blur(3px)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".dust_08",
        {
            transform: "translate(-60%,0) rotate(0deg)",
        },
        {
            transform: "translate(-500%,-120%) scale(2.0) rotate(200deg)",
            filter: "blur(3px)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".dust_09",
        {
            transform: "translate(70%,0) rotate(0deg)",
        },
        {
            transform: "translate(300%,-50%) scale(1.5) rotate(200deg)",
            filter: "blur(3px)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".dust_10",
        {
            transform: "translate(-60%,0) rotate(0deg)",
        },
        {
            transform: "translate(-500%,-120%) scale(2.0) rotate(200deg)",
            filter: "blur(3px)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".dust_11",
        {
            transform: "translate(-60%,0) rotate(0deg)",
        },
        {
            transform: "translate(-500%,-120%) scale(2.0) rotate(200deg)",
            filter: "blur(3px)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".section1_desc h2",
        {
            height: "27.2vw",
        },
        {
            height: "0vw",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".section .lama",
        {
            right: "-300px",
        },
        {
            right: "0px",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".n1",
        {
            scale: (1.4, 1.4),
            opacity: 0,
            transformOrigin: "1300px 18px",
            transform: "translate(0,50px)",
            filter: "blur(15px)",
        },
        {
            scale: 1,
            opacity: 1,
            transformOrigin: "50% 0%",
            transform: "translate3d(0,-30px,0)",
            filter: "blur(0px)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".n2",
        {
            scale: (1.3, 1.3),
            opacity: 0,
            transformOrigin: "900px 18px",
            transform: "translate(0,50px)",
            filter: "blur(7px)",
        },
        {
            scale: 1,
            opacity: 1,
            transformOrigin: "50% 0%",
            transform: "translate3d(0,-25px,0)",
            filter: "blur(0px)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".n3",
        {
            scale: (1.3, 1.3),
            opacity: 0,
            transformOrigin: "500px 18px",
            transform: "translate(0,50px)",
            filter: "blur(2px)",
        },
        {
            scale: 1,
            opacity: 1,
            transformOrigin: "50% 0%",
            transform: "translate3d(0,-25px,0)",
            filter: "blur(0px)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".n4",
        {
            scale: (1.3, 1.3),
            transformOrigin: "500px 18px",
            transform: "translate(0,50px)",
        },
        {
            scale: 1,
            transformOrigin: "50% 0%",
            transform: "translate3d(0,-25px,0)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".n5",
        {
            scale: (1.3, 1.3),
            transformOrigin: "500px 18px",
            transform: "translate(0,50px)",
        },
        {
            scale: 1,
            transformOrigin: "50% 0%",
            transform: "translate3d(0,-25px,0)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".n6",
        {
            scale: (1.3, 1.3),
            transformOrigin: "500px 18px",
            transform: "translate(0,50px)",
        },
        {
            scale: 1,
            transformOrigin: "50% 0%",
            transform: "translate3d(0,-25px,0)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".n7",
        {
            scale: (1.3, 1.3),
            opacity: 0,
            transformOrigin: "500px 18px",
            transform: "translate(0,50px)",
            filter: "blur(4px)",
        },
        {
            scale: 1,
            opacity: 1,
            transformOrigin: "50% 0%",
            transform: "translate3d(0,-25px,0)",
            filter: "blur(0px)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section2_cont",
        scrub: 1,
        animation: gsap.fromTo(
        ".section2_profile_cont",
        {
            scale: (1.3, 1.3),
            transformOrigin: "500px 18px",
            transform: "translate(0,50px)",
        },
        {
            scale: 1,
            transformOrigin: "50% 0%",
            transform: "translate3d(0,-25px,0)",
        }
        ),
    });

    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".section3_item_bottom", {
        transform: "translatex(0%)",
        }),
        animation: gsap.to(".section3_item_bottom", {
        transform: "translatex(-50%)",
        }),
    });

    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".section3_item_bottom2", {
        transform: "translatex(0%) scalex(-1)",
        }),
        animation: gsap.to(".section3_item_bottom2", {
        transform: "translatex(-30%) scalex(-1)",
        }),
    });

    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".section3_fixed", {
        opacity: 1,
        }),
        animation: gsap.to(".section3_fixed", {
        opacity: 0.3,
        }),
    });

    ScrollTrigger.create({
        trigger: ".section3_fixed",
        scrub: 1,
        animation: gsap.fromTo(
        ".section3_fixed",
        {
            scale: (1.3, 1.3),
            opacity: 0,
            transformOrigin: "900px 18px",
            transform: "translate(-50%, -50%)",
        },
        {
            scale: 1,
            opacity: 1,
            transformOrigin: "50% 0%",
            translate3d: "0,-25px,0",
            transform: "translate(-50%, -50%)",
        }
        ),
    });

    ScrollTrigger.create({
        trigger: ".section4_fixed",
        scrub: 1,
        animation: gsap.from(".section4_fixed", {
        scale: (1.3, 1.3),
        opacity: 0,
        transformOrigin: "900px 18px",
        transform: "translate(0,50px)",
        }),
        animation: gsap.to(".section4_fixed", {
        scale: 1,
        opacity: 1,
        transformOrigin: "50% 0%",
        transform: "translate3d(0,-25px,0)",
        }),
    });

    let proxy = { skew: 0 },
        skewSetter = gsap.quickSetter(".section4_cont>div", "skewY", "deg"), // fast
        clamp = gsap.utils.clamp(-10, 10);

    ScrollTrigger.create({
        onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -300);

        if (Math.abs(skew) > Math.abs(proxy.skew)) {
            proxy.skew = skew;
            gsap.to(proxy, {
            skew: 0,
            duration: 0.8,
            ease: "power3",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
            });
        }
        },
    });

    ScrollTrigger.create({
        trigger: ".section5_fixed",
        scrub: 1,
        animation: gsap.fromTo(
        ".section5_fixed",
        {
            scale: (1.3, 1.3),
            opacity: 0,
            transformOrigin: "900px 18px",
            transform: "translate(-50%, -50%)",
        },
        {
            scale: 1,
            opacity: 1,
            transformOrigin: "50% 0%",
            translate3d: "0,-25px,0",
            transform: "translate(-50%, -50%)",
        }
        ),
    });

    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".section3_item_bottom", {
        transform: "translatex(0%)",
        }),
        animation: gsap.to(".section3_item_bottom", {
        transform: "translatex(-50%)",
        }),
    });

    let mm2 = gsap.matchMedia();
    mm2.add("(min-width: 700px)", () => {
        ScrollTrigger.create({
            trigger: ".custom_color_dark",
            scrub: 1,

            animation: gsap.fromTo(
                ".section6p5_title",
                {
                transform: "skew(5deg,5deg) rotate(360deg)",
                yPercent: "50",
                },
                {
                transform: "skew(37deg, 349deg) rotate(60deg)",
                yPercent: "500",
                }
            ),
        });

        ScrollTrigger.create({
            trigger: ".custom_color_dark",
            scrub: 1,

            animation: gsap.fromTo(
                ".s5p5_1",
                {
                transform: "skew(346deg, 354deg) rotate(340deg)",
                yPercent: "50",
                },
                {
                transform: "skew(336deg, 334deg) rotate(20deg)",
                yPercent: "0",
                }
            ),
        });

        ScrollTrigger.create({
            trigger: ".custom_color_dark",
            scrub: 1,

            animation: gsap.fromTo(
                ".site_type_01_desc",
                {
                transform: "skew(0deg, 0deg) rotate(340deg)",
                yPercent: "100",
                },
                {
                transform: "skew(3deg, 3deg) rotate(10deg)",
                yPercent: "0",
                }
            ),
        });

        ScrollTrigger.create({
            trigger: ".custom_color_dark",
            scrub: 1,

            animation: gsap.fromTo(
                ".s5p5_4",
                {
                transform: "skew(19deg, 10deg) rotate(340deg)",
                yPercent: "50",
                },
                {
                transform: "skew(10deg, 29deg) rotate(20deg)",
                yPercent: "0",
                }
            ),
        });

        ScrollTrigger.create({
            trigger: ".custom_color_dark",
            scrub: 1,

            animation: gsap.fromTo(
                ".site_type_02_desc",
                {
                transform: "skew(340deg, 360deg) rotate(340deg)",
                yPercent: "100",
                },
                {
                transform: "skew(360deg, 340deg) rotate(20deg)",
                yPercent: "0",
                }
            ),
        });

        ScrollTrigger.create({
        trigger: ".custom_color_dark",
        scrub: 1,

        animation: gsap.fromTo(
            ".s5p5_7",
            {
            transform: "skew(346deg, 354deg) rotate(340deg)",
            yPercent: "50",
            },
            {
            transform: "skew(336deg, 334deg) rotate(20deg)",
            yPercent: "0",
            }
        ),
        });
        ScrollTrigger.create({
        trigger: ".custom_color_dark",
        scrub: 1,

        animation: gsap.fromTo(
            ".site_type_03_desc",
            {
            transform: "skew(0deg, 0deg) rotate(340deg)",
            yPercent: "100",
            },
            {
            transform: "skew(3deg, 3deg) rotate(10deg)",
            yPercent: "0",
            }
        ),
        });

        ScrollTrigger.create({
            trigger: ".bg_change_purple",
            scrub: 1,

            animation: gsap.fromTo(
                ".section6p7_title",
                {
                    transform: "skew(5deg,5deg) rotate(360deg)",
                    yPercent: "150",
                },
                {
                    transform: "skew(37deg, 349deg) rotate(40deg)",
                    yPercent: "-3000",
                }
            ),
        });

        ScrollTrigger.create({
            trigger: ".bg_change_purple",
            scrub: 1,

            animation: gsap.fromTo(
                ".s6p5_1",
                {
                    transform: "skew(1deg, 350deg) rotate(340deg) scale(2.1)",
                    yPercent: "100",
                },
                {
                    transform: "skew(136deg, 34deg) rotate(20deg) scale(2.1)",
                    yPercent: "-1500",
                }
            ),
        });

        ScrollTrigger.create({
            trigger: ".bg_change_purple",
            scrub: 1,

            animation: gsap.fromTo(
                ".s6p5_2",
                {
                transform: "skew(346deg, 354deg) rotate(340deg)",
                yPercent: "50",
                },
                {
                transform: "skew(336deg, 334deg) rotate(20deg)",
                yPercent: "0",
                }
            ),
        });

        ScrollTrigger.create({
            trigger: ".bg_change_purple",
            scrub: 1,

            animation: gsap.fromTo(
                ".site_type_04_desc",
                {
                transform: "skew(0deg, 0deg) rotate(340deg)",
                yPercent: "100",
                },
                {
                transform: "skew(3deg, 3deg) rotate(10deg)",
                yPercent: "0",
                }
            ),
        });

        ScrollTrigger.create({
        trigger: ".bg_change_purple",
        scrub: 1,

        animation: gsap.fromTo(
            ".s6p5_4",
            {
            transform: "skew(346deg, 354deg) rotate(320deg) scale(1.8)",
            yPercent: "100",
            },
            {
            transform: "skew(360deg, 334deg) rotate(20deg) scale(1.8)",
            yPercent: "-1500",
            }
        ),
        });
        ScrollTrigger.create({
        trigger: ".bg_change_purple",
        scrub: 1,

        animation: gsap.fromTo(
            ".site_type_05_desc",
            {
            transform: "skew(0deg, 0deg) rotate(340deg)",
            yPercent: "100",
            },
            {
            transform: "skew(3deg, 3deg) rotate(10deg)",
            yPercent: "0",
            }
        ),
        });

        ScrollTrigger.create({
        trigger: ".bg_change_purple",
        scrub: 1,

        animation: gsap.fromTo(
            ".s6p5_7",
            {
            transform: "skew(15deg, 4deg) rotate(0deg) scale(1.8)",
            yPercent: "100",
            },
            {
            transform: "skew(15deg, 4deg) rotate(21deg) scale(1.8)",
            yPercent: "-1500",
            }
        ),
        });
        ScrollTrigger.create({
        trigger: ".bg_change_purple",
        scrub: 1,

        animation: gsap.fromTo(
            ".site_type_06_desc",
            {
            transform: "skew(340deg, 340deg) rotate(340deg)",
            yPercent: "100",
            },
            {
            transform: "skew(0deg, 0deg) rotate(10deg)",
            yPercent: "0",
            }
        ),
        });

        ScrollTrigger.create({
        trigger: ".s6p5_10",
        scrub: 1,

        animation: gsap.fromTo(
            ".s6p5_10",
            {
            transform: "skew(9deg, 19deg) rotate(340deg) scale(1.9)",
            yPercent: "50",
            },
            {
            transform: "skew(6deg, 10deg) rotate(20deg) scale(1.9)",
            yPercent: "0",
            }
        ),
        });
        ScrollTrigger.create({
        trigger: ".s6p5_10",
        scrub: 1,

        animation: gsap.fromTo(
            ".s6p5_11",
            {
            transform: "skew(346deg, 354deg) rotate(340deg)",
            yPercent: "50",
            },
            {
            transform: "skew(336deg, 344deg) rotate(20deg)",
            yPercent: "0",
            }
        ),
        });
        ScrollTrigger.create({
        trigger: ".bg_change_purple",
        scrub: 1,

        animation: gsap.fromTo(
            ".site_type_07_desc",
            {
            transform: "skew(0deg, 0deg) rotate(210deg)",
            yPercent: "100",
            },
            {
            transform: "skew(3deg, 3deg) rotate(360deg)",
            yPercent: "0",
            }
        ),
        });

        ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".ball_cont", {
            y: -7500,
        }),
        animation: gsap.to(".ball_cont", {
            y: 800,
        }),
        });
    });

    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i001", {
        x: "150%",
        }),
        animation: gsap.to(".i001", {
        x: "-650%",
        }),
    });
    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i001 .item_desc", {
        x: "150%",
        }),
        animation: gsap.to(".i001 .item_desc", {
        x: "-1000%",
        }),
    });

    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i002", {
        x: "100%",
        }),
        animation: gsap.to(".i002", {
        x: "-400%",
        }),
    });
    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i002 .item_desc", {
        x: "150%",
        }),
        animation: gsap.to(".i002 .item_desc", {
        x: "-1000%",
        }),
    });

    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i003", {
        x: "120%",
        }),
        animation: gsap.to(".i003", {
        x: "-450%",
        }),
    });
    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i003 .item_desc", {
        x: "150%",
        }),
        animation: gsap.to(".i003 .item_desc", {
        x: "-500%",
        }),
    });

    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i004", {
        x: "200%",
        }),
        animation: gsap.to(".i004", {
        x: "-450%",
        }),
    });
    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i004 .item_desc", {
        x: "100%",
        }),
        animation: gsap.to(".i004 .item_desc", {
        x: "-700%",
        }),
    });

    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i005", {
        x: "200%",
        }),
        animation: gsap.to(".i005", {
        x: "-400%",
        }),
    });
    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i005 .item_desc", {
        x: "250%",
        }),
        animation: gsap.to(".i005 .item_desc", {
        x: "-1000%",
        }),
    });

    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i006", {
        x: "250%",
        }),
        animation: gsap.to(".i006", {
        x: "-250%",
        }),
    });
    ScrollTrigger.create({
        scrub: 1,
        animation: gsap.from(".i006 .item_desc", {
        x: "150%",
        }),
        animation: gsap.to(".i006 .item_desc", {
        x: "-300%",
        }),
    });

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
        trigger: ".t_vr",
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

    var animation;

    let mm = gsap.matchMedia();

    mm.add("(min-width: 700px)", () => {
        gsap.set("#motionSVG", { scale: 0.7, autoAlpha: 1 });
        gsap.set("#tractor", { transformOrigin: "50% 50%" });

        animation = gsap.to("#motionSVG", {
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
        trigger: ".pin2",
        scrub: 1,

        animation: gsap.fromTo(
            ".lama_fur2",
            {
            transform: "rotate(0deg)",
            yPercent: "100",
            },
            {
            transform: "rotate(70deg)",
            yPercent: "0",
            }
        ),
        });
    });

    ScrollTrigger.create({
        trigger: ".vr8",
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

    var animation2;

    let mm3 = gsap.matchMedia();
    mm3.add("(min-width: 700px)", () => {
        gsap.set("#motionSVG2", { scale: 0.7, autoAlpha: 1 });
        gsap.set("#tractor2", { transformOrigin: "50% 50%" });

        animation2 = gsap.to("#motionSVG2", {
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
    });

    const slides = document.querySelectorAll(".t_vr");

    function initParallax() {
        slides.forEach((slide, i) => {
        let imageWrappers = slide.querySelectorAll(".t_vr > div");

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
    }
    initParallax();
};

export default section;
