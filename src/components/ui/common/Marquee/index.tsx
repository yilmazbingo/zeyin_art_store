import { ArtProduct } from "@/types/art";
import { ReactNode, FC } from "react";
// import Ticker from "react-ticker"
import Marquee from "react-fast-marquee";
import MarqueeImage from "./MarqueeImage";
import { ArtCard } from "../..";

// import s from "./Marquee.module.css";

interface Props {
  data: ArtProduct[];
  //   variant?: "primary" | "secondary"
}

const MarqueeComponent: FC<Props> = ({ data }: Props) => {
  // console.log("data", data);
  return (
    <div className="lg:w-5/6 sm:w-full mt-10 xs:w-full">
      {/* items start 80 pixel from the right */}
      <Marquee className="md:w-full sm:w-full md:ml-2" pauseOnHover={true}>
        {data.map((product: ArtProduct) => {
          // console.log("-----------------", product);
          return (
            <div className="mr-5 h-full sm:w-full">
              <ArtCard
                key={product.id}
                // variant="slim"
                product={product}
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default MarqueeComponent;
