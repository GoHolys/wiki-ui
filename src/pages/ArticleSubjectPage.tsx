import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoSection from "../components/InfoSection.tsx";
import ContinueButton from "../components/ContinueButton.tsx";
import { WELCOME_TO_PERY_TEXT } from "../consts/descriptions.ts";
import { UserContext } from "../context/UserContext.tsx";

const ArticleSubjectPage: React.FC = () => {
  const { setUserInfo } = useContext(UserContext);

  const [error, setError] = useState("");
  const [subject, setSubject] = useState("");

  const navigate = useNavigate();

  const handleContinue = () => {
    if (!subject) {
      setError("subject must not be empty");
      return;
    }
    setUserInfo((prevInfo) => ({ ...prevInfo, subject }));
    navigate("/article");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <InfoSection text={WELCOME_TO_PERY_TEXT} />
      <div className="w-full md:w-[60%] bg-white p-8 flex flex-col animate-fadeIn justify-center items-start">
        <h2 className="text-xl md:text-2xl mb-4">
          What would you like to read about?
        </h2>
        <p className="mb-4">Dogs? molecular culinary? everything goes...</p>
        <div className="flex flex-col justify-center mb-5">
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Article subject"
            className="border p-2 w-96 mb-2 rounded-md"
          />
          {error && <p className="text-red-600">{error}</p>}
        </div>
        <ContinueButton onClick={handleContinue} />
      </div>
    </div>
  );
};

export default ArticleSubjectPage;
