import React from "react";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="text-center mac-w-[600px] mx-auto">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Subscribe to Our <span className="text-Teal">Newsletter</span>
          </div>
          <p className="text-sm leading-7 text-gray">
            Stay connected with FunEd! Subscribe to our newsletter and be the first 
            to know about new courses, expert tips, and exclusive offers. Get learning 
            inspiration and updates delivered straight to your inbox—no spam, just value.
          </p>
          <motion.form 
            action="" 
            initial={{ scale: 0 }} 
            whileInView={{ scale: 1 }} 
            className="mt-5 flex justify-center"
            transition={{ duration: 0.3 }}
          >
            <input type="text" placeholder="Enter your email address" className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60 rounded-l-md"/>
            <button className="text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold rounded-r-md">Subscribe</button>
          </motion.form>
      </div>
    </div>
  );
};

export default Contact;