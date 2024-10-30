import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin, CSSPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, CSSPlugin);

class Animation {
    // 기본 레이아웃
    static layout = {
        header: (target) => {
            // Marquee 효과
            const sections = gsap.utils.toArray(".marquee .content");
            for(let i = 0; i <= sections.length - 1; i++ ) {
                gsap.to(sections[i], {
                    xPercent: -100,
                    repeat: -1,
                    duration: 70,
                    ease: "linear",
                    modifiers: {
                        xPercent: gsap.utils.wrap(-100, 0)
                    }
                });
            };

            // 로고 반복 애니메이션
            gsap.fromTo("#header .logo a img",{
                opacity: 0.8,
            },{
                opacity: 1,
                // rotate: 720,
                repeat: -1,
                duration: 0.5,
                ease: "power1.inout",
                yoyo: true,
            });

            // 각 섹션별 DOM
            const conatinerSkill = document.querySelector("#skill");
            const containerEducation = document.querySelector("#education");

            ScrollTrigger.create({
                trigger: "#education", // 트리거할 섹션을 #skill로 설정
                start: () => "+=" + conatinerSkill.offsetWidth,
                end: () => "+=" + containerEducation.offsetHeight,
                onEnter: () => {
                  gsap.to("#header a, #header h5, #progress p", { color: "#000000" });
                  gsap.to("#progress .scroll_background", { backgroundColor: "#00000050" });
                },
                onLeave: () => {
                  gsap.to("#header a, #header h5, #progress p", { color: "#ffffff" });
                  gsap.to("#progress .scroll_background", { backgroundColor: "#ffffff50" });
                },
                onEnterBack: () => {
                  gsap.to("#header a, #header h5, #progress p", { color: "#000000" });
                  gsap.to("#progress .scroll_background", { backgroundColor: "#00000050" });
                },
                onLeaveBack: () => {
                  gsap.to("#header a, #header h5, #progress p", { color: "#ffffff" });
                  gsap.to("#progress .scroll_background", { backgroundColor: "#ffffff50" });
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

    // 섹션 1 : 인사말
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
        }
    }

    // 섹션 1 : 인사말
    static section02 = {
        init: () => {

        },

        default: () => {
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
        }
    }

    // 섹션 1 : 인사말
    static section03 = {
        init: () => {
            // 가로 스크롤
            // 통 섹션을 짚어서 사용
            let sections = gsap.utils.toArray(".section3_item");
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                trigger: ".horizontal",
                // markers: true,
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

    static horizontal = {
        section03: () => {
            // JS 이펙트 설명
            // 통 섹션을 짚어서 사용
            const sections = gsap.utils.toArray(".section3_item");

            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                trigger: ".horizontal",
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
            let sections2 = gsap.utils.toArray(".panel2");
            gsap.to(sections2, {
                xPercent: -100 * (sections2.length - 1),
                ease: "none",
                // duration: 122.5,
                scrollTrigger: {
                trigger: ".horizontal2",
                // markers: true,
                pin: true,
                scrub: 1,
                end: "+=11000",
                },
            });
        }
    }

    // 가로 스크롤 전용
    static sectionHorizontal(target) {
        const sections = gsap.utils.toArray(".horizontal > section");
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: target.container.current,
                pin: true,
                scrub: 0,
                // snap: 1 / (sections.length - 1),
                end: () => "+=" + target.container.current.offsetWidth,
            },
        });
    }

    // 가로 스크롤 전용
    static sectionHorizontalTest(target) {
        const sections = gsap.utils.toArray("#skill > section");

        gsap.to(sections, {
            x: `-${target.container.current.offsetWidth}`,
            ease: "none",
            scrollTrigger: {
                trigger: target.container.current,
                pin: true,
                scrub: 0,
                end: () => "+=" + target.container.current.offsetWidth,
            },
        });
    }
}

export default Animation;