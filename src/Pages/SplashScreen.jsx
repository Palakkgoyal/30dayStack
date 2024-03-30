import logo from "/logo.png";

const SplashScreen = () => {
  return (
    <div className="w-screen h-screen bg-[var(--white)] flex justify-center items-center select-none">
      <img src={logo} alt="30 Days Task" className="w-[200px] sm:w-[300px]" />
    </div>
  );
};

export default SplashScreen;
