"use client";
import hero from "../src/assets/clinc hero.jpg"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ahmed from "../src/assets/dr ahmed.png";
import hamza from "../src/assets/dr hamza.png";
import  sarah from "../src/assets/dr.sarah.png";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Chatbot from "../_components/chatbot";
import { useForm } from "react-hook-form";
import { useState } from "react";
import  contactus from "../src/assets/contactus.png";
export  default  function Clinify() {
const [loading, setLoading] = useState(false);

    const doctors = [
  { img: ahmed, name: "Dr. Ahmed", specialty: "Internist" },
  { img: hamza, name: "Dr. Hamza", specialty: "Cardiologist" },
  { img: sarah, name: "Dr. Sarah", specialty: "Dermatologist" },
];
const {register,reset, handleSubmit ,formState:{errors}}=useForm();

const openChatbot = () => {
  setTimeout(() => {
    const widget = document.querySelector("elevenlabs-convai") as HTMLElement;
    if (widget) {
      const shadowRoot = widget.shadowRoot;
      if (shadowRoot) {
        const button = shadowRoot.querySelector("button") as HTMLButtonElement;
        if (button) {
          button.click();
        } else {
          const clickableElement = shadowRoot.querySelector('[role="button"], .chat-button, [class*="button"], [class*="trigger"]') as HTMLElement;
          if (clickableElement) {
            clickableElement.click();
          } else {
            const allButtons = shadowRoot.querySelectorAll("button");
            if (allButtons.length > 0) {
              (allButtons[0] as HTMLButtonElement).click();
            }
          }
        }
      } else {
        const button = widget.querySelector("button") as HTMLButtonElement;
        if (button) {
          button.click();
        } else {
          widget.click();
        }
      }
    }
  }, 100);
};
const onSubmit = async (data: any) => {
  try {
    setLoading(true); // شغل الـ spinner
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      reset(); // تفريغ الفورم بعد الإرسال
    } else {
      alert("Error: " + result.message);
    }
  } catch (error: any) {
    alert("Error: " + error.message);
  } finally {
    setLoading(false); // وقف الـ spinner بعد الانتهاء
  }
};

  return (
    <>

      {/* HERO SECTION */}
      <div
        className="  bg-[var(--color-main)] min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-18 gap-10"
        
      >
        {/* Left */}
        <motion.div
          className="md:w-1/2 flex flex-col gap-6"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }} 
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Care that puts you first
          </h1>
          <p className="text-gray-700 text-lg">
            Comprehensive outpatient services, expert physicians, and an easy
            booking experience through our friendly chatbot.
          </p>
          <div className="flex gap-4 mt-4" >
            <button 
              onClick={openChatbot}
              className="px-6 py-3 rounded-lg bg-[var(--color-main)] text-white font-semibold hover:bg-[#0e8bb4] transition"
            >
              Book Appointment
            </button>
            <a
              href="#services"
              className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              Our Services
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }} 
        >
          <div className="w-full max-w-lg h-[34rem] bg-gray-100 rounded-2xl flex items-center justify-center shadow-lg">
            <Image
              src={hero}
              alt="Clinic Hero"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
       {/* SERVICES */}
      <section id="services" className="py-20  bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            Our <span className="text-[#11A4D4]">Services</span>
          </motion.h2>
          <motion.p
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            Providing high-quality medical care through expert specialists in multiple departments.
          </motion.p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
           {[
  {
    icon: "fa-heart-pulse",
    title: "Cardiology",
    text: "Diagnosis and treatment of heart and cardiovascular diseases using advanced medical care."
  },
  {
    icon: "fa-spray-can-sparkles",
    title: "Dermatology",
    text: "Comprehensive skin care, dermatological treatments, laser therapy, and cosmetic services."
  },
  {
    icon: "fa-stethoscope",
    title: "Internal Medicine",
    text: "Diagnosis and management of internal diseases and chronic medical conditions."
  }
]
.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#11A4D4]/40 transition duration-300"
                
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full 
                bg-[#11A4D4]/10 group-hover:bg-[#11A4D4]/20 text-[#11A4D4] text-3xl transition">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-gray-600 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
       <section id="doctors" className="py-24   bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            Meet Our <span className="text-[#11A4D4]">Doctors</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            Our team of highly skilled and compassionate professionals.
          </motion.p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {doctors.map((doc, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
               
              >
                <div className="w-40 mb-4 h-40 mx-auto rounded-full overflow-hidden border-4 bg-[#0096FF] border-[#11A4D4] shadow-lg">
                  <Image
                    src={doc.img}
                    alt="Doctor"
                    width={160}
                    height={160}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-[#11A4D4]">{doc.name}</h2>
                <p className="text-gray-400">{doc.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white ">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            Why Patients <span className="text-[#11A4D4]">Trust Us</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ willChange: "transform, opacity" }} 
          >
            We ensure the highest level of care with expertise, compassion,
            and advanced medical support.
          </motion.p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Experienced Doctors",
                text: "Our specialists bring years of trusted medical experience.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#11A4D4]"
                    fill="currentColor"
                    viewBox="0 0 576 512"
                  >
                    <path d="M448 0c-48.6 0-96.1 17.9-133.5 50.3L288 76 253.5 50.3C216.1 17.9 168.6 0 120 0 53.7 0 0 53.7 0 120c0 45.7 22.3 88.5 62.4 113.9L256 448l193.6-214.1C553.7 208.5 576 165.7 576 120 576 53.7 522.3 0 456 0h-8z" />
                  </svg>
                ),
              },
              {
                title: "High-Quality Care",
                text: "Using modern equipment for precise and effective treatment.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#11A4D4]"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path d="M504.5 75.5c-10-10-26.2-10-36.2 0L256 287.8 43.7 75.5c-10-10-26.2-10-36.2 0s-10 26.2 0 36.2L219.8 324.5c10 10 26.2 10 36.2 0L504.5 111.7c10-10 10-26.2 0-36.2z" />
                  </svg>
                ),
              },
              {
                title: "Personalized Attention",
                text: "Every patient receives care tailored to their unique needs.",
                icon: (
                  <svg
                    className="w-8 h-8 text-[#11A4D4]"
                    fill="currentColor"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm89.6 32H134.4C60.2 288 0 348.2 0 422.4c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64 0-74.2-60.2-134.4-134.4-134.4z" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-xl transition text-center"
              
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#11A4D4]/10">
                  {card.icon}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CHATBOT FEATURES */}
<section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    
    <motion.h2
      className="text-3xl md:text-4xl font-extrabold text-gray-900"
      initial={{ y: -50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ willChange: "transform, opacity" }}
    >
      Meet Your <span className="text-[#11A4D4]">AI Assistant</span>
    </motion.h2>

    <motion.p
      className="mt-3 text-gray-600 max-w-2xl mx-auto"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{ willChange: "transform, opacity" }}
    >
      Our smart chatbot is available 24/7 to assist you with everything you need.
    </motion.p>

    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        {
          icon: "fa-brain",
          title: "Medical Recommendations",
          text: "Get instant advice based on your symptoms and medical history.",
        },
        {
          icon: "fa-triangle-exclamation",
          title: "Clinical Triage",
          text: "Assess urgency and get guided to the right level of care.",
        },
        {
          icon: "fa-pills",
          title: "AI Pharmacist",
          text: "Ask about medications, dosages, and interactions anytime.",
        },
        {
          icon: "fa-calendar-check",
          title: "AI Booking System",
          text: "Book, reschedule, or cancel appointments in seconds.",
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-[#11A4D4]/40 transition duration-300 text-center"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#11A4D4]/10 group-hover:bg-[#11A4D4]/20 text-[#11A4D4] text-2xl transition">
            <i className={`fa-solid ${item.icon}`}></i>
          </div>
          <h3 className="mt-5 text-base font-semibold text-gray-900">{item.title}</h3>
          <p className="mt-2 text-gray-500 text-sm leading-relaxed">{item.text}</p>
        </motion.div>
      ))}
    </div>

    {/* CTA */}
    <motion.div
      className="mt-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
    >
      {/* <button
        onClick={openChatbot}
        className="px-8 py-3 rounded-lg bg-[#11A4D4] text-white font-semibold hover:bg-[#0e8bb4] transition"
      >
        Try it now
      </button> */}
    </motion.div>

  </div>
</section>
  {/* DOCTORS */}
     
      {/* WHY PATIENTS TRUST US */}
    
     

    
   

  
      {/* FAQ SECTION */}



<section id="contact" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center">
      Get in <span className="text-[#11A4D4]">Touch</span>
    </h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-center">
      Reach out to us for inquiries or to schedule an appointment.
    </p>

    {/* هنا بقى مرحلة التقسيم نصين */}
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* الصورة شمال */}
   <div className="flex justify-center">
  <Image
    src="/contactus.png"
    alt="Contact Us"
    width={600}       // كبرنا الحجم الافتراضي
    height={600}      // كبرنا الحجم الافتراضي
    className="w-full max-w-lg h-auto object-contain rounded-xl"
  />
</div>



      {/* الفورم يمين */}
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-6 bg-white p-8 rounded-xl shadow-lg"
        >

          {/* Name */}
          <div className="text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#11A4D4] w-full"
              {...register("name", { required: "Name is required" })}
            />
{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message as string}</p>}
          </div>

          {/* Email */}
          <div className="text-left">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#11A4D4] w-full"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/, message: "Enter a valid email" },
              })}
            />
{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message as string}</p>}
          </div>

          {/* Phone */}
          <div className="text-left">
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#11A4D4] w-full"
              {...register("phone", {
                required: "Phone number is required",
                pattern: { value: /^[0-9]{10,15}$/, message: "Enter a valid phone number" },
              })}
            />
{errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message as string}</p>}
          </div>

          {/* Message */}
          <div className="text-left">
            <textarea
              placeholder="Your Message"
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#11A4D4] resize-none h-32 w-full"
              {...register("message", { required: "Message is required" })}
            ></textarea>
{errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message as string}</p>}          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-lg bg-[#11A4D4] text-white font-semibold hover:bg-[#0e8bb4] transition flex items-center justify-center"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Send Message"
            )}
          </button>

        </form>
      </div>

    </div>
  </div>
</section>




{/* FOOTER */}
<footer className="bg-white text-gray-300 py-12  ">
  <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-center md:text-left">
      <h3 className="text-xl font-bold text-main">Clinify</h3>
      <p className="mt-2 text-gray-400 text-sm">
        © 2026 Clinify. All rights reserved.
      </p>
    </div>

    
  </div>
</footer>


    </>
  );
}
