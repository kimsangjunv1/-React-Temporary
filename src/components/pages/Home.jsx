import { Fragment } from "react";

// 섹션
import Section01 from "@/components/include/Section01";
import Section02 from "@/components/include/Section02";
import Section03 from "@/components/include/Section03";
import Section04 from "@/components/include/Section04";

import Section_03_5 from "@/components/include/Section_03_5";	// wave
import Section05 from "@/components/include/Section05";
import Section_05_5 from "@/components/include/Section_05_5";
import Section_06 from "@/components/include/Section_06";
import Section_06_5 from "@/components/include/Section_06_5";
import Section_07 from "@/components/include/Section_07";
import Section_09 from "@/components/include/Section_09";
import Section_10 from "@/components/include/Section_10";
import Section_11 from "@/components/include/Section_11";
import Section_12 from "@/components/include/Section_12";
import Section_13 from "@/components/include/Section_13";
import Section_14 from "@/components/include/Section_14";
import Section_15 from "@/components/include/Section_15";
import Section_16 from "@/components/include/Section_16";

import { data } from "@/components/utils/data";

const Home = ({ isMobile, isLoaded }) => {
	return (
		<Fragment>
			<Section01 isLoaded={isLoaded} />
			<Section02 />
			<Section03 isLoaded={isLoaded}/>
			<Section_03_5 />
			<Section04 />
			<Section05 />
			<Section_05_5 />

			<Section_06 isLoaded={isLoaded} />
			<Section_06_5 />
			<Section_07 isLoaded={isLoaded}/>

			<Section_09 />

			<Section_15 />
			<Section_16 />
		</Fragment>
	);
};

export default Home;
