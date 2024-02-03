import React, { useState, useEffect, useContext, useRef } from "react";
import Image from "next/image";
import { DiNancy } from "react-icons/di";
import { DiProlog } from "react-icons/di";
//----IMPORT ICON
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
// import { FaAffiliatetheme } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

import Link from "next/link";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button, Error } from "../componentsindex";
import images from "../../img";

// import from smart contract
import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const NavBar = () => {
  //----USESTATE COMPONNTS
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [theme, setTheme] = useState("light");

  const router = useRouter();

  const navBarRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (e) => {
      // Check if the click is inside the navbar or the menus
      if (
        navBarRef.current &&
        !navBarRef.current.contains(e.target) &&
        !e.target.classList.contains(
          Style.navbar_container_right_discover_box
        ) &&
        !e.target.classList.contains(Style.navbar_container_right_help_box) &&
        !e.target.classList.contains(Style.navbar_container_right_notify) &&
        !e.target.classList.contains(
          Style.navbar_container_right_profile_box
        ) &&
        !e.target.classList.contains(Style.sideBar)
      ) {
        setDiscover(false);
        setHelp(false);
        setNotification(false);
        setProfile(false);
        setOpenSideMenu(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []); // Run the effect only once during component mount

  const openMenu = (e) => {
    const btnText = e.target.innerText;

    if (btnText === "Discover") {
      setDiscover((prevState) => !prevState);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setDiscover(false);
      setHelp((prevState) => !prevState);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  // Function to toggle between themes
  const toggleTheme = () => {
    let newTheme;

    // Switch between light, dark, blue, green, purple, red, maroon, teal themes
    if (theme === "light") {
      newTheme = "dark";
    } else if (theme === "dark") {
      newTheme = "blue";
    } else if (theme === "blue") {
      newTheme = "green";
    } else if (theme === "green") {
      newTheme = "purple";
    } else if (theme === "purple") {
      newTheme = "red";
    } else if (theme === "red") {
      newTheme = "maroon";
    } else if (theme === "maroon") {
      newTheme = "teal";
    } else if (theme === "teal") {
      newTheme = "gold";
    } else if (theme === "gold") {
      newTheme = "pink";
    } else {
      newTheme = "light";
    }

    setTheme(newTheme);

    // Apply the theme class to the root element
    document.documentElement.className = newTheme;
  };

  // smart contract section
  const { currentAccount, connectWallet, openError } = useContext(
    NFTMarketplaceContext
  );

  return (
    <div className={`${Style.navbar} ${Style[theme]}`} ref={navBarRef}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <DiProlog onClick={() => router.push("/")} />
            {/* <Image
              src={images.logo}
              alt="NFT MARKET PLACE"
              width={100}
              height={100}
              onClick={() => router.push("/")}
            /> */}
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* Vertical line between left and right sections */}
        <div className={Style.navbar_vertical_line}></div>

        {/* //END OF LEFT SECTION */}
        <div className={Style.navbar_container_right}>
          <div
            className={`${Style.navbar_container_right_discover} ${Style.underline}`}
          >
            {/* DISCOVER MENU */}
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* HELP CENTER MENU */}
          <div
            className={`${Style.navbar_container_right_help} ${Style.underline}`}
          >
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* NOTIFICATION */}
          <div className={Style.navbar_container_right_notify}>
            <FaMoon onClick={toggleTheme} className={Style.themeIcon} />
            <MdNotifications
              className={Style.notify}
              onClick={() => openNotification()}
            />

            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            {currentAccount == "" ? (
              <Button btnName="Connect" handleClick={() => connectWallet()} />
            ) : (
              <Button
                btnName="Create"
                handleClick={() => router.push("/uploadNFT")}
              />
            )}
          </div>

          {/* USER PROFILE */}

          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                className={Style.navbar_container_right_profile}
              />

              {profile && <Profile currentAccount={currentAccount} />}
            </div>
          </div>

          {/* MENU BUTTON */}

          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* SIDBAR CPMPONE/NT */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}

      {openError && <Error />}
    </div>
  );
};

export default NavBar;
