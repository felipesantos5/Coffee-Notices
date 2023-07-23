import { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Verifica se há um valor salvo no localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    // Atualiza o valor no localStorage sempre que o modo escuro for alterado
    localStorage.setItem("darkMode", isDarkMode.toString());

    // Atualiza a classe no elemento raiz da aplicação (por exemplo, o elemento <body>)
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <button className={`xsm:hidden relative w-16 h-9 rounded-full transition-transform ${isDarkMode ? "bg-slate-100" : "bg-darkSlate"}`} onClick={toggleDarkMode}>
      <div className={`absolute top-1 left-1 w-7 h-7 rounded-full transition-transform ${isDarkMode ? "bg-darkSlate" : "bg-slate-100"} ${isDarkMode ? "translate-x-full" : "translate-x-0.5"}`}></div>
    </button>
  );
};

export default DarkModeToggle;
