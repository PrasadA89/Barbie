import React from "react";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#ff2ba7] w-full py-[100px]">
      <div className="max-w-[1240px] mx-auto mt-4 text-center">
        <div className="text-4xl md:text-5xl  font font-serif Emoji text-center mt-4">
          I am Barbie Girl
          </div>
          <h2 className="text-white font-mono text-2xl md:text-2xl py-2 mt-4">
            check out the New Collection of Barbie!
          </h2>
        
        <div className="text-white font-mono text-2xl md:text-2xl py-8 mt-4  text-center">
          I am
          <Typed
            className="pl-2"
            strings={[" Doctor Barbie", "President Barbie", "Worker Barbie"]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
          
        </div>
        <button className='bg-yellow-300 p-3 rounded-lg '>Shop Now</button> 
       
        
        
        </div>
        
      </div>

  );
};

export default Banner;
