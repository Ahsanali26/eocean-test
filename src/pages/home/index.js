import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col align-center justify-center h-screen">
      <h1 className="text-center text-5xl font-bold text-secondaryGreen mb-14">
        Welcome
      </h1>

      <button
        className="text-white flex items-center justify-center w-60 font-base tablet:text-lg mx-auto font-medium xs:px-5 tablet:px-7 py-5 rounded-lg bg-gradient-to-r from-silverTree to-sherphaBlue"
        onClick={handleButtonClick}
      >
        DASHBOARD
      </button>
    </div>
  );
};

export default Home;
