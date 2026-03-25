
import Container from './Container';

const Footer = () => {
    return (
    <footer className="bg-gray-900 text-white pt-10 pb-8">
        <Container>
    
      <div className="grid grid-cols-1 gap-5  px-5 md:px-0 md:flex justify-between border-b border-gray-700 pb-10">

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">CS — Ticket System</h3>
        <p className="text-gray-400 text-sm max-w-sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>

      <span className="flex flex-col space-y-2">
        <h6 className="footer-title text-lg font-semibold mb-2">Company</h6>
        <a className="footer-link">About Us</a>
        <a className="footer-link">Our Mission</a>
        <a className="footer-link">Contact Sales</a>
      </span>

      <span className="flex flex-col space-y-2">
        <h6 className="footer-title text-lg font-semibold mb-2">Services</h6>
        <a className="footer-link">Products & Services</a>
        <a className="footer-link">Customer Stories</a>
        <a className="footer-link">Download Apps</a>
      </span>

      <span className="flex flex-col space-y-2">
        <h6 className="footer-title text-lg font-semibold mb-2">Information</h6>
        <a className="footer-link">Privacy Policy</a>
        <a className="footer-link">Terms & Conditions</a>
        <a className="footer-link">Join Us</a>
      </span>

      <span className="flex flex-col space-y-2">
        <h6 className="footer-title text-lg font-semibold mb-2">Social Links</h6>
        
        <a className="footer-link" href="#">
          @CS—Ticket System
        </a>
        <a className="footer-link" href="#">
          @CS—Ticket System
        </a>
        <a className="footer-link" href="#">
          @CS—Ticket System
        </a>
        <a className="footer-link" href="#">
          support@cst.com
        </a>
      </span>

      </div>

          <div className="text-center pt-6 text-gray-400 text-sm">
            © 2025 CS — Ticket System. All rights reserved.
          </div>
          </Container>
    </footer>
    );
};

export default Footer;