import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="bg-gradient-to-r from-black to-zinc-900 text-[#9CA3AF] flex justify-around py-9">
        <div>
          <h1 className="mb-6 text-white font-semibold">Academic Review</h1>
          <p>
            Empowering Students with <br />
            honest academic reviews
          </p>
        </div>
        <div>
          <h1 className="mb-6 text-white font-semibold">Navigation</h1>
          <p className="py-2 text-sm">Home</p>
          <p className="py-2 text-sm">Universities</p>
          <p className="py-2 text-sm">Teachers</p>
          <p className="py-2 text-sm">Write Review</p>
        </div>
        <div>
          <h1 className="mb-6 text-white font-semibold">Legal</h1>
          <p className="py-2 text-sm">Privacy Policy</p>
          <p className="py-2 text-sm">Terms of Service</p>
          <p className="py-2 text-sm">Guidelines</p>
          <p className="py-2 text-sm">About Us</p>
        </div>
        <div>
          <h1 className="mb-6 text-white font-semibold">Connect</h1>
          <p className="py-2 text-sm">Contact</p>
          <p className="py-2 text-sm">Support</p>
          <p className="py-2 text-sm">Feedback</p>
          <p className="py-2 text-sm">Blog</p>
        </div>
      </div>
      <div className="flex justify-center bg-gradient-to-r from-black to-zinc-900">
        <hr className="w-[1600px] border-gray-700" />
      </div>
      <div className="h-[100px] flex justify-around space-s-4 bg-gradient-to-r from-black to-zinc-900 items-center pb-12 pt-4">
        <p className="text-gray-400 text-sm">
          © 2025 BracademicReview All Rights Reserved
        </p>
        <div className="flex space-x-6 w-[208px] text-white">
          <FaFacebook />
          <BiLogoGmail />
          <FaLinkedin />
          <FaInstagramSquare />
        </div>
      </div>
    </div>
  );
}

export default Footer;
