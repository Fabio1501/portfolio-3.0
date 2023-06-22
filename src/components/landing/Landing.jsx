import Banner from "../banner/Banner";
import Projects from "../projects/Projects";
import Home from "../home/Home";
import AboutServices from "../services/AboutServices";
import Services from "../services/Services";
import Technologies from "../technologies/Technologies";
import Education from "../education/Education";

const Landing = () => {
    return(
        <div>
            {/* <Banner></Banner> */}
            <Home></Home>
            <Services></Services>
            <AboutServices></AboutServices>
            <Technologies></Technologies>
            <Education></Education>
        </div>
    )
}

export default Landing;
