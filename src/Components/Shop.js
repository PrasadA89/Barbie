import React from "react";

const Shop = () => {
  return (
    <div className="py-[100px] px-2">
      <div className="mx-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
        <div className="shadow-xl h-[500px] my-2 bg-slate-100 hover:scale-105 duration-500 ">
          <section className="one-fourth" id="html">
            <img src="https://cdn.shopify.com/s/files/1/0568/1132/3597/products/i8bayzct21gxxwiyy8nt_600x600.jpg?v=1685128515" />
          </section>
          Barbie Signature
          Gloria Doll wearing Pink Power Pantsuit<br/>
          $50.00
          <button className='bg-yellow-300 p-3 rounded-lg '>Add to cart</button> 
        </div>
        
        <div className="shadow-xl h-[500px] my-2 bg-slate-100 hover:scale-105 duration-500 ">
        <section className="one-fourth" id="html">
            <img src="https://cdn.shopify.com/s/files/1/0568/1132/3597/products/urd6b13byyhdhemys53s_600x600.jpg?v=1686156891" />
          </section>
          Barbie Signature
          Ken Doll wearing Pastle Stiped Beach suit<br/>
          $25.00
          <button className='bg-yellow-300 p-3 rounded-lg '>Add to cart</button> 
        </div>
        <div className="shadow-xl h-[500px] my-2 bg-slate-100 hover:scale-105 duration-500 ">
        <section className="one-fourth" id="html">
            <img src="https://cdn.shopify.com/s/files/1/0568/1132/3597/products/white-ceramic-mug-with-color-inside-pink-11oz-right-638928c7807c2_600x600.png?v=1685497753" />
          </section>
          Barbie the Movie
          Barbie the Movie Logo Pink Mug<br/>
          $15.00
          <button className='bg-yellow-300 p-3 rounded-lg '>Add to cart</button> 
        </div>
        
      </div>
    </div>
  );
};

export default Shop;
