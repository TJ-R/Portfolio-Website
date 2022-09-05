const About = () => {
    return (
        <div id="about" className="pt-28 h-screen w-full bg-neutral-50 flex flex-row">
            <div className="basis-1/3 flex justify-center items-center">
                <h1 className="text-6xl text-center">
                    Hi, I'm Thomas!
                </h1>       
            </div>
            <div className="basis-2/3 flex justify-center items-center">
                <p className="text-4xl text-center">I am a software engineer who loves developing web, mobile, desktop applications</p>
            </div>
        </div>
    );
}

export default About;