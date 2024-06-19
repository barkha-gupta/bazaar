import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-slate-700 text-slate-100 py-2 text-xs text-center ">
      <p>
        &copy; 2024 Your Company. All rights reserved.
        <a
          href="https://github.com/barkha-gupta/bazaar"
          target="_blank"
          className="decoration-none ml-1 underline underline-offset-2 cursor-pointer"
        >
          Github
        </a>
      </p>
    </footer>
  );
};

export default Footer;
