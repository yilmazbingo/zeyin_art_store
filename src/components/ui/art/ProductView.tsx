"use client";
import { ArtProduct } from "@/types/art";
import Link from "next/link";
import React, { useState } from "react";
import bg from "../../../../public/video-icon.jpg";
import { Kaushan_Script } from "@next/font/google";
import { ReadMore } from "..";
const KaushanFont = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
});

interface ProductViewProps {
  product: ArtProduct;
}

const ProductView = ({ product }: ProductViewProps) => {
  const [activeImg, setActiveImage] = useState(product.coverImage);
  const [activeVideo, setActiveVideo] = useState("");
  const [readMore, setReadMore] = useState(false);
  const productSpecLength = product.wsl.length;
  const initialSpecs = product.wsl.slice(0, 3);
  const readMoreSpecs = product.wsl.slice(3, productSpecLength);
  const readMoreOrLess = readMore ? "Read Less" : "Learn More";

  const handleVideo = () => {
    setActiveImage("");
    setActiveVideo(product.video);
  };
  const handleImage = (image: string) => {
    setActiveVideo("");
    setActiveImage(image);
  };
  return (
    <div className="pb-20 pt-20 flex flex-col  justify-between lg:flex-row gap-16 ">
      <div className="flex flex-col gap-6 lg:w-2/4 lg:h-1/3 justify-center">
        <div className="bg-brown ml-4 flex object-cover  justify-center ">
          {activeImg && (
            <img
              src={activeImg}
              alt=""
              className="w-2/3 h-full aspect-square  "
            />
          )}

          {activeVideo && (
            <video
              controls
              width="250"
              className="w-2/3 h-full aspect-square object-cover rounded-xl "
            >
              <source src={product.video} type="video/webm" />
            </video>
          )}
        </div>

        <div className="flex flex-row justify-between h-24 gap-6 ml-4">
          {product.sideImages.map((image, index) => {
            if (index == 4) {
              return (
                <div
                  className="w-24 flex justify-between transform hover:scale-125"
                  style={{
                    backgroundImage: `url(${product.coverImage})`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="flex ">
                    <img
                      src={bg.src}
                      alt=""
                      className="w-12 h-12  ml-5 mt-5 rounded-md cursor-pointer "
                      onClick={() => handleVideo()}
                    />
                  </div>
                </div>
              );
            } else {
              return (
                <img
                  src={image}
                  alt=""
                  className="w-24 h-24 rounded-md cursor-pointer transform hover:scale-125"
                  onClick={() => handleImage(image)}
                />
              );
            }
          })}
        </div>
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-2/4 2xl:h- ">
        <div>
          <h2
            style={{ color: "#9395d3" }}
            className={` ${KaushanFont.className} text-4xl font-bold mb-10`}
          >
            {product.title}
          </h2>
        </div>
        {initialSpecs.map((item, index) => {
          let blurred = "";
          if (index == 2 && !readMore) {
            blurred = "blur-[2px]";
          }
          return <p className={`w-2/3 ${blurred} mt-2 `}>&#x2713; {item}</p>;
        })}
        {readMore && <ReadMore specs={readMoreSpecs} />}
        <button
          onClick={() => setReadMore((prev) => !prev)}
          className="hover:bg-gray-400 w-24"
        >
          {readMoreOrLess}
        </button>

        {/* <h6 className="text-2xl font-semibold">$ {product.price}</h6> */}
        <div className="flex flex-row items-center gap-12 mt-10">
          {/* <div className="flex flex-row items-center"> */}
          {/* <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button> */}
          {/* <span className="py-4 px-6 rounded-lg">{amount}</span> */}
          {/* <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button> */}
          {/* </div> */}
          <Link href={product.etsy} target="_blank">
            <div
              style={{ backgroundColor: "#eb6d20" }}
              className="w-full  hover:text-black"
            >
              <button className=" py-4 mx-10">Shop On Etsy</button>
            </div>
          </Link>
          <Link href="/">
            <div
              style={{ backgroundColor: "#a881af" }}
              className="w-full hover:text-black"
            >
              <button className=" py-4 mx-10">Back to Home</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
