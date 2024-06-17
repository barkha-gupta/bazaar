const NotFound = () => {
  return (
    <div className="flex  justify-center items-center h-[100vh] border border-slate-200 ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-[5rem]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
      <h2 className="font-[700] text-[3rem]">404 NOT FOUND</h2>
    </div>
  );
};

export default NotFound;
