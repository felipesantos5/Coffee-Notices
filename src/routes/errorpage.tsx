import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import darkError404 from "../assets/dark-error.json";
import lightError404 from "../assets/light-error.json";
import Lottie from "lottie-react";

export const Errorpage = ({ isDarkMode }: { isDarkMode?: boolean }) => {
  return (
    <div className="bg-slate-100 dark:bg-darkSlate">
      <Header />
      <div className="h-80 mx-4 flex justify-center items-center">
        <div className="flex flex-col text-black dark:text-white max-h-500 w-1/3 lg:w-3/4 ">
          <h2 className="font-bold text-4xl">Page Not Found</h2>
          <p className="max-w-2xl font-semibold mt-4 text-justify text-lg lg:text-base">
            Sorry, the page you're looking for could not be found. This might be due to an incorrect URL, a removed page, or a temporary server issue. Please check the URL and try again.
          </p>
        </div>
        <Lottie className="w-500 lg:hidden" animationData={isDarkMode ? darkError404 : lightError404} />
      </div>
      <Footer />
    </div>
  );
};
