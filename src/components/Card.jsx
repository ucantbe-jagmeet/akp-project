/* eslint-disable react/prop-types */
const Card = ({ obj }) => {
  console.log(obj);
  return (
    <main className="">
      {obj.map((item, index) => {
        return (
          <div
            key={index}
            className="h-[25rem] w-[24rem] border-2 border-black rounded-lg p-5 flex justify-between items-start flex-col"
          >
            <img src={item.emoji} alt="" className="h-22 object-contain" />

            <div className="font-poppins">
              <h2 className="text-4xl font-semibold">{item.title}</h2>
              <p className="text-lg text-gray-600">{item.text}</p>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Card;
