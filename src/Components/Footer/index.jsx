// src/components/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaGlobe } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate=useNavigate()
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 pt-10 pb-4 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 mb-1">Udemy Business</h4>
          <a href="#" className="hover:underline block">Teach on Udemy</a>
          <a href="#" className="hover:underline block">Get the app</a>
          <a href="#" className="hover:underline block">About us</a>
          <a href="#" className="hover:underline block">Contact us</a>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 mb-1">Careers</h4>
          <a href="#" className="hover:underline block">Blog</a>
          <a href="#" className="hover:underline block">Help and Support</a>
          <a href="#" className="hover:underline block">Affiliate</a>
          <a href="#" className="hover:underline block">Investors</a>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 mb-1">Terms</h4>
          <a href="#" className="hover:underline block">Terms of Use</a>
          <a href="#" className="hover:underline block">Privacy Policy</a>
          <a href="#" className="hover:underline block">Sitemap</a>
          <a href="#" className="hover:underline block">Accessibility</a>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-800 mb-1">Resources</h4>
          <a href="#" className="hover:underline block">Support</a>
          <a href="#" className="hover:underline block">Guides</a>
          <a href="#" className="hover:underline block">Developers</a>
          <a href="#" className="hover:underline block">Community</a>
        </div>

        {/* Language Selector */}
        <div className="flex flex-col items-start justify-between h-full">
          <button className="flex items-center gap-2 border border-gray-400 px-3 py-1 rounded text-gray-700 hover:bg-gray-200 mt-2">
            <FaGlobe />
            English
          </button>
          <div className="mt-auto pt-4">
            <img onClick={()=>navigate('/')} className="cursor-pointer" src="/assets/image/logo-udemy.svg" alt="Udemy Logo" />
            <p className="text-xs mt-1">© {new Date().getFullYear()} Udemy, Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
