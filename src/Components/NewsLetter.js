import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#ff2ba7]">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[30px]">
        <div className="mt-2">
          <h1 className="md:text-[30px] font-bold text-white">Stay Connected with MATTLE</h1>
          <span className="text-white">
            sign up for Connected with MATTLE!</span>
        </div>
        <div className="mt-2">
          <input type="text" className="rounded-lg mb-2 p-3 mr-2 text-slate-600"placeholder=" Enter your Email"
          />
          <button className="bg-black text-white p-3 rounded-lg ">
            Continue
          </button>
          <br/>
          <p className="text-white">
            By clicking continue, get the Latest News
             <br/> <a class="redirection-link white-text-link" className="text-black underline"
            target="_blank" href="https://www.mattel.com/en-us/privacy-statement">
                Privacy Statement</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
