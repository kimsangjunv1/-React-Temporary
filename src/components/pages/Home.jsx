import React, { Fragment, Suspense } from "react";

// 동적으로 로드할 섹션 컴포넌트
const Section01 = React.lazy(() => import("@/components/include/Section01"));
const Section02 = React.lazy(() => import("@/components/include/Section02"));
const Section03 = React.lazy(() => import("@/components/include/Section03"));
const Section04 = React.lazy(() => import("@/components/include/Section04"));
const Section_03_5 = React.lazy(() => import("@/components/include/Section_03_5"));
const Section05 = React.lazy(() => import("@/components/include/Section05"));
const Section_05_5 = React.lazy(() => import("@/components/include/Section_05_5"));
const Section_06 = React.lazy(() => import("@/components/include/Section_06"));
const Section_06_5 = React.lazy(() => import("@/components/include/Section_06_5"));
const Section_07 = React.lazy(() => import("@/components/include/Section_07"));
const Section_09 = React.lazy(() => import("@/components/include/Section_09"));
const Section_10 = React.lazy(() => import("@/components/include/Section_10"));
const Section_11 = React.lazy(() => import("@/components/include/Section_11"));
const Section_12 = React.lazy(() => import("@/components/include/Section_12"));
const Section_13 = React.lazy(() => import("@/components/include/Section_13"));
const Section_14 = React.lazy(() => import("@/components/include/Section_14"));
const Section_15 = React.lazy(() => import("@/components/include/Section_15"));
const Section_16 = React.lazy(() => import("@/components/include/Section_16"));

const Home = ({ isMobile, isLoaded }) => {
	return (
		<Fragment>
			<Section01 />
			<Section02 />
			<Section03 isLoaded={isLoaded} />
			<Section_03_5 />
			<Section04 />
			<Section05 />
			<Section_05_5 />
			<Section_06 />
			<Section_06_5 />
			<Section_07 isLoaded={isLoaded} />
			<Section_09 />
			<Section_10 />
			<Section_11 />
			<Section_12 />
			<Section_13 />
			<Section_14 />
			<Section_15 />
			<Section_16 />
			{/* <Suspense fallback={<div>Loading...</div>}>
			</Suspense> */}
		</Fragment>
	);
};

export default Home;