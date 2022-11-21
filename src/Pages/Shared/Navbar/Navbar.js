import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    //function to handle logout
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    //change nav color when scrolling
    const [color, setColor] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const yAxis = window.scrollY;
            if (yAxis > 90) {
                setColor(true);

            } else {
                setColor(false);
            }
        })
    }, [])

    //function to toggle theme and save in local storage
    const toggleDarkMode = () => {
        let htmlClasses = document.querySelector("html").classList;
        if (localStorage.theme === "dark") {
            htmlClasses.remove("dark");
            localStorage.removeItem("theme");
        } else {
            htmlClasses.add("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    //Nav links (<></> and <React.Fragment> is same)
    const menuItems = <React.Fragment>
        <li onClick={toggleDarkMode}>
            <input type="checkbox" className="toggle my-3 rounded-full" />
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/about">About</Link></li>
        {
            user?.uid ?
                <>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><button onClick={handleLogOut}>Sign Out</button></li>
                </>
                : <li><Link to="/login">Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className='sticky top-0 z-50'>
            {/* change nav color when scrolling conditional className */}
            <div className={color ? "navbar bg-base-100 flex justify-between dark:bg-accent" : "navbar bg-teal-200 justify-between dark:bg-transparent"}>
                <div className="navbar-start">
                    {/* small screen */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
                </div>
                {/* large screen screen */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                {/* dashboard drawer for small device */}
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;