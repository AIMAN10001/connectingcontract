import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Aiman Ibn Ubayd",
      position: "Full-stack WEB3.0 Apps Developer",
      images: images.founder5,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>Blog ⏰</h1>
            <p>
              Welcome to the revolutionary world of NFT Marketplaces, where art
              meets blockchain technology. NFTs, or Non-Fungible Tokens, have
              transformed the traditional art market by providing a secure and
              transparent way to buy, sell, and trade unique digital assets. In
              these decentralized platforms, artists and creators can showcase
              their work, reaching a global audience of collectors. Each NFT
              carries a distinct value, verified by blockchain, making ownership
              and authenticity immutable. Dive into the NFT marketplace
              experience, where innovation meets creativity, and explore a realm
              that is reshaping the landscape of digital art and collectibles.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero3} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚩Developer</h2>
          <p>
            Aiman Ibn Ubayd is an full-stack WEB3.0 App developer. As a
            Blockchain developer, he truely have focus on designing,
            implementing, and maintaining decentralized applications and smart
            contracts, contributing to the innovation and security of blockchain
            technologies.
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
