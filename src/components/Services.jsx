import { easeInOut, motion } from "motion/react";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Services = ({refProp}) => {
  const [slideShow, setSlideShow] = useState(1);
  const services = [
    {
      name: "Concerts",
      id: 1,
    },
    {
      name: "Festivals",
      id: 2,
    },
    {
      name: "Cateres",
      id: 3,
    },
    {
      name: "Banquets",
      id: 4,
    },
    {
      name: "Hotels",
      id: 5,
    },
    {
      name: "Corporates",
      id: 6,
    },
    {
      name: "Liquor Companies",
      id: 7,
    },
    {
      name: "Workshops",
      id: 8,
    },
    {
      name: "Bar Consultancy",
      id: 9,
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideShow,
    slidesToScroll: 1,
  };
  console.log(window.innerWidth);
  useEffect(() => {
    if (window.innerWidth > 600) {
      setSlideShow(3);
    } 
  }, []);

  return (
    <div ref={refProp} className="w-screen h-auto p-5 bg-transparent select-none ">
      <h4 className="w-full text-center py-3 text-4xl font-bold">Services</h4>
      <p className="w-full text-center pb-3">We provide services at..</p>

      <motion.div className="px-5 overflow-visible">
        <Slider {...settings}>
          {services.map((service) => {
            return (
              <motion.div whileHover={{scale: 1.06}} transition={{duration:0.2, delay:0.1}} key={service.id} className="flex justify-center">
                <div className="h-38 m-1 lg:h-60 lg:w-70 rounded-2xl bg-slate-200 flex items-center justify-center">
                  <h1 className="text-center font-semibold">{service.name}</h1>
                </div>
              </motion.div>
            );
          })}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Services;
