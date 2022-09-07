const About = () => {
  return (
    <div
      id="about"
      className="pt-28 h-screen w-full bg-stone-200 flex flex-col justify-center items-center space-y-8"
    >
      <div className="flex justify-center items-center animate-fade-in-down">
        <p className="text-7xl text-center">Hi, I'm Thomas!</p>
      </div>
      <div className="flex justify-center items-center animate-fade-in-down">
        <p className="text-6xl w-2/3 text-center">
          A software engineer who loves developing web, mobile, and desktop
          applications
        </p>
      </div>
    </div>
  );
};

export default About;
