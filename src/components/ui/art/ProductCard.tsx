"use client";
import { ArtProduct } from "@/types/art";
import Link from "next/link";
import Image from "next/image";

interface ArtCardProps {
  product: ArtProduct;
}
export default function ArtCard({ product }: ArtCardProps) {
  return (
    <Link href={`/art/${product.slug}`}>
      <div className="bg-beig rounded-xl shadow-md overflow-hidden w-96">
        <div className="max-w-sm  lg:max-w-full lg:flex flex-col">
          <div className="mb-8 mt-2 ml-2">
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="fill-current text-gray-500 w-3 h-3 mr-2"
              >
                <rect width="256" height="256" fill="none" />
                <path d="M231.8,134.8a4.8,4.8,0,0,0,0-1.2c.1-1.9.2-3.7.2-5.6a103.2,103.2,0,0,0-23-65.1,5.5,5.5,0,0,0-1.4-1.7,103.9,103.9,0,0,0-41.1-29.8l-1.1-.4a103.4,103.4,0,0,0-74.8,0l-1.1.4A103.9,103.9,0,0,0,48.4,61.2,5.5,5.5,0,0,0,47,62.9,103.2,103.2,0,0,0,24,128c0,1.9.1,3.7.2,5.6a4.8,4.8,0,0,0,0,1.2,104.2,104.2,0,0,0,15.7,48.4,9.9,9.9,0,0,0,1.1,1.7,104.3,104.3,0,0,0,60.3,43.6h.3a104.2,104.2,0,0,0,52.8,0h.3A104.3,104.3,0,0,0,215,184.9a9.9,9.9,0,0,0,1.1-1.7A104.2,104.2,0,0,0,231.8,134.8ZM68.5,117.1l13.2,4.3,12.7,39.2-8.1,11.2H51.7a86.2,86.2,0,0,1-11.2-34.3Zm119,0,28,20.4a86.2,86.2,0,0,1-11.2,34.3H169.7l-8.1-11.2,12.7-39.2ZM193.2,69l-10.7,32.9-13.2,4.3L136,81.9V68.1l28-20.4A87,87,0,0,1,193.2,69ZM92,47.7l28,20.4V81.9L86.7,106.2l-13.2-4.3L62.8,69A87,87,0,0,1,92,47.7Zm18,166.4L99.3,181.2l8.1-11.2h41.2l8.1,11.2L146,214.1a86.2,86.2,0,0,1-36,0Z" />
              </svg>
              {product.type}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {product.title}
            </div>
            <div
              className="flex flex-1 bg-pri"
              // style={{ backgroundImage: `url(${product.coverImage})` }}
              // title={product.title}
            >
              <img
                src={product.coverImage}
                className="h-72 w-full rounded-t lg:rounded-t-none lg:rounded-l text-center object-contain"
                alt=""
              />
            </div>
            <div className=" h-72 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <p className="text-gray-700 text-base">{product.wsl[0]}</p>
            </div>
            <div className="flex items-center ">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="logo.jpeg"
                alt="logo of zeyin art store"
              />
              <div className="text-sm ">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
