import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import Sara from "../models/Sara";
import Loader from "../components/Loader";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("mixamo.com");

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("mixamo.com");

    emailjs
      .send(
        "service_10dm7jn",
        "template_ctddhv8",
        {
          from_name: form.name,
          to_name: "Akshay",
          from_email: form.email,
          to_email: "akshayaileni@gmail.com",
          message: form.message,
        },
        "ucR53XAADgnNP8m6-"
      )
      .then((result) => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Thank you! I will get back to you as soon as possible.",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
        }, 3000);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setCurrentAnimation("mixamo.com");
        showAlert({
          show: true,
          text: "Something went wrong! Please try again later.",
          type: "danger",
        });
        setTimeout(() => {
          hideAlert();
        }, 3000);
      });
  };

  const handleFocus = () => setCurrentAnimation("mixamo.com");
  const handleBlur = () => setCurrentAnimation("mixamo.com");

  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch!</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input outline-none"
              placeholder="Your Name!?"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input outline-none"
              placeholder="Your Email!?"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <textarea
              name="message"
              rows={4}
              className="textarea outline-none min-h-[100px] max-h-[300px]"
              placeholder="Your Message!?"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Sara
              currentAnimation={currentAnimation}
              position={[0.5, -1.5, 0]}
              rotation={[12.6, -0.2, 0]}
              scale={[1, 1, 1]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
