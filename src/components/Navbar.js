import { Link } from 'react-scroll';
const Navbar = () => {
    return (
        <div className="fixed top-0 bg-neutral-50 h-24 w-full flex flex-row 
                        justify-between items-center px-10 border-b border-gray-700">
            <div>
                <p className="text-xl">Thomas Runyan</p>
            </div>
            <div>
                <ul className="list-none flex flex-row space-x-10">
                    <li className="hover:cursor-pointer text-xl">
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
                    <li className="hover:cursor-pointer text-xl">
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
                    <li className="hover:cursor-pointer text-xl">
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