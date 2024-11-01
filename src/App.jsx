// 라이브러리
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// 기본 레이아웃
import Header from "@/components/layout/Header.jsx";
import Main from "@/components/layout/Main.jsx";
import Footer from "@/components/layout/Footer.jsx";

// 페이지별
import Home from "@/components/pages/Home";

// 공통 컴포넌트
import LoadingComponents from "@/components/common/LoadingComponents.jsx";
import AwardsComponents from "@/components/common/AwardsComponents.jsx";
import ProgressComponents from "@/components/common/ProgressComponents.jsx";
import NavigateComponents from "@/components/common/NavigateComponents.jsx";
import NavigationComponents from "@/components/common/NavigationComponents.jsx";
import SkipComponents from "@/components/common/SkipComponents.jsx";
import Animation from "@/components/utils/animation";
import section from "@/components/utils/section";

// 더미
import { data } from "@/components/utils/data";

// 훅
import useMatchMedia from "@/components/hooks/useMatchMedia";
import useRouteLoading from "@/components/hooks/useRouteLoading";

const App = () => {
	const isMobile = useMatchMedia("(max-width: 768px)");
    const { isLoaded, loadingCount } = useRouteLoading();
    const [ isVisible, setIsVisible ] = useState(false);
    
    useEffect(() => {
        // !isMobile && Animation.layout.main();
        Animation.layout.main()
        isVisible && setIsVisible(!isVisible);
    }, [isMobile])

    useEffect(() => {
        if (isLoaded) {
            Animation.horizontal.section03();
            Animation.horizontal.section05();

            section();          // 핵심
        }
    }, [isLoaded])

	return (
		<Router>
            <SkipComponents />
            <Header isLoaded={isLoaded} isMobile={isMobile} isVisible={isVisible} func={() => {setIsVisible(!isVisible)}}/>
			<Main>
				<AnimatePresence>{ !isVisible ? "" : <NavigationComponents count={loadingCount} func={() => {setIsVisible(!isVisible)}}/> }</AnimatePresence>
                <AnimatePresence>{ isLoaded ? "" : <LoadingComponents count={loadingCount} /> }</AnimatePresence>
                <Routes><Route path="/" element={ <Home isMobile={isMobile} isLoaded={isLoaded} data={data} /> } /></Routes>
                <AwardsComponents />
                {/* <ProgressComponents /> */}
                {/* <NavigateComponents /> */}
			</Main>
			{/* <Footer /> */}
		</Router>
	);
};

export default App;