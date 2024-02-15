import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Services from "../components/Service";
import CTABanner from "../components/CTABanner";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import OverviewTwo from "../components/OverviewTwo";
import Clients from "../components/Clients";

export default function IndexTwo(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "ltr");
        document.documentElement.classList.add('light');
      }, []);
    return(
        <>
            <Navbar/>
            <OverviewTwo/>
            <AboutUs/>
            <Services/>
            <CTABanner/>
            <Experience/>
            <Projects/>
            <Clients/>  
            <Blogs/>
            <GetInTouch/>
            <Footer/>
            
        </>
    )
}