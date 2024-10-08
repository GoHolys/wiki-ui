import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContinueButton from "../components/ContinueButton";
import InfoSection from "../components/InfoSection";
import { WELCOME_TO_PERY_TEXT } from "../consts/descriptions";
import { UserContext } from "../context/UserContext";

const LanguageSelectionPage = () => {
  const { setUserInfo } = useContext(UserContext);

  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  const handleContinue = () => {
    setUserInfo((prevInfo) => ({ ...prevInfo, language }));
    navigate("/subject");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <InfoSection text={WELCOME_TO_PERY_TEXT} />
      <div
        className="w-full md:w-[60%] bg-white p-8 flex flex-col justify-center items-start
                   animate-fadeIn"
      >
        <h2 className="text-xl md:text-2xl mb-4">Nice to meet you!</h2>
        <p className="mb-4">Which language do you prefer to read?</p>
        <div className="space-y-2 mb-4">
          {["English", "Spanish", "Dutch"].map((lang) => (
            <label key={lang} className="flex items-center">
              <input
                type="radio"
                value={lang}
                checked={language === lang}
                onChange={() => setLanguage(lang)}
                className="mr-2"
              />
              {lang}
            </label>
          ))}
        </div>
        <ContinueButton onClick={handleContinue} />
      </div>
    </div>
  );
};

export default LanguageSelectionPage;
