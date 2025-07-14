'use client';

import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Drawer } from "antd";
import { bgcolor } from "../utils";
import './nav.css';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const showDrawer = () => setOpen(true);
    const onClose = () => setOpen(false);

    // Scroll logic
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menu = [
        { title: 'Home' },
        { title: 'About Us' },
        { title: 'Partners' },
        { title: 'Products' },
        { title: 'Services' },
        { title: 'Careers' },
        { title: 'Contact Us' }
    ];

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 transition-all duration-300 

                    }`}
                    style={{backgroundColor:isScrolled?bgcolor:''}}
            >
                <div>
                    <img
                        src="https://az-scientificsolutions.com/wp-content/uploads/2018/05/logo.png"
                        alt="logo"
                        width="200px"
                        height="150px"
                    />
                </div>

                <ul className="hidden md:flex">
                    {menu.map((x, i) => (
                        <li
                            key={i}
                            className={`list-none px-4 text-[17px] relative nav-list cursor-pointer text-white
                                }`}
                        >
                            {x.title}
                        </li>
                    ))}
                </ul>

                <div
                    className="sm:flex justify-center items-center md:hidden cursor-pointer"
                    onClick={showDrawer}
                >
                    <GiHamburgerMenu color={'white'} size={20} />
                </div>
            </div>

            <Drawer
                title={
                    <div
                        className="flex justify-between items-center p-2"
                        style={{ backgroundColor: bgcolor }}
                    >
                        <img
                            src="https://az-scientificsolutions.com/wp-content/uploads/2018/05/logo.png"
                            alt=""
                            width="200px"
                            height="150px"
                        />
                        <div onClick={onClose}>
                            <IoCloseSharp color="white" size={26} className="mr-4 cursor-pointer" />
                        </div>
                    </div>
                }
                placement="top"
                closable={false}
                onClose={onClose}
                open={open}
                style={{ height: 'auto' }}
            >
                <ul className="flex flex-col">
                    {menu.map((x, i) => (
                        <li
                            key={i}
                            className="list-none px-4 py-[6px] my-2 text-black text-[17px] cursor-pointer"
                        >
                            {x.title}
                            <hr />
                        </li>
                    ))}
                </ul>
            </Drawer>
        </>
    );
};

export default Navbar;
