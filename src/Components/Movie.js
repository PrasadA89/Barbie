import React from "react";
import shopbarbie from "../assets/img/shopbarbie.png";
import barbieposter from "../assets/img/barbieposter.png";
import barbiethemovie from "../assets/img/barbiethemovie.png";
import wearebarbie from "../assets/img/wearebarbie.jpg";
import worldofbarbie from "../assets/img/worldofbarbie.png";

const Movie = () => {
  return (
    <div>
      <section className="one-fourth" id="html">
        <img src={barbieposter}></img>
        <img src={barbiethemovie}></img>
        <img src="https://images.mattel.net/image/upload/f_auto,q_auto/videos-mattel/thumbnail/Barbie_DOM_E3254295_Barbie_Memories_16x9_Texted_Stereo_Final_July21_1080p_no_slate_MOV-rev-1.jpg" />
        {/* <img className="py-20 md:" src ="https://res.cloudinary.com/mattel-dtc-cloud/image/upload/w_720,c_scale/shop-contentstack/blt32ed1d9d69a9a7fd/649f1837e9365a0218c366bd/MicrosoftTeams-image_(9).png"></img>
          {/*<img className="py-02 " src = " https://res.cloudinary.com/mattel-dtc-cloud/image/upload/w_720,c_scale/shop-contentstack/blt91784bef6a96c9f8/6452a59cdf821d371a5dc5fc/BRB_LP_Article-Thumb_Diversity_1790x1064.jpg"></img>*/}
      </section>
      <div className="max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-3">
        <div className="col-span-1 md:w-[80%] text-center">
          <img src={shopbarbie}></img>
        </div>
        <div className="col-span-2 flex flex-col items-center">
          <h1 className="text-pink-600 font-bold my-2">
            Roll out the Pink Carpet!
          </h1>
          <p className="my-2 text-justify">
            Celebrate the theatrical event of the year! Treat kids to dolls and
            playsets inspired by Barbie The Movie.
          </p>
          <button className=" md:w-[20%] bg-[#de1c85] text-white p-3 rounded-lg">
            Explore Barbie's collection
          </button>
        </div>
      </div>


      <div className="max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-3">
        <div className="col-span-1 md:w-[80%] text-center">
          <img src={wearebarbie}></img>
        </div>
        <div className="col-span-2 flex flex-col items-center">
          <h1 className="text-pink-600 font-bold my-2">
           DIVERSITY
          </h1>
          <p className="my-2 text-justify">
          We recognize the power and importance of representation. Barbie has changed over the years to be more inclusive, with dolls featuring an array of body types, skin tones, and hairstyles that better reflect the world around us.
          </p>
          <button className=" md:w-[20%] bg-[#de1c85] text-white p-3 rounded-lg">
           Learn More
          </button>
        </div>
      </div>


      <div className="max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-3">
        <div className="col-span-1 md:w-[80%] text-center">
          <img src={worldofbarbie}></img>
        </div>
        <div className="col-span-2 flex flex-col items-center">
          <h1 className="text-[#de1c85] font-bold my-2">
         WORLD OF BARBIE
          </h1>
          <p className="my-2 text-justify ">
          Discover, explore, and revel in the iconic lifestyle and many careers of Barbie through a wide selection of interactive activities. After a huge success in Toronto, World of Barbie makes its US debut in Santa Monica.
          </p>
          <button className=" md:w-[20%] bg-[#de1c85] text-white p-3 rounded-lg">
        Get Tickets
          </button>
        </div>
      </div>





    </div>
  );
};

export default Movie;
