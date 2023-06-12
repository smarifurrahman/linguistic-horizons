import Popular from "../Popular/Popular";
import Slider from "../Slider/Slider";
import PopularInstructors from "./PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div className="font-bold">
            <Slider></Slider>
            <Popular></Popular>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;