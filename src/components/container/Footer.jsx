import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial = {{ height: 0 }}
      whileInView = {{ height: "Auto" }}
      transition = {{ duration: 1 }}
      className = "bg-Teal p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">Get Started</div>
          <p className="text-sm leading-7">
            Lorem, ipsum dolor sit amet consectetur adipiscing elit. Vero official sit vitae quo, eum similique?
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">Web Devlopment</a>
            <a href="" className="text-sm hover:underline">Web Design</a>
            <a href="" className="text-sm hover:underline">Science</a>
            <a href="" className="text-sm hover:underline">Digital Markting</a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href="" className="text-sm hover:underline">Privacy Police</a>
            <a href="" className="text-sm hover:underline">Sitemap</a>
            <a href="" className="text-sm hover:underline">Careers</a>
            <a href="" className="text-sm hover:underline">Terms & Conditions</a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Follow Us</div>
          <div className="flex flex-col mb-4">xxxx@gamil.com</div>
          <div className="text-sm">+64386483683</div>
          <div className="flex gap-4 mt-4">
            <a href="" className="hover:scale-110 text-xl"><BsFacebook/></a>
            <a href="" className="hover:scale-110 text-xl"><BsInstagram/></a>
            <a href="" className="hover:scale-110 text-xl"><BsTwitter/></a>
            <a href="" className="hover:scale-110 text-xl"><BsPinterest/></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;