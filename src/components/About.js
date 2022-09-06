const About = () => {
  return (
    <div
      id="about"
      className="pt-28 h-screen w-full bg-stone-200 flex flex-row"
    >
      <div className="basis-1/3 flex justify-center items-center">
        <div
          className="h-40 w-60 overflow-hidden relative text-center
                    before:content-['Hi,_I\'m_Thomas'] before:text-6xl before:text-stone-800 before:h-full before:w-full
                    before:flex before:justify-center before:items-center after:absolute after:bg-stone-200 after:w-80 after:h-80
                    after:-left-11 after:-bottom-20 after:rounded-tl-10xl after:rounded-tr-9xl after:rounded-br-8xl  
                    after:rounded-bl-11xl after:animate-liquid-fill"
        ></div>
      </div>
      <div className="basis-2/3 flex justify-center items-center">
        <p className="text-4xl text-center">
          I am a software engineer who loves developing web, mobile, desktop
          applications
        </p>
      </div>
    </div>
  );
};

export default About;
