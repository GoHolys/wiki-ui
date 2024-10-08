import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleDisplayPage from "./pages/ArticleDisplayPage";
import ArticleSubjectPage from "./pages/ArticleSubjectPage";
import LanguageSelectionPage from "./pages/LanguageSelectionPage";
import WelcomePage from "./pages/WelcomePage";
import { UserProvider } from "./context/UserContext";

const App: React.FC = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/language" element={<LanguageSelectionPage />} />
          <Route path="/subject" element={<ArticleSubjectPage />} />
          <Route path="/article" element={<ArticleDisplayPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
