import { useEffect } from "react";
import Animation from "@/components/utils/animation";

const Section01 = ({isLoaded}) => {
    // useEffect(() => {
    //     if(isLoaded){
    //         // console.log("실행",isLoaded)
    //     }
    // }, [isLoaded])
    
    useEffect(() => {
        // Animation.section01.init();
        // Animation.section01.default();
    }, [])
    return (
        // 섹션 1 : 메인
        <section id="intro">
            <section className="container-desc">
                <h2>PORT<br /><em>FOLIO</em></h2>
            </section>

            <section className="container-image">
                <img className="ir dust_01" src="/images/section/01/main_lama.webp" alt="라마" />
                <img className="ir dust_02" src="/images/section/01/main_dust_char_01.webp" alt="먼지 캐릭터 1" />
                <img className="ir dust_03" src="/images/section/01/main_dust_char_02.webp" alt="먼지 캐릭터 2" data-depth="-60" />

                <img className="ir dust_09" src="/images/section/01/main_dust_01.webp" alt="먼지 1" />
                <img className="ir dust_10" src="/images/section/01/main_dust_02.webp" alt="먼지 2" />
                <img className="ir dust_11" src="/images/section/01/main_dust_03.webp" alt="먼지 3" />
                <img className="ir dust_07" src="/images/section/01/main_dust_04.webp" alt="먼지 4" />
                <img className="ir dust_08" src="/images/section/01/main_dust_05.webp" alt="먼지 5" />
            </section>
        </section>
    );
};

export default Section01;