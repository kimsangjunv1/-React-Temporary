import { useEffect } from "react";
import ReactPlayer from "react-player";
import Animation from "@/components/utils/animation";

import section5p5_light from "./../../assets/img/section5p5_light.svg";

const Section_07 = () => {
    // useEffect(() => {
    //     Animation.section07.default();
    // }, [])
    return (
        <section id="project">
            {/* 타이틀 */}
            <section className="container-title">
                <p>PERSONAL <em>PROJECT</em></p>
            </section>
            {/* 타이틀 END */}

            {/* 컨텐츠 */}
            <section className="container-contents">
                {Array(3).fill(0).map((e, i) => 
                    <div className={`item project-0${i + 1}`} key={i}>
                        <ReactPlayer
                            className="screenshot"
                            url="/videos/section/06/video-pickle.mp4"
                            loop={true}
                            playing={true} // 자동 재생 on
                            muted={true} // 자동 재생 on
                            controls={false} // 플레이어 컨트롤 노출 여부
                            light={false} // 플레이어 모드
                            width={"54.0rem"}
                            height={"fit-content"}
                            config={{
                                file: {
                                    attributes: {
                                        playsInline: true, // 모바일 기기에서 비디오를 재생합니다.
                                    },
                                },
                            }}
                        />
                        <div className="desc">
                            <h2>PICK</h2>

                            <div className="type">
                                <span>팀 프로젝트</span>
                                <span>담당 : 디자인 100% / 프론트 60% / 퍼블리싱 80%</span>
                            </div>

                            <p>
                                <strong>뮤직플레이어 Pick은 날씨에 따라<br />음악을 추천해주는 사이트 입니다</strong>
                                <br />
                                <br />
                                Axios를 사용해 RESTful API를 활용해서 각 컴포넌트 별로 props를
                                <br />
                                넘겨주고 컴포넌트간의 가공된 데이터를 받을 수 있도록 Redux
                                <br />
                                Toolkit을 통해 관리하였습니다.
                                <br />
                                <br />
                                메인화면 첫번째 섹션에 어떤 음악들이 추천되었는지 두번째 섹션에
                                <br />
                                주간 날씨가 어떤지 세번째 섹션에는 각 음악들의 순위와 아티스트들을
                                <br />
                                보여주도록 하였으며
                                <br />
                                <br />
                                각 아티스트가 어떤 음악을 녹음했는지 발매 정보를 각
                                <br />
                                아티스트별로 클릭을 했을때 보여주고 해당 음원들을 눌렀을때
                                <br />
                                실제로 재생되도록 하였습니다.
                            </p>

                            <div className="link">
                                <a href="https://github.com/kimsangjunv1/-React-Pick-Music-Player">CODE</a>
                                <a href="https://react-pick.netlify.app">VIEW</a>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            {/* 컨텐츠 END */}

            {/* 데코용 */}
            <section className="container-deco">
                <div className="light ir">light</div>
                <img className="light_on_top" src={section5p5_light} alt="" />
            </section>
            {/* 데코용 END */}

            {/* 꾸미기용 */}
            <section className="container-ball">
                {Array(20).fill(0).map((e, i) => 
                    <div className={`ball ball_${i + 1} ir`} key={i}>ball</div>
                )}
            </section>
            {/* 꾸미기용 END */}

            {/* GSAP 모션 패스 */}
            <svg id="linesvg2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 869 3002" xmlSpace="preserve"><path id="motionPath2" d="M167.225,-403.62099 C164.603,-396.38299 119.822,-259.879 276.208,29.711 727.733,865.833 454.402,855.295 436.65,773.699 420.073,697.503 590.043,644.41 479.872,966.493 421.66,1136.673 410.512,1195.246 445.191,1295.957 483.171,1406.265 412.591,1449.072 446.979,1622.156 534.741,2063.89 420.595,2259.622 420.595,2259.622"/><g id="motionSVG2"><svg id="fur" width="148" height="163" viewBox="0 0 148 163" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M56.7845 37.6048C58.9426 24.2784 69.8392 16.4193 73.5859 8.92187" stroke="#202033" strokeWidth="7" strokeLinecap="round"/><path d="M143.113 46.1199C137.162 54.1095 124.419 50.9721 116.508 62.2266" stroke="#202033" strokeWidth="7" strokeLinecap="round"/><rect width="105" height="92" rx="46" transform="matrix(-0.987139 -0.159865 -0.159865 0.987139 128.711 44.1855)" fill="#F4F4F4" stroke="#F4F4F4" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 15"/><rect width="80" height="68" rx="34" transform="matrix(-0.987139 -0.159865 -0.159865 0.987139 116.867 42.2671)" fill="white" stroke="white" strokeWidth="17" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 15"/><rect x="66.2637" y="51.8433" width="6" height="6" rx="3" transform="rotate(-113.328 66.2637 51.8433)" fill="#343440"/><rect x="86.6035" y="57.4346" width="6" height="6" rx="3" transform="rotate(-113.328 86.6035 57.4346)" fill="#343440"/><path d="M71.9551 53.7363C74.1736 54.7762 78.6322 55.7939 81.0192 56.6873" stroke="#202033" strokeWidth="3" strokeLinecap="round"/><path d="M81.2648 58.7908C80.437 57.6435 81.2522 55.7496 82.8123 55.4962" stroke="#202033" strokeWidth="3" strokeLinecap="round"/><path d="M22.125 109.292C7.65096 116.15 8.29386 130.946 3.67837 128.17" stroke="#202033" strokeWidth="7" strokeLinecap="round"/><path d="M65.2677 126.107C50.7937 132.966 57.6089 153.431 52.9934 150.655" stroke="#202033" strokeWidth="7" strokeLinecap="round"/></svg></g></svg>
            {/* GSAP 모션 패스 END */}
        </section>
    );
};

export default Section_07;
