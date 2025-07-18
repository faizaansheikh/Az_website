'use client';

import React, { useEffect, useState } from "react";
import { RadiusBottomleftOutlined, CloseOutlined } from '@ant-design/icons'
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
        { title: 'Home', link: '#home' },
        { title: 'About Us', link: '#about' },
        { title: 'Partners', link: '#partner' },
        { title: 'Products', link: '#products' },
        { title: 'Services', link: '#services' },
        { title: 'Careers', link: '#' },
        { title: 'Contact Us', link: '#contact' }
    ];

    return (
        <>
            <div
                className={`fixed top-0 left-0 right-0 z-20 flex justify-between items-center py-4 px-4 transition-all duration-300 
backdrop-blur-lg bg-[black]/30  border-grey/50 mt-2
                    }`}
                style={{ backgroundColor: isScrolled ? '' : '' }}
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
                        <a href={x.link} key={i}>
                            <li
                                className={`list-none px-4 text-[17px] relative nav-list cursor-pointer text-white
                                }`}
                            >
                                {x.title}
                            </li>
                        </a>

                    ))}
                </ul>

                <div
                    className="sm:flex justify-center items-center md:hidden cursor-pointer"
                    onClick={showDrawer}
                >
                    <RadiusBottomleftOutlined style={{ color: 'white', fontSize: '20px' }} color={'white'} size={20} />
                    {/* <GiHamburgerMenu color={'white'} size={20} /> */}
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
                            <CloseOutlined style={{ color: 'white', fontSize: '20px', margin: '5px', cursor: 'pointer' }} />
                            {/* <IoCloseSharp  /> */}
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
                        <a href={x.link} key={i}>
                            <li

                                className="list-none px-4 py-[6px] my-2 text-black text-[17px] cursor-pointer"
                            >
                                {x.title}
                                <hr />
                            </li>
                        </a>
                    ))}
                </ul>
            </Drawer>
        </>
    );
};

export default Navbar;
