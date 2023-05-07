const Navbar = () => {
    return (<nav className="w-full flex justify-center sticky top-0 bg-white">
        <div className="flex justify-between w-[90%]  bg-white px-10 py-10">
            <h1 className="text-2xl font-AbrilFatface">CODAL</h1>
            <div>
                <ul className="flex font-Montserrat gap-10 items-center">
                    <li>Employer</li>
                    <li>Job Seeker</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <li className="border-2 py-2 px-4 rounded-xl border-blue-400 shadow-lg shadow-blue-100">Contact Us</li>
                </ul>
            </div>
        </div>
    </nav>);
}

export default Navbar;