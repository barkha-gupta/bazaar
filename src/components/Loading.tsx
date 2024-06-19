import Logo from "./Logo";

export const Loading = () => {
  return (
    <div className=" h-[100vh] w-[100vw] flex flex-col justify-center items-center animate-pulse duration-700">
      <Logo />
    </div>
  );
};
