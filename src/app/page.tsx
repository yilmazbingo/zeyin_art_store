import Image from "next/image";
import Socials from "@/components/ui/common/Socials";
import img from "../../public/home.png";
import MarqueeComponent from "@/components/ui/common/Marquee";
import { getAllArts } from "@/lib/art";

export default async function Home() {
  const { data } = getAllArts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="static inset-2 h-screen max-w-sm ">
        <Image src={img.src} alt="background image" fill />
      </div>
      <Socials />
      <div className="sm:w-full relative z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-col">
        <MarqueeComponent data={data}></MarqueeComponent>
      </div>
    </main>
  );
}
