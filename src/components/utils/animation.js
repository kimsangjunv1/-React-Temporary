import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin, CSSPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSPlugin);

class Animation {
    // 기본 레이아웃
    static layout = {
        header: (target) => {
            ScrollTrigger.create({
                trigger: "#game",
                scrub: 0,
                start: () => "+=" + 5000,
                endTrigger: "#reference", // #skill이 화면에 닿을 때 종료
                end: () => "+=" + 16500,
                onEnter: () => {
                    gsap.to("#header a, #header h5, #progress p", { color: "#000000" });
                    // gsap.to("#progress .scroll_background", { backgroundColor: "#00000050" });
                },
                onLeave: () => {
                    gsap.to("#header a, #header h5, #progress p", { color: "#ffffff" });
                    // gsap.to("#progress .scroll_background", { backgroundColor: "#ffffff50" });
                },
                onEnterBack: () => {
                    gsap.to("#header a, #header h5, #progress p", { color: "#000000" });
                    // gsap.to("#progress .scroll_background", { backgroundColor: "#00000050" });
                },
                onLeaveBack: () => {
                    gsap.to("#header a, #header h5, #progress p", { color: "#ffffff" });
                    // gsap.to("#progress .scroll_background", { backgroundColor: "#ffffff50" });
                }
            });

            // 트리거 : 모든 프로젝트부터
            ScrollTrigger.create({
                trigger: "#amount",
                scrub: 0,
                start: () => "+=" + 16000,
                endTrigger: "#amount", // #skill이 화면에 닿을 때 종료
                end: () => "+=" + 1000,
                onEnter: () => {
                    console.log("amount들어옴");
                    gsap.to("#header a, #header h5, #progress p", { color: "#000000" });
                    // gsap.to("#progress .scroll_background", { backgroundColor: "#00000050" });
                },
                onLeave: () => {
                    console.log("amount나감")
                    gsap.to("#header a, #header h5, #progress p", { color: "#ffffff" });
                    // gsap.to("#progress .scroll_background", { backgroundColor: "#ffffff50" });
                },
                onEnterBack: () => {
                    console.log("amount다시들옴")
                    gsap.to("#header a, #header h5, #progress p", { color: "#000000" });
                    // gsap.to("#progress .scroll_background", { backgroundColor: "#00000050" });
                },
                onLeaveBack: () => {
                    console.log("amount다시나감")
                    gsap.to("#header a, #header h5, #progress p", { color: "#ffffff" });
                    // gsap.to("#progress .scroll_background", { backgroundColor: "#ffffff50" });
                }
            });
        },

        main: () => {
            const lenis = new Lenis({
                duration: 2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                direction: "vertical", // vertical, horizontal
                gestureDirection: "vertical", // vertical, horizontal, both
                smooth: true,
            });
        
            const raf = (time) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
        
            requestAnimationFrame(raf);
        },

        footer: () => {},

        progress: () => {}
    }

    // 섹션 1 : 인트로
    static section01 = {
        // 초기 애니메이션
        init : () => {
            gsap.to(".dust_01", {
                scrollTrigger: ".dust_01",
                transform: "translate(-50%,0%)",
                duration: 1.1,
            });
            gsap.to(".dust_02", {
                scrollTrigger: ".dust_02",
                transform: "translate(-50%,0%) rotate(0deg)",
                duration: 1.3,
            });
            gsap.to(".dust_03", {
                scrollTrigger: ".dust_03",
                transform: "translate(70%,0%) rotate(0deg)",
                duration: 1.5,
            });
            gsap.to(".dust_07", {
                scrollTrigger: ".dust_01",
                transform: "translate(70%, 0) rotate(0deg)",
                duration: 1.6,
            });
            gsap.to(".dust_08", {
                scrollTrigger: ".dust_01",
                transform: "translate(-60%, 0) rotate(0deg)",
                duration: 1.6,
            });
            gsap.to(".dust_09", {
                scrollTrigger: ".dust_01",
                transform: "translate(70%, 0) rotate(0deg)",
                duration: 1.6,
            });
            gsap.to(".dust_10", {
                scrollTrigger: ".dust_01",
                transform: "translate(-60%, 0) rotate(0deg)",
                duration: 1.6,
            });
            gsap.to(".dust_11", {
                scrollTrigger: ".dust_01",
                transform: "translate(-60%, 0) rotate(0deg)",
                duration: 1.6,
            });
        },
        
        // 기본 애니메이션
        default: () => {
            ScrollTrigger.create({
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
                scrub: 1,
                animation: gsap.fromTo(
                "#profile .lama",
                {
                    right: "-300px",
                },
                {
                    right: "0px",
                }
                ),
            });
        }
    }

    // 섹션 2 : 인사말
    static section02 = {
        init: () => {},

        default: () => {
            ScrollTrigger.create({
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
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
                trigger: "#profile",
                scrub: 1,
                animation: gsap.fromTo(
                "#profile .image",
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
        }
    }

    // 섹션 3 : 자바스크립트
    static section03 = {
        init: () => {
            // 가로 스크롤
            // 통 섹션을 짚어서 사용
            let sections = gsap.utils.toArray(".section3_item");
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: "#javascript",
                    pin: true,
                    scrub: true,
                    end: "+=5000",
                },
            });
        },

        default: () => {
            ScrollTrigger.create({
                scrub: 1,
                animation: gsap.from(".section3_item_bottom", {
                transform: "translateX(0%)",
                }),
                animation: gsap.to(".section3_item_bottom", {
                transform: "translateX(-50%)",
                }),
            });
        
            ScrollTrigger.create({
                scrub: 1,
                animation: gsap.from(".section3_item_bottom2", {
                    transform: "translateX(0%) scale(1.05)",
                }),
                animation: gsap.to(".section3_item_bottom2", {
                    transform: "translateX(-20%) scale(1.05)",
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

            // -----------------------

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
        }
    }

    static section04 = {
        init: () => {},

        default: () => {
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
        }
    }

    static section05 = {
        init: () => {},

        default: () => {
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
        }
    }

    static section07 = {
        init: () => {},

        default: () => {
            ScrollTrigger.create({
                trigger: "#project",
                scrub: 1,
    
                animation: gsap.fromTo(
                    ".section6p7_title", {
                        transform: "skew(5deg,5deg) rotate(360deg)",
                        yPercent: "150",
                    }, {
                        transform: "skew(37deg, 349deg) rotate(40deg)",
                        yPercent: "-3000",
                    }
                ),
            });
    
            ScrollTrigger.create({
                trigger: "#project",
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
                trigger: "#project",
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
                trigger: "#project",
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
                trigger: "#project",
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
                trigger: "#project",
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
                trigger: "#project",
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
                trigger: "#project",
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
                trigger: "#project",
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
                animation: gsap.from(".container-ball", {
                    y: -7500,
                }),
                animation: gsap.to(".container-ball", {
                    y: 800,
                }),
            });
        }
    }

    // 가로 스크롤이 필요한 섹션
    static horizontal = {
        section03: () => {
            // JS 이펙트 설명
            // 통 섹션을 짚어서 사용
            const sections = gsap.utils.toArray(".section3_item");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                trigger: "#javascript",
                // markers: true,
                pin: true,
                scrub: true,
                end: "+=5000",
                },
            });
        },

        section05: () => {
            // 게임 이펙트
            // 개별 아이템 하나하나가 다 섹션
            let sections2 = gsap.utils.toArray("#reference > section");
            gsap.to(sections2, {
                xPercent: -100 * (sections2.length - 1),
                ease: "none",
                // duration: 122.5,
                scrollTrigger: {
                trigger: "#reference",
                // markers: true,
                pin: true,
                scrub: 1,
                end: "+=11000",
                },
            });
        }
    }
}

export default Animation;