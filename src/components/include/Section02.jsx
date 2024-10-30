import { useEffect } from "react";
import Animation from "@/components/utils/animation";

const Section02 = () => {
    useEffect(() => {
        Animation.section02.default();
    }, [])
return (
    // 섹션 2 : 김상준 소개
    <section className="section flex_ctrl">
        <div className="section2_cont">
            <div className="section2_desc">
                <h2 className="fifth_name n1">SANGJUN</h2>
                <h2 className="fifth_name n2">SANGJUN</h2>
                <h2 className="fifth_name n3">SANGJUN</h2>
                <h2 className="first_name n4">KIM</h2>
                <p className="porfolio_desc n5">
                    새싹을 틔울 수 있는 씨앗이 되겠습니다.
                </p>
                <h2 className="second_name n6">SANGJUN</h2>
                <h2 className="fifth_name n7">SANGJUN</h2>
            </div>
            <div className="section2_profile_cont">
                <img src="/images/section/02/profile.webp" alt="김상준" className="section2_profile ir" />
            </div>
        </div>
        <img src="/images/section/02/lama.webp" alt="라마" className="lama" />
    </section>
);
};

export default Section02;
