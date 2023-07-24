import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="h-10  text-center pt-8 bg-slate-100 dark:bg-darkSlate">
      <Link className="text-black dark:text-white px-2" to="/">
        Copyright © 2023. All rights are reserved
      </Link>
    </footer>
  );
};
