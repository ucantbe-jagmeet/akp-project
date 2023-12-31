/* eslint-disable react/prop-types */
const Button = ({ text }) => {
  return (
    <div className="text-white px-5 py-3 font-semibold bg-gradient-to-r from-[--primary-btn-color1]  via-[--primary-btn-color2]  to-[--primary-btn-color3]  rounded-lg">
      {text}
    </div>
  );
};

export default Button;
