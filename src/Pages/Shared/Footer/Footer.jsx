import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-[#0d1122] text-base-content mt-10">
      <div className="text-white">
        <div>
          <Link to="/" className="text-3xl">
            Academiz
          </Link>
        </div>
      </div>
      <div className="text-white">
        <span className="footer-title">University</span>
        <a className="link link-hover">College</a>
        <a className="link link-hover">School</a>
      </div>
      <div className="text-white">
        <span className="footer-title">Program</span>
        <a className="link link-hover">Our Location</a>
        <a className="link link-hover">Contact Us</a>
      </div>
      <div className="text-white">
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
