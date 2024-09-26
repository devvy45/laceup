import { FaCartPlus } from "react-icons/fa6";

export default function SneakerCard(props) {
  return (
    <div className="text-[#585858] relative rounded-xl w-[300px] h-[350px] p-7 pt-3 bg-white/5 backdrop-blur-lg shadow-sm border-3 boder-white border-solid sneaker-card-container">
      <div className="w-full justify-center">
        <img
          src={props.src}
          className="object-contain w-[220px] rotate-[27deg] mb-4 sneaker-card-image"
        />
      </div>

      <h1 className="text-xl font-bold">
        {props.brand} {props.name}
      </h1>
      <h2 className="text-md mb-4">{props.type}</h2>
      <div className="flex items-center w-full justify-between">
        <h1 className="text-2xl font-semibold sneaker-card-price">
          $ {props.price}
        </h1>
        <div className="w-[20%] bg-orange-400 aspect-square flex justify-center items-center rounded-[50%]">
          <a className="text-xl cursor-pointer text-white sneaker-card-anchor">
            <FaCartPlus />
          </a>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl bg-white/30 backdrop-blur-lg z-[-1]" />
    </div>
  );
}
