import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Main() {
  return (
    <main className="w-3/4 px-8 mx-auto mt-32 mb-16 md:py-8 sm:mt-60">
      <div className="flex flex-col-reverse items-center md:flex-row md:items-center">
        <div className="flex flex-col">
          <h2 className="text-sm sm:text-base md:text-xl">
            Hello, my name is <span className="font-bold">Himanshu Yadav</span>{" "}
            and I am a front-end developer. I like Pokemon and my favourite
            Pokemon is Bulbusaur.
          </h2>

          <div className="flex items-end gap-2">
            <a
              href="https://drive.google.com/file/d/1Nv0yOa8GM1vcS82W2CzaUc-VJDZYteiK/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center">View CV</button>
            </a>
            <a
              href="https://www.linkedin.com/in/himanshu-yadav-b2b66737a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin
                size={58}
                className="transition-colors cursor-pointer hover:bg-emerald-400"
              />
            </a>

            <a
              href="https://github.com/connor1908"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub
                size={58}
                className="transition-colors cursor-pointer hover:bg-emerald-400"
              />
            </a>
          </div>
        </div>
        <img
          src="/Bulbasaur1.png"
          className="w-44 sm:w-64 lg:w-80"
          alt="Picture of bulbasaur pokemon"
        />
      </div>
    </main>
  );
}

export default Main;
