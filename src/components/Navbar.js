const Navbar = () => {
    return (
        <div className="fixed top-0 bg-neutral-50 h-24 w-full flex flex-row justify-between items-center px-10">
            <div>
                Thomas Runyan
            </div>
            <div>
                <ul className="list-none flex flex-row space-x-10">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;