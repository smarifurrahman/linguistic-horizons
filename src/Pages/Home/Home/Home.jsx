import { Helmet } from "react-helmet-async";
import PopularClasses from "../PopularClasses/PopularClasses";
import Slider from "../Slider/Slider";
import Summary from "../Summary/Summary";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div className="font-bold">
            <Helmet>
                <title>Linguistic Horizons | Home</title>
            </Helmet>
            <Slider></Slider>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Summary></Summary>
        </div>
    );
};

export default Home;