import { useEffect } from "react";
import Animation from "@/components/utils/animation";

const Header = ({ isLoaded, isMobile, func }) => {
    useEffect(() => {
        Animation.layout.header();
    }, [isLoaded])

    return (
        <header id="header">
            <a href="#main">KIMSANGJUN</a>

            { isMobile && <button type="button" onClick={() => func()}>=</button> }
            { !isMobile &&
                <div className="list">
                    <a href="#javascript">자바스크립트</a>
                    <a href="#game">게임</a>
                    <a href="#reference">레퍼런스</a>
                    <a href="#site">프로젝트[개인]</a>
                    <a href="#project">프로젝트[팀]</a>
                    <a href="#vue&react">리액트/뷰</a>
                </div>
            }
        </header>
    );
};

export default Header;
