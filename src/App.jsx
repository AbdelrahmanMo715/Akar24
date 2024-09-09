import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import AppRoutes from "./routes";

function App() {
  const { i18n } = useTranslation();
  const storedLanguage = JSON.parse(localStorage.getItem("lang")) || "en";
  const currentLanguage = i18n.language;

  useEffect(() => {
    const direction = i18n.dir(currentLanguage);
    document.body.setAttribute("dir", direction);
    console.log("currentLanguage: ", currentLanguage);
  }, [currentLanguage, i18n]);

  useEffect(() => {
    if (storedLanguage !== currentLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [storedLanguage, currentLanguage, i18n]);

  return (
    <div className="App">
    <AppRoutes/>
    </div>
  );
}

export default App;
