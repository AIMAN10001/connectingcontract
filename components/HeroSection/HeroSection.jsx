import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

// smart contract import
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  const router = useRouter();
  const { titleData } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, Collect And Sell NFTs 🤖</h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Transfer
            your funds, create your NTFs and sell them.
          </p>
          <Button
            btnName="Transfer Funds"
            handleClick={() => router.push("/transferFunds")}
          />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
