import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "@/components/layout/Header.jsx";
import Main from "@/components/layout/Main.jsx";
import Footer from "@/components/layout/Footer.jsx";

import Home from "@/components/pages/Home";

import LoadingComponents from "@/components/common/LoadingComponents.jsx";
import AwardsComponents from "@/components/common/AwardsComponents.jsx";
import ProgressComponents from "@/components/common/ProgressComponents.jsx";
import NavigateComponents from "@/components/common/NavigateComponents.jsx";
import NavigationComponents from "@/components/common/NavigationComponents.jsx";
import SkipComponents from "@/components/common/SkipComponents.jsx";

import { data } from "@/components/utils/data";
import Animation from "@/components/utils/animation";

import useMatchMedia from "@/components/hooks/useMatchMedia";
import useRouteLoading from "@/components/hooks/useRouteLoading";

// ----
import section from "@/components/utils/section";
import gsaps from "@/components/utils/gsaps";
import gsapAnimation from "@/components/utils/gsapAnimation";

const App = () => {
	const isMobile = useMatchMedia("(max-width: 768px)");
    const { isLoaded, loadingCount } = useRouteLoading();
    const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
        if (!isMobile) {
            Animation.layout.main();
        }
    // 클린업 함수는 반환하지 않음
    }, [isMobile]);

    useEffect(() => {
        isVisible && setIsVisible(!isVisible);
    }, [isMobile])

    useEffect(() => {
        section();
        gsaps();
        gsapAnimation();
    }, [])
	return (
		<Router>
            <Header isMobile={isMobile} isVisible={isVisible} func={() => {setIsVisible(!isVisible)}}/>
			<Main>
				<AnimatePresence>{ !isVisible ? "" : <NavigationComponents count={loadingCount} func={() => {setIsVisible(!isVisible)}}/> }</AnimatePresence>
                <AnimatePresence>{ isLoaded ? "" : <LoadingComponents count={loadingCount} /> }</AnimatePresence>
                <Routes><Route path="/" element={ <Home isMobile={isMobile} data={data} /> } /></Routes>
                <ProgressComponents />
                <SkipComponents />
                <NavigateComponents />
                <AwardsComponents />
				{/* <DescFixed /> */}
			</Main>
			{/* <Footer /> */}
		</Router>
	);
};

export default App;