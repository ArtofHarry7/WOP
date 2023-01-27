import React from "react";
import HeroImage from "../../img/Hero.png";

const Hero = () => {
  return (
    <div>
      <section className="overflow-hidden font-montserrat bg-white sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-24 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-light leading-10 mb-10 text-gray-900 md:text-6xl">
              The First MBTI NFT Project.
            </h2>

            <p className=" font-light md:mt-4 md:block">
              Find NFTs based on your personality type.
              <br /> explore into niche based domains.
              <br /> connect and network the better way.
            </p>

            <div className="mt-4 md:mt-8">
              <a
                href="/"
                className="inline-block rounded bg-[#22778b] px-12 py-3 text-sm font-semibold text-white transition hover:bg-[#104b58] focus:outline-none focus:ring focus:ring-[#fff]"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src={HeroImage}
          //src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-1/3 p-10 w-full object-cover sm:h-full"
        />
      </section>
    </div>
  );
};

export default Hero;
