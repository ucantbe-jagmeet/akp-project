import Card from "../components/Card";
import emo1 from "../assets/images/emo1.png";
import emo2 from "../assets/images/emo2.png";
import emo3 from "../assets/images/emo3.png";
import emo4 from "../assets/images/emo4.png";
import emo5 from "../assets/images/emo5.png";

const data = [
  {
    id: 0,
    emoji: emo1,
    title: "Pause",
    text: "want to take a break? Pause our services anytime",
  },
  {
    id: 1,
    emoji: emo2,
    title: "Super fast",
    text: "See consistent work in action, super fast",
  },
  {
    id: 2,
    emoji: emo3,
    title: "Built to perform",
    text: "Our experienced team of market strategies make sure to come up with the best strategies",
  },
  {
    id: 3,
    emoji: emo4,
    title: "Tailored for you",
    text: "Your experience with us will be customfit and exclusive to you",
  },
  {
    id: 4,
    emoji: emo5,
    title: "Premium quality",
    text: "Get your ads run by professionals and revise until you're 100% satisfied",
  },
];

const Featuring = () => {
  return (
    <div className="h-auto px-5 flex flex-col items-center py-20">
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <Card obj={data.slice(0, 1)} />
        </div>
        <div className="col-span-2 font-poppins  flex w-[80%] mx-auto justify-center flex-col text-5xl">
          <h2>What choose us?</h2>
          <h2>What makes us different?</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 ">
        <Card obj={data.slice(2, 3)} />
        <Card obj={data.slice(3, 4)} />
        <Card obj={data.slice(4, 5)} />
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-2"></div>
        <div className=" font-poppins  ">
          <Card obj={data.slice(0, 1)} />
        </div>
      </div>
    </div>
  );
};

export default Featuring;
