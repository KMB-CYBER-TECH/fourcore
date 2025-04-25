import React from "react";
import HeroAbout from "./adv_about";
import Success from "./success";
import Motivation from "./motivation";
import Core from "./core";
import Partner from "./partner";

export default function HeroSectionView() {
  return (
    <>
      <div className="bg-gray-100"><HeroAbout />
      <Success />
      <Motivation />
      <Core />
      <Partner /></div>
    </>
  );
}
