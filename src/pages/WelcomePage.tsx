import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoSection from "../components/InfoSection.tsx";
import ContinueButton from "../components/ContinueButton.tsx";
import LockIcon from "../assets/svgs/LockIcon.svg?react";
import { WELCOME_TO_PERY_TEXT } from "../consts/descriptions.ts";
import { UserContext } from "../context/UserContext.tsx";

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const WelcomePage: React.FC = () => {
  const { setUserInfo } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleContinue = () => {
    if (!email) {
      setError("Email must not be empty");
      return;
    }

    if (!validateEmail(email)) {
      setError("Email is not in the correct format");
      return;
    }

    setUserInfo((prevInfo) => ({ ...prevInfo, email }));
    navigate("/language");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <InfoSection text={WELCOME_TO_PERY_TEXT} />
      <div className="w-full md:w-[60%] bg-white p-8 animate-fadeIn flex flex-col justify-center items-start transition-all duration-300 transform">
        <h2 className="text-xl md:text-2xl ">Love learning new stuff?</h2>
        <h2 className="text-xl md:text-2xl mb-8">
          Get an article on any subject you like!
        </h2>
        <p className="mb-1 text-lg">Type your email address</p>
        <div className="flex flex-col justify-center mb-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email address"
            className="border p-2 w-96  rounded-md mb-2"
          />
          {error && <p className=" text-red-600">{error}</p>}
        </div>
        <ContinueButton onClick={handleContinue} />
        <small className="flex gap-x-2 items-center mt-5 text-sm text-gray-500 w-96 rounded-md bg-[#E3F0EB] py-5 px-4">
          <LockIcon /> By clicking "continue" I agree to Pery's terms
        </small>
      </div>
    </div>
  );
};

export default WelcomePage;
