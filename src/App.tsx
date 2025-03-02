import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { keepTheme } from "./themes";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <>
      <Header />
      <MainContent />
    </>
  );
}
