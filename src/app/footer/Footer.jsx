import React from 'react'
import { bgcolor } from '../../utils'

function Footer() {
    return (
        <div>
            <div
                style={{ backgroundColor: bgcolor }}
                className="w-full h-auto flex justify-center"
            >
                <div className="w-full flex flex-wrap">
                    {/* Left Side: Contact Info */}
                    <div className="flex flex-col justify-center items-start md:items-center text-white py-12 
                          flex-grow md:flex-[2] w-full md:w-1/3 pl-4 md:pl-0">
                        <div>
                            <h2 className="text-2xl md:text-4xl mb-6">Contact Us</h2>
                            <h2>Head Office:</h2>
                            <p>Suit 1, Osama Heaven,</p>
                            <p>Plot No, A-137-138,</p>
                            <p>Block 4-A, Near Patel hospital,</p>
                            <p>Gulshan-e-Iqbal, Karachi, Pakistan</p>
                            <br />
                            <h2>Info:</h2>
                            <p>Email: info@az-scientificsolutions.com</p>
                            <p>Tel: +92-21-34965714</p>
                            <p>Fax: +92-21-34965714</p>
                        </div>
                    </div>

                    {/* Right Side: Map */}
                    <div
                        className="bg-green-600 flex-grow md:flex-[4] w-full md:w-2/3 h-[300px] md:h-auto"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.9313804258227!2d67.09219217488223!3d24.934407442295466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339f529a2339b%3A0xce9ecdce85428e5d!2sOsama%20Heaven%20Apartments!5e0!3m2!1sen!2s!4v1752669057041!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: bgcolor }} className='w-full h-[50px] flex justify-center items-center text-white py-10'>
                <p>
                    © 2018 AZ Scientific Solutions. All Rights Reserved

                </p>
            </div>
        </div>
    )
}

export default Footer
