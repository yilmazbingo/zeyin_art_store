import Image from "next/image";
import Socials from "@/components/ui/common/Socials";
import img from "../../public/home2.png";
import MarqueeComponent from "@/components/ui/common/Marquee";
import { getAllArts } from "@/lib/art";
import { ArtList } from "@/components/ui";

export default async function Home() {
  const { data } = getAllArts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 sm:p-0">
      <div className="static inset-2 h-screen max-w-sm  ">
        <Image
          src={img.src}
          alt="background image"
          // Images with "fill" always use height 100% - it cannot be modified.
          // fill
          className="relative w-full object-scale-down"
          fill
        />
      </div>
      <Socials />
      <ArtList arts={data} />

      {/* <div className=" relative z-10 lg:w-11/12  items-center justify-between font-mono text-sm lg:flex flex-col">
        <MarqueeComponent data={data}></MarqueeComponent>
      </div> */}
    </main>
  );
}
