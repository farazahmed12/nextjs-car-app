"use client";

import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <div className="hero__title">Find, book or rent a car quickly</div>
        <div className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </div>

        <CustomButton
          title={"Explore cars"}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
    </div>
  );
};

export default Hero;
