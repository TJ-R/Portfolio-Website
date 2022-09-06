import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className="fixed top-0 bg-stone-200 h-24 w-full flex flex-row 
                    justify-between items-center px-10 border-b border-gray-700">
      <div>
        <p className="text-xl animate-fade-in-down">Thomas Runyan</p>
      </div>
      <div>
          <ul className="list-none flex flex-row space-x-10">
            <li className="hover:cursor-pointer text-xl 
              hover:transition hover:ease-in-out hover:-translate-y-1 hover:scale-110
              animate-fade-in-down"
            >
              <Link 
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  duration={500}
              >
                  About
              </Link>
            </li>
            <li className="hover:cursor-pointer text-xl 
              hover:transition hover:ease-in-out hover:-translate-y-1 hover:scale-110
              animate-fade-in-down"
            >
              <Link 
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
              >
                  Projects
              </Link>
            </li>
            <li className="hover:cursor-pointer text-xl 
              hover:transition hover:ease-in-out hover:-translate-y-1 hover:scale-110
              animate-fade-in-down"
            >
              <Link 
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
              >
                  Contact
              </Link>
            </li>
          </ul>
      </div>
    </div>
  );
}

export default Navbar;