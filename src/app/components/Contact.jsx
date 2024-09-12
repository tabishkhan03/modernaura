"use client"
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const sendMail = async () => {
        try {
            // Concatenate firstName and lastName
            const fullName = `${formData.firstName} ${formData.lastName}`;

            const payload = {
                name: fullName,
                email: formData.email,
                phonenumber: formData.phone,
                emailsub: formData.subject,
                message: formData.message,
            };

            const response = await axios.post("/api/sendmail", payload);
            console.log(response);

            if (response.data.success === true) {
                toast.success("Email sent successfully!");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Error in sending mail");
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="custom-container text-white">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                    <div className="bg-[#121212] p-6 rounded-lg lg:w-1/2">
                        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
                        <h1 className="text-3xl md:text-4xl font-bold font-color-two mb-6">Get In Touch</h1>
                        <form>
                            <div className="flex flex-col md:flex-row gap-4 mb-4">
                                <div className="w-full">
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-[#1E1E1E] border border-gray-700 rounded p-2 text-white"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-[#1E1E1E] border border-gray-700 rounded p-2 text-white"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#1E1E1E] border border-gray-700 rounded p-2 text-white"
                                    placeholder="example@yourgmail.com"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#1E1E1E] border border-gray-700 rounded p-2 text-white"
                                    placeholder="+91 12345 67890"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-[#1E1E1E] border border-gray-700 rounded p-2 text-white"
                                    placeholder="enter you subject"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-[#1E1E1E] border border-gray-700 rounded p-2 text-white"
                                    placeholder="Type here"
                                    rows={4}
                                />
                            </div>
                            <div className='w-full flex justify-center items-center'>
                                <button
                                    type="button"
                                    onClick={sendMail}
                                    className="py-2 px-6 text-[#121212] font-semibold rounded-full text-lg transition-transform duration-200 ease-in-out transform hover:scale-105"
                                    style={{
                                        background: 'linear-gradient(to right, #FE9B07, #E25F00)',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info Section */}
                    <div className="flex flex-col lg:w-1/2">
                        <p className="mb-6 text-gray-300">We&apos;d love to hear about your project and discuss how we can bring your vision to life. Choose the method that works best for you.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mb-6">
                            <div className="flex flex-col items-center">
                                <img src="/contact/Phone.png" alt="" />
                                <div>
                                    <h3 className="text-center font-bold mb-1">Phone Number</h3>
                                    <p className="text-gray-300 text-sm">+91 8452937018</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/contact/Email.png" alt="" />
                                <div>
                                    <h3 className="text-center font-bold mb-1">Email</h3>
                                    <p className="text-gray-300 text-sm">moderaura09@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/contact/WhatsApp.png" alt="" />
                                <div>
                                    <h3 className="text-center font-bold mb-1">Whatsapp Number</h3>
                                    <p className="text-gray-300 text-sm">+91 8452937018</p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center">
                                <img src="/contact/Address.png" alt="" />
                                <div>
                                    <h3 className="text-center font-bold mb-1">Address</h3>
                                    <p className="text-gray-300 text-sm">Shop no.30 plot no.24, Shreeji Plaza, Sector 25, Seawood(E), Navi Mumbai</p>
                                </div>
                            </div>
                        </div>


                        <div className="bg-gray-800 rounded-lg overflow-hidden relative" style={{ paddingTop: '56.25%' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4513.550047288932!2d73.01848747583682!3d19.022673353643317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c302cbdb0c35%3A0x63af0a4976299d17!2sKerala%20Tales%20Restaurant!5e1!3m2!1sen!2sin!4v1726117247114!5m2!1sen!2sin"
                                className="absolute top-0 left-0 w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
