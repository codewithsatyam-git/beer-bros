import { easeInOut, motion } from "motion/react";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banquet from "../assets/banquet.jpg";
import bar from "../assets/bar-consultancy.jpg";
import catering from "../assets/catering.jpg";
import corporateParty from "../assets/corporate-party.jpg";
import festivals from "../assets/festivals.jpg";
import liquor from "../assets/liquor-compony.jpg";
import luxury from "../assets/luxury-hotel.jpg";
import privateParty from "../assets/concert.jpg";
import workshops from "../assets/workshop-party.jpg";

const Services = ({ refProp }) => {
  const [slideShow, setSlideShow] = useState(1);
  const services = [
    {
      name: "Concerts",
      id: 1,
      img: privateParty,
    },
    {
      name: "Festivals",
      id: 2,
      img: festivals,
    },
    {
      name: "Cateres",
      id: 3,
      img: catering,
    },
    {
      name: "Banquets",
      id: 4,
      img: banquet,
    },
    {
      name: "Hotels",
      id: 5,
      img: luxury,
    },
    {
      name: "Corporates",
      id: 6,
      img: corporateParty,
    },
    {
      name: "Liquor Companies",
      id: 7,
      img: liquor,
    },
    {
      name: "Workshops",
      id: 8,
      img: workshops,
    },
    {
      name: "Bar Consultancy",
      id: 9,
      img: bar,
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideShow,
    slidesToScroll: 1,
  };
  // console.log(window.innerWidth);
  useEffect(() => {
    if (window.innerWidth > 600) {
      setSlideShow(3);
    }
  }, []);

  return (
    <div
      ref={refProp}
      className="w-screen h-auto p-5 bg-transparent select-none "
    >
      <h4 className="w-full text-center py-3 text-4xl font-bold">Services</h4>
      <p className="w-full text-center pb-3">We provide services at..</p>

      <motion.div className="px-5 overflow-visible">
        <Slider {...settings}>
          {services.map((service) => {
            return (
              <div key={service.id} className="flex justify-center  bg-cover">
                <div
                  style={{
                    backgroundImage: `url(${service.img})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                  className="h-44 m-1 lg:h-60 lg:w-70 rounded-2xl overflow-hidden bg-slate-200 flex items-center justify-center"
                >
                  <h1 className="text-center text-white text-shadow-slate-900 text-shadow-lg text-lg font-bold">{service.name}</h1>
                </div>
              </div>
            );
          })}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Services;
