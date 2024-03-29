import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  function login() {
    console.log("logging in!");
  }

  const techStacks = ["Python", "SQL", "AWS", "Java", "C++", "C#"];

  return (
    <div className="px-5">
      <h1 className="mt-[8vh] text-5xl text-center font-light">30 dayStack</h1>
      <div className="max-w-[1280px] border-4 mt-[10vh] border-solid border-[var(--black)] rounded-2xl min-h-screen z-[50] mx-auto bg-[var(--white)]">
        <div className="px-5 py-8">
          {/* hero start */}
          <div className="flex flex-col lg:flex-row md:items-center gap-4">
            <div className="flex flex-col gap-5 max-w-[400px] md:max-w-full min-w-[40%] ">
              <h2 className="text-3xl md:max-w-full md:text-6xl">
                Bored of just watching tutorials on YouTube?
              </h2>
              <p className="md:text-lg w-[50ch] max-w-full">
                Get Hands on Experience by daily assignments for 30 days from
                the{" "}
                <span className="text-[var(--accent)] font-bold">top 1%</span>{" "}
                in your favorite field 🤩
              </p>
              <div className="flex flex-col xs:flex-row gap-4 mt-6">
                <button
                  className="big-btn-structure bg-[var(--black)] text-[var(--white)] hover:opacity-80 transition-all ease-in"
                  onClick={login}
                >
                  Get Started
                </button>
                <button
                  className="big-btn-structure border border-[var(--black)] border-solid hover:bg-[var(--grey-80)] hover:text-[var(--white)] duration-300 transition-all ease-in-out"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="w-full">
              <img
                src="https://www.teachhub.com/wp-content/uploads/2020/10/Oct-21-How-to-Connect-with-Reluctant-Students-During-Remote-Learning_web-768x513.jpg"
                alt="kid getting tired of watching tutorials on laptop"
                className="w-full"
              />
            </div>
          </div>
          {/* hero end */}

          {/* tech stacks start */}
          <div className="bg-[var(--yellow)] mt-16 sm:mt-28 rounded-sm">
            <div className="px-4 py-10 sm:py-16">
              <div className="text-center">
                <h3 className="text-3xl sm:text-5xl">Tech Stacks 💻</h3>
                <p className="mt-2">You'll get experienced on</p>
              </div>
              <ul className="mt-8 flex justify-evenly flex-wrap gap-8">
                {techStacks.map((stack, idx) => (
                  <li
                    key={idx}
                    className="sm:text-lg w-fit font-semibold bg-[var(--grey-3)] py-3 px-6 sm:py-4 sm:px-8 rounded-3xl"
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
            <div className="banner-img" />
          </div>
          {/* tech stacks end */}

          {/* what after 30 days */}
          <div>
            
          </div>
        </div>
      </div>
      <div className="top-[40%] z-[-1] bottom-0 fixed bg-[var(--yellow)] left-0 right-0 rounded-t-3xl" />
    </div>
  );
};

export default HomePage;
