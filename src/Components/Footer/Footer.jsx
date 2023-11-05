import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
import { SiIndeed } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-black text-white py-20 px-16 flex flex-col gap-14">
      <div className="grid md:grid-cols-3 md:gap-5 grid-cols-1 text-center text-xl md:text-base md:text-left lg:gap-0 lg:grid-cols-4 ">
        <div>
          <ul>
            <li>For Client</li>
            <li>How to Hire</li>
            <li>Talent Marketplace</li>
            <li>Project Catalog</li>
            <li>Hire and Agency</li>
            <li>Enterprise</li>
            <li>Any Hire</li>
            <li>Contract-to-Hire</li>
            <li>Direct Contracts</li>
            <li>Hire Woldwide</li>
            <li>Hire in the Bangladesh</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Fot Talent</li>
            <li>How to Find Work</li>
            <li>Direct Contracts</li>
            <li>Find Freelance Jobs Worldwide</li>
            <li>Find Freelance Jobs in the USA</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Resources</li>
            <li>Help & Support</li>
            <li>Resources</li>
            <li>Blog</li>
            <li>Community</li>
            <li>Affiliate Program</li>
            <li>Free Business tools</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Company</li>
            <li>About Us</li>
            <li>Leadership</li>
            <li>Investor Relations</li>
            <li>Careers</li>
            <li>Our impact</li>
            <li>Press</li>
            <li>Contact Us</li>
            <li>Trust, Safety & Security</li>
            <li>Modern Slavery Statement</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-5 md:gap-0 flex-col md:flex-row">
          <div className="flex flex-col md:flex-row items-center gap-5 md:gap-2 lg:gap-5 ">
            <h1>Follow Us</h1>
            <div className="flex justify-between items-center gap-3">
              <div className=" p-4 rounded-full hover:bg-blue-700 hover:text-black border border-blue-700 flex items-center ">
                <AiFillLinkedin></AiFillLinkedin>
              </div>
              <div className=" p-4 rounded-full hover:bg-white hover:text-black border border-white flex items-center ">
                <SiIndeed></SiIndeed>
              </div>
              <div className=" p-4 rounded-full hover:bg-blue-700 hover:text-black border border-blue-700 flex items-center ">
                <BsFacebook></BsFacebook>
              </div>
              <div className=" p-4 rounded-full hover:bg-pink-700  border border-pink-600 flex items-center ">
                <AiFillInstagram></AiFillInstagram>
              </div>

              <div className=" p-4 rounded-full hover:bg-sky-400 hover:text-black border border-sky-500 flex items-center ">
                <AiFillTwitterCircle></AiFillTwitterCircle>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 flex-col md:flex-row">
            <h1>Mobile App</h1>
            <div className="flex justify-center items-center gap-2">
              <div className=" p-4 rounded-full hover:bg-blue-700 hover:text-black border border-blue-700 flex items-center ">
                <AiFillLinkedin></AiFillLinkedin>
              </div>
              <div className=" p-4 rounded-full hover:bg-white hover:text-black border border-white flex items-center ">
                <SiIndeed></SiIndeed>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex justify-around flex-col lg:flex-row gap-5 ">
          <div className="text-center">
            <p>© 2023-2025 My Job Global Inc.</p>
          </div>
          <ul className="grid grid-cols-2  md:flex justify-evenly gap-4">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>CA Notice at Collection</li>
            <li>Cookie Settings</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
