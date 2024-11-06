import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const gsaps = () => {
    //   가로 스크롤 모음
    gsap.registerPlugin(ScrollTrigger);

    // JS 이펙트 설명
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

    // 게임 이펙트
    // 개별 아이템 하나하나가 다 섹션
    // let sections2 = gsap.utils.toArray(".panel2");
    // gsap.to(sections2, {
    //     xPercent: -100 * (sections2.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //     trigger: "#reference",
    //     pin: true,
    //     scrub: 1,
    //     end: "+=11000",
    //     },
    // });
};

export default gsaps;
