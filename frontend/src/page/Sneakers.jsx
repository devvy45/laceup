import SneakerCard from "../components/SneakerCard";
import { siteConfig } from "../config/site";

export default function Sneakers() {
  return (
    <div className="ml-[7rem] grid grid-cols-4 gap-y-10">
      {siteConfig.dummyData.map((sneaker, key) => {
        return <SneakerCard id={key} brand={sneaker.brand} src={sneaker.image} name={sneaker.name} type={sneaker.type} price={sneaker.price} />;
      })}
    </div>
  );
}
