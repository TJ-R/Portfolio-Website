const Contact = () => {
  return (
    <div
      id="contact"
      className="pt-28 h-screen w-full bg-stone-200 flex flex-row justify-center items-center text-left"
    >
      <div>
        <h1 className="text-8xl">Let's Connect</h1>
        <ul className="list-none">
          <li>
            <a
              className="text-5xl underline"
              href="https://www.linkedin.com/in/thomas-runyan-061a64171/"
            >
              LINKEDIN
            </a>
          </li>
          <li>
            <a className="text-5xl underline" href="https://github.com/TJ-R">
              GITHUB
            </a>
          </li>
          <li>
            <a className="text-5xl underline" href="mailto:runyant13@gmail.com">
              EMAIL
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Contact;
