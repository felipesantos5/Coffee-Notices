import { Link } from "react-router-dom";
import { DarkModeToggle } from "../darkModeButton/darkModeButton";

export const Header = () => {
  return (
    <header className="h-10 p-6 bg-slate-100 dark:bg-darkSlate md:pb-9">
      <div className="flex items-center justify-between px-8 max-w-5xl m-auto md:px-0">
        <div className="flex items-center gap-1">
          <Link to={"/"}>
            <h1 className="font-bold text-5xl text-black dark:text-slate-100">Web Notices</h1>
          </Link>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
};
