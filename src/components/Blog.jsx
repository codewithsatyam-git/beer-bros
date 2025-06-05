import React from "react";
import blog1 from '../assets/blog1.jpg'
import blog2 from '../assets/blog2.jpg'
import blog3 from '../assets/blog3.jpg'
import blog4 from '../assets/blog4.jpg'

const Blog = ({refProp}) => {
  return (
    <div ref={refProp} className="w-screen h-auto bg-transparent mt-5 p-5 select-none">
      <h4 className="w-full text-center text-4xl font-bold capitalize">blog</h4>
      <div className="w-screen h-auto">
        <h2 className="w-[calc(100%-25px)] md:w-full  my-5 text-center text-xl font-semibold">
          Why Hiring Professional Bartenders Can Make or Break Your Event ?
        </h2>
        <div className="w-full h-auto p-2 flex flex-wrap">
          <p className="py-2 lg:px-5 text-center w-[calc(100%-30px)]">
            You have booked the venue, sent the invites and curated the perfect
            playlist — now it is time to think about the drinks. While it might
            be tempting to handle the bar yourself or assign it to a friend,
            hiring professional bartenders can elevate your event from good to
            unforgettable. Here's why professional bar service matters more than
            you might think.
          </p>
          <div className="w-[calc(100%-25px)] lg:w-[calc(50%-20px)] p-1 lg:p-4">
            <p className="py-2">
              <span>1.</span> Professionalism and Experience Matter A seasoned
              bartender does more than pour drinks — they manage crowds, handle
              unexpected situations and keep the energy flowing. They are
              trained to serve quickly, mix precisely and stay calm under
              pressure. Whether it is a wedding, corporate event or private
              party, an experienced bartender ensures smooth service from start
              to finish.
            </p>
          </div>
          <img src={blog1} className="w-auto h-52 lg:h-60 lg:ml-20 mx-3 rounded" />
        </div>
        <div className="w-full h-auto p-2 flex flex-wrap">
          <img src={blog2} className="w-auto h-52 lg:h-60 mx-3 lg:mr-18 rounded" />
          <div className="w-[calc(100%-25px)] lg:w-[calc(50%-20px)] p-1 lg:p-4">
            <p className="py-2">
              2. Customized Drink Menus and Signature Cocktails Professionals
              can help you craft a personalized menu that fits your event's vibe
              — from elegant champagne cocktails to themed shooters. They know
              how to balance flavors, suggest creative options and even design
              signature drinks that add a personal touch to your celebration.
            </p>
          </div>
        </div>
        <div className="w-full h-auto p-2 flex flex-wrap">
          <div className="w-[calc(100%-25px)] lg:w-[calc(50%-20px)] p-1 lg:p-4">
            <p className="py-2">
              3. Efficiency and Crowd Control Long lines and delayed drinks can
              kill the mood. Pro bartenders know how to manage volume
              efficiently, keeping guests happy and the bar area organized. They
              also help prevent over-pouring or over-serving, ensuring a
              saferenvironment for everyone.
            </p>
          </div>
          <img src={blog3} className="w-auto h-52 lg:h-60 mx-3 lg:ml-20 rounded" />
        </div>
        <div className="w-full h-auto p-2 flex flex-wrap">
          <img src={blog4} className="w-auto h-52 mx-3 lg:h-60 lg:mr-18 rounded" />
          <div className="w-[calc(100%-25px)] lg:w-[calc(50%-20px)] p-1 lg:p-4">
            <p className="py-2">
              4. Less Stress, More Fun for You When you hire professionals, you
              get to relax and enjoy your own event. No worrying about drink
              supplies, messes, or managing tipsy guests. You are free to
              mingle, celebrate, and be present — because we have got the bar
              covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
