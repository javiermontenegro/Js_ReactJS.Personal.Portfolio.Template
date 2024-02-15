import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import OverviewOne from "../components/OverviewOne";
import AboutUs from "../components/AboutUs";
import Services from "../components/Service";
import CTABanner from "../components/CTABanner";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import Clients from "../components/Clients";

export default function IndexRtl(){
    useEffect(() => {
        document.documentElement.setAttribute("dir", "rtl");
        document.documentElement.classList.add('light');
      }, []);
    return(
        <>
            <Navbar/>
            <OverviewOne/>
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