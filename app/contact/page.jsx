"use client";
import { useState } from "react";
import axios from "axios";
import ScrollToTopArrow from "../components/ScrollToTopArrow";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/sendmail", formData);
      if (response.status == "200") {
        toast.success("Email sent successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Error in sending mail try again later")
      // console.error("Error in sending mail", error);
    }
  };

  return (
    <>
      <ToastContainer/>
      <div className="relative w-full h-[350px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("/cotna.jpg")' }}
        />
        <div className="absolute inset-0 bg-zinc-900 bg-opacity-50" />
        <div className="relative flex items-center justify-center h-full pl-12">
          <div className="text-white">
            <p className="text-[56px] uppercase tracking-widest font-extrabold">Contact</p>
            <h1 className="text-[30px] font-bold text-center mt-5">Get in Touch</h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 text-gray-900">
                Contact Us
              </h1>
            </div>
            <div className="mt-12 max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                  <div>
                    <label className="font-medium">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Last name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Phone number</label>
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 55500 00000"
                      required
                      className="w-full px-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                  ></textarea>
                </div>
                <button className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-0 gap-8">
              <div className="w-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
                  width="100%"
                  height="580"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="relative bg-zinc-100 p-4">
                <div className="absolute inset-0">
                  <img
                    src=""
                    alt="Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h2 className="font-bold text-lg">ADDRESS</h2>
                        <p>
                          Shop no.30.plot no.24,Shreeji plaaza, Sector-25,
                          Seawood(E),Navi Mumbai
                        </p>
                      </div>
                      <div>
                        <h2 className="font-bold text-lg">EMAIL</h2>
                        <p><a href="mailto:moderauraa09@gmail.com">moderauraa09@gmail.com</a></p>
                      </div>
                      <div>
                        <h2 className="font-bold text-lg">PHONE</h2>
                        <p><a href="tel:+91 8452937018">+91 8452937018</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopArrow />
    </>
  );
}
