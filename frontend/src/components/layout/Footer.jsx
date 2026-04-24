const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>OmniRetail</h3>
          <p>The future of phygital commerce. Bridging the gap between online flexibility and offline certainty.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/search">Browse Products</a></li>
            <li><a href="/locator">Find a Store</a></li>
            <li><a href="/negotiate">How to Negotiate</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 OmniRetail. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
