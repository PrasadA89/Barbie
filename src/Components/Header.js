import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#ff2ba7]">
      <div className="max-w-[1240px] items-center flex justify-between mx-auto">
        <div className="text-3xl font-bold">
        <section className="one-fourth" id="html">
                    <img src= "https://res.cloudinary.com/mattel-dtc-cloud/image/upload/w_180,c_scale/shop-contentstack/bltf331402c9d91eed0/61f313dfb8fa60262366b599/Barbie_Logo102x58.png" />
                </section>

        </div>
        <div>
            {
                toggle ? <AiOutlineMenu
                onClick={() => setToggle(!toggle)}
                className="text-2xl md:hidden block"
              /> :

              <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-2xl md:hidden block"
            />

            }
        </div>
       
       

        <ul className="hidden md:flex gap-10">
          <li>Shop</li>
          <li>Brands</li>
          <li>Vitual</li>
          <li>Membership</li>
        </ul>
        {/** Responsive Menu */}
        <ul className={` duration-300 md:hidden w-full h-screen text-white fixed bg-pink-300 top-[92px]
            ${toggle ? 'left-[0]' : 'left-[-100%]' }
         `}>
          <li className='p-5'>
            Shop
            </li>
          <li className='p-5'>
            Brands
            </li>
          <li className='p-5'>
            Vitual
            </li>
          <li className='p-5'>
            Membership
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
