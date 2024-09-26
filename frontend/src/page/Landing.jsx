import { siteConfig } from "../config/site";
import shoe from "../assets/lebagh.png";
import bg from "../assets/landing-bg.png";

export default function Landing() {
  return (
    <div>
      <img src={bg} className="absolute top-0 right-0 w-[153.8vh]" />
      <div className="flex w-full justify-between">
        <div className="w-[50%] ml-[7%] mt-[4rem] grid gap-y-5">
          <h1 className="text-7xl font-bold">
            {siteConfig.dummyData[0].brand}
          </h1>
          <h2 className="text-8xl font-   extrabold text-[#D35922] tracking-[1.7rem]">
            {siteConfig.dummyData[0].name}
          </h2>
          <p className="mt-5 text-2xl w-[120%] font-extralight">
            {siteConfig.dummyData[0].description}
          </p>
          <div className="mt-7 flex justify-between items-center w-[120%]">
            <h3 className="text-5xl">$ {siteConfig.dummyData[0].price}</h3>
            <a className="text-2xl px-14 py-5 bg-gradient-to-r from-[#FE702D] to-[#AB2F03] outline-none border-none rounded-3xl text-white">
              Shop now
            </a>
          </div>
        </div>
        <img
          src={shoe}
          className="z-40 object-contain mt-[-10rem] w-[150rem] drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
