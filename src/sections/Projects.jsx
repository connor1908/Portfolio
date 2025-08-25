function Projects() {
  return (
    <section
      id="project"
      className="w-4/5 px-4 py-4 mx-auto mb-16 text-left scroll-mt-20 md:mb-44"
    >
      <h3 className="mb-4 text-xl font-semibold">My Projects</h3>
      <div className="flex flex-col gap-12 md:grid md:grid-cols-2">
        {/* Project 1 */}
        <div>
          <h4 className="font-semibold">Spotify Clone</h4>
          <p>
            A Spotify-inspired music streaming platform, integrated audio
            playback controls for seamless navigation and improved user
            engagement.
          </p>
          <a
            href="https://spotifyclone-rt4s.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mr-2">Live</button>
          </a>

          <a
            href="https://github.com/connor1908/SpotifyClone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Code</button>
          </a>
        </div>

        {/* Project 2 */}
        <div>
          <h4 className="font-semibold">Pixo</h4>
          <p>
            A social media platform with React and Tailwind CSS, supporting user
            authentication, post creation, likes, and profile management
          </p>
          <a
            href="https://pixo-indol.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mr-2">Live</button>
          </a>
          <a
            href="https://github.com/connor1908/Pixo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Code</button>
          </a>
        </div>

        {/*   TODO: Add later */}
        {/* Project 3 */}
        <div>
          <h4 className="font-semibold">Fast Pizza Co.</h4>
          <p>
            A Pizza Delivery application using React for building reusable UI
            components and Redux for predictable state management
          </p>
          <a
            href="https://github.com/connor1908/FastPizzaCo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Code</button>
          </a>
        </div>

        {/* Project 4 */}
        {/* <div>
          <h4>To be added soon...</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, minima aut? Consequatur, reprehenderit neque. Ex
            magnam quidem pariatur doloremque! Accusamus.
          </p>
          <button className="mr-2">Live</button>
          <button>Code</button>
        </div> */}
      </div>
    </section>
  );
}

export default Projects;
