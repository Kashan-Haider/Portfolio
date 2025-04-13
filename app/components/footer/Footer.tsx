"use client";
import React, { useState } from "react";
import SocialLink from "../menu/SocialLink";
import Copyrights from "../copyrights/Copyrights";
import { useForm, ValidationError } from "@formspree/react";

const SocialItems = [
  {
    title: "Instagram",
    path: "https://www.instagram.com/ka_sha_n/",
  },
  {
    title: "Facebook",
    path: "https://www.facebook.com/kashi.awan.52687506/",
  },
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/ka-sha-n/",
  },
  {
    title: "Github",
    path: "https://github.com/Kashan-Haider",
  },
];

const Footer = () => {
  const [state, handleSubmit] = useForm("meoandyw");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div
      id="footer"
      className="p-5 pb-2 md:px-10 lg:px-20 relative w-screen overflow-hidden"
    >
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-5 md:mb-10 lg:mb-20 text-primaryText">
        <span className="text-primaryDark">Interested in talking</span> <br />
        let&apos;s do it.
      </h1>
      <div className="flex flex-wrap gap-5 md:gap-10">
        {state.succeeded ? (
          <div
            className="p-5 pb-2 md:px-10 lg:px-20 relative"
          >
            <div className="text-center py-20">
              <h2 className="text-3xl md:text-4xl font-bold text-primaryText mb-4">
                Thank you for your message!
              </h2>
              <p className="text-xl text-primaryText">
                I&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-10 relative border border-primaryText hover:border-primaryDark rounded-lg group cursor-pointer mx-auto"
              >
                <div className="bg-primaryDark flex absolute w-0 h-full rounded-lg top-0 left-0 group-hover:w-full transition-all duration-300"></div>
                <div className="relative z-10 flex items-center gap-3 group-hover:text-white duration-300 px-8 py-2">
                  Send Another Message
                </div>
              </button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="lg:grow flex flex-col gap-5 md:gap-10"
          >
            <div className="flex gap-5 flex-col lg:flex-row">
              <div className="w-full">
                <input
                  id="name"
                  name="name"
                  className="bg-transparent outline-none py-3 px-1 border-b border-primaryText placeholder:text-primaryText text-primaryText w-full"
                  type="text"
                  placeholder="Full name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>

              <div className="w-full">
                <input
                  id="email"
                  name="email"
                  className="bg-transparent outline-none py-3 px-1 border-b border-primaryText placeholder:text-primaryText text-primaryText w-full"
                  type="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div>
              <input
                id="subject"
                name="subject"
                className="bg-transparent outline-none py-3 px-1 border-b border-primaryText placeholder:text-primaryText text-primaryText w-full"
                type="text"
                placeholder="Enter the subject"
                value={formValues.subject}
                onChange={handleInputChange}
                required
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                className="bg-transparent outline-none py-3 px-1 border-b border-primaryText placeholder:text-primaryText text-primaryText w-full"
                placeholder="Enter your message"
                value={formValues.message}
                onChange={handleInputChange}
                required
                rows={4}
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="mt-10 relative border border-primaryText hover:border-primaryDark rounded-lg group cursor-pointer w-fit disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="bg-primaryDark flex absolute w-0 h-full rounded-lg top-0 left-0 group-hover:w-full transition-all duration-300"></div>
              <div className="relative z-10 flex items-center gap-3 group-hover:text-white duration-300 px-8 py-2">
                {state.submitting ? "Sending..." : "Discuss Project"}
              </div>
            </button>

            <ValidationError errors={state.errors} />
          </form>
        )}

        <div className="grow text-primaryText text-base md:text-xl flex flex-col justify-between lg:items-end">
          <div className="flex flex-col gap-2 lg:items-end">
            <p>Get in touch.</p>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              hkashan.dev@gmail.com
            </h1>
            <p>+92 335 55571621</p>
            <p>Lahore, Pakistan</p>
          </div>

          <div className="text-primaryText flex gap-2 md:gap-5 flex-wrap items-center">
            {SocialItems.map((item, index) => {
              return (
                <SocialLink key={index} title={item.title} path={item.path} />
              );
            })}
          </div>
        </div>
      </div>

      <Copyrights />

      {/* Background elements */}
      <div>
        <div className="absolute -z-10 opacity-50 bottom-0 right-0 rounded-xl blur-[200px] w-[200px] h-[300px] md:w-[400px] md:h-[300px] bg-gradient-to-tl from-[#f50c0cf1] via-[#f5690cda] to-[#ffcea09f]"></div>
      </div>
      <div>
        <div className="absolute -z-10 opacity-50 bottom-0 md:right-[20%] rounded-3xl blur-[100px] w-[300px] h-[300px] md:w-[500px] md:h-[300px] bg-gradient-to-br from-[#9A3639] via-[#7b15a3c7] to-[#d35a60]"></div>
      </div>
      <div>
        <div className="absolute -z-10 bottom-0 -right-[10%] rotate-12 rounded-full blur-[100px] w-[100px] h-[100px] md:w-[600px] md:h-[600px] bg-primary opacity-10"></div>
      </div>
    </div>
  );
};

export default Footer;
