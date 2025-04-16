import { FaFacebook } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"

function Footer() {
  return (
    <div>
      
      <div className="bg-gradient-to-r from-black to-zinc-900 text-[#9CA3AF] px-4 py-8 sm:py-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          
          <div className="text-center sm:text-left">
            <h1 className="mb-4 sm:mb-6 text-white font-semibold text-lg">Academic Review</h1>
            <p>
              Empowering Students with <br />
              honest academic reviews
            </p>
          </div>

         
          <div className="text-center sm:text-left">
            <h1 className="mb-4 sm:mb-6 text-white font-semibold text-lg">Navigation</h1>
            <p className="py-1 sm:py-2 text-sm">Home</p>
            <p className="py-1 sm:py-2 text-sm">Universities</p>
            <p className="py-1 sm:py-2 text-sm">Teachers</p>
            <p className="py-1 sm:py-2 text-sm">Write Review</p>
          </div>

          
          <div className="text-center sm:text-left">
            <h1 className="mb-4 sm:mb-6 text-white font-semibold text-lg">Legal</h1>
            <p className="py-1 sm:py-2 text-sm">Privacy Policy</p>
            <p className="py-1 sm:py-2 text-sm">Terms of Service</p>
            <p className="py-1 sm:py-2 text-sm">Guidelines</p>
            <p className="py-1 sm:py-2 text-sm">About Us</p>
          </div>

          
          <div className="text-center sm:text-left">
            <h1 className="mb-4 sm:mb-6 text-white font-semibold text-lg">Connect</h1>
            <p className="py-1 sm:py-2 text-sm">Contact</p>
            <p className="py-1 sm:py-2 text-sm">Support</p>
            <p className="py-1 sm:py-2 text-sm">Feedback</p>
            <p className="py-1 sm:py-2 text-sm">Blog</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex justify-center bg-gradient-to-r from-black to-zinc-900 px-4">
        <hr className="w-full max-w-7xl border-gray-700" />
      </div>

      {/* Copyright and Social Media */}
      <div className="bg-gradient-to-r from-black to-zinc-900 px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">© 2025 BracademicReview All Rights Reserved</p>
          <div className="flex space-x-6 text-white">
            <FaFacebook className="text-xl hover:text-[#FF416C] cursor-pointer" />
            <BiLogoGmail className="text-xl hover:text-[#FF416C] cursor-pointer" />
            <FaLinkedin className="text-xl hover:text-[#FF416C] cursor-pointer" />
            <FaInstagramSquare className="text-xl hover:text-[#FF416C] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
