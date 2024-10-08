import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThumbsUpIcon from "../assets/svgs/ThumbsUpIcon.svg?react";
import { ALL_SET_TEXT } from "../consts/descriptions";
import { UserContext } from "../context/UserContext";
import { fetchArticleIntroduction } from "../services/api";
import { Article } from "../types/Article";
import InfoSection from "../components/InfoSection";
import StartOverButton from "../components/StartOverButton";

const ArticleDisplayPage: React.FC = () => {
  const {
    userInfo: { language, subject },
  } = useContext(UserContext);

  const [error, setError] = useState("");
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        const fetchedArticle = await fetchArticleIntroduction(
          subject,
          language
        );
        setArticle(fetchedArticle);
      } catch (error) {
        setError("Failed to fetch article. Please try again.");
        console.error("Fetch article error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (language && subject) {
      fetchArticle();
    } else {
      setError(
        "Oops looks like you have forgot to fill out a few input fields."
      );
    }
  }, [subject, language]);

  const handleStartOver = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <InfoSection text={ALL_SET_TEXT} />
      <div className="w-full md:w-[60%]  bg-white p-12 overflow-y-auto animate-fadeIn flex flex-col gap-y-8 items-start">
        <ThumbsUpIcon />
        {isLoading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <p className="mt-4 text-red-600">{error}</p>
        ) : (
          <>
            <h2 className="text-xl md:w-[60%] mb-4">
              All set. Here’s your article:
            </h2>
            <p className="mb-4 ">{article?.introduction}</p>
          </>
        )}
        <StartOverButton onClick={handleStartOver} />
      </div>
    </div>
  );
};

export default ArticleDisplayPage;
