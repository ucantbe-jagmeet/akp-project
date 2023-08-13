import brand from "../assets/images/brands.png";
import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
import brand3 from "../assets/images/brand3.png";
import brand4 from "../assets/images/brand4.png";

const data = [
  {
    id: 0,
    image: brand,
  },
  {
    id: 1,
    image: brand1,
  },
  {
    id: 2,
    image: brand2,
  },
  {
    id: 3,
    image: brand3,
  },
  {
    id: 4,
    image: brand4,
  },
];

const Brands = () => {
  return (
    <div className="flex justify-between my-20 px-12">
      {data.map((img, index) => {
        return (
          <img key={index} src={img.image} alt="" className="object-contain" />
        );
      })}
    </div>
  );
};

export default Brands;
