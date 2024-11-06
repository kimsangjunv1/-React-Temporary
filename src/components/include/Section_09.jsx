import React from "react";

import section9_lama from "./../../assets/img/section9_lama.svg";
import section9_logo from "./../../assets/img/section9_logo.png";
import section9_logo_bg from "./../../assets/img/section9_logo_bg.jpg";
import section9_screenshot_01 from "./../../assets/img/section9_screenshot_01.png";


const Section_09 = () => {
    return (
        <section id="mini">
            {Array(6).fill(0).map((e, i) =>
                <section className="item">
                    <div className="container-inner">
                        <section className="container-desc">
                            <img className="deco" src={section9_lama} alt="" />

                            <section>
                                <h2>POPULAR MOVIE<br /><em>WEBSITE</em></h2>
                                <p>REACT</p>
                            </section>

                            <section>
                                <p>
                                    Axios를 사용해 RESTful API를 활용하여
                                    <br />
                                    TMDB에서 제공하는 api를 이용해 검색
                                    <br />
                                    가능한 영화 목록 웹사이트를 만들었습니다.
                                    <br />
                                    <br />
                                    영화 목록들을 검색하고 검색한 결과를 보여주는 사이트를 만들었습니다.
                                </p>
                            </section>

                            <section>
                                <a href="https://github.com/kimsangjunv1/react_api">CODE</a>
                                <a href="https://reactapi11.netlify.app/movie">VIEW</a>
                            </section>
                        </section>

                        <section className="container-logo">
                            <img className="main" src={section9_logo} alt="" />
                            <img className="sub" src={section9_logo_bg} alt="" />
                        </section>

                        <section className="container-screenshot">
                            <img src={section9_screenshot_01} alt="" />
                        </section>
                    </div>
                </section>
            )}
        </section>
    );
};

export default Section_09;