import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subcribe from "./components/Subcribe/Subcribe";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar></Navbar>,
      <Hero></Hero>,
      <Products></Products>,
      <TopProducts></TopProducts>,
      <Banner></Banner>,
      <Subcribe></Subcribe>
      <Products></Products>,
      <Testimonials></Testimonials>
    </div>
  );
};

export default App;
