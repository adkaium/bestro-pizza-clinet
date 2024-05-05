
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import HeroSection from "../HeroSection/HeroSection";
import PopularMenu from "../PopularMenu/PopularMenu";
import Slider from "../Slider/Slider";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Helmet>
             <title>Bestro-Boss/Home</title>
           </Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <HeroSection></HeroSection>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;