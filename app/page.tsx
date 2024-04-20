import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import Vr from "././components/vrmode"


export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
  <Newest/>
  <Vr/>
    </div>
  );
}
