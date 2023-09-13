import styles from "./styles.module.scss";
import { FaFacebookF, FaTiktok, FaEtsy } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";
import { TiSocialYoutubeCircular } from "react-icons/ti";

export default function Socials() {
  return (
    <div className="absolute mt-5 sm:w-full">
      <section className="sm:text-center ">
        <div className="lg:text-5xl  sm:mt-2  sm:text-4xl font-semibold lg:text-left text-white leading-none">
          {/* Paper comes to life */}
        </div>
        <ul className=" flex flex-row sm:justify-center ">
          <li className="ml-1">
            <a
              href="https://www.etsy.com/shop/zeyin?ref=seller-platform-mcnav"
              target="_blank"
              className="etsy"
            >
              <FaEtsy />
            </a>
          </li>
          <li className="ml-1">
            <a
              href="https://www.facebook.com/profile.php?id=61550795203383"
              target="_blank"
              className="facebook"
            >
              <FaFacebookF />
            </a>
          </li>
          <li className="ml-1">
            <a
              href="https://www.instagram.com/zeyin_store/"
              target="_blank"
              className="instagram"
            >
              <BsInstagram />
            </a>
          </li>
          <li className="ml-1">
            <a
              href="https://twitter.com/zeyinart"
              target="_blank"
              className="twitter"
            >
              <BsTwitter />
            </a>
          </li>

          <li className="ml-1">
            <a
              href="https://www.youtube.com/@zeyinstore"
              target="_blank"
              className="youtube"
            >
              <TiSocialYoutubeCircular />
            </a>
          </li>
          <li className="ml-1">
            <a
              href="https://www.pinterest.com/zeyinstore/"
              target="_blank"
              className="pinterest"
            >
              <BsPinterest />
            </a>
          </li>

          <li className="ml-1">
            <a
              href="https://www.tiktok.com/@zeyin_art"
              target="_blank"
              className="tiktok"
            >
              <FaTiktok />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
