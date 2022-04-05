import React from "react";
import Logo from "./../../imgs/footer-logo.svg";
import ChevoeronRight from "./../../imgs/right-arrow.svg";
import "./Footer.css";
import FooterColumn from "./FooterColumn";

function Footer() {
  const footerLinks = [
    {
      title: "About us ",
      links: [
        { name: "About the LEGO Group", src: "/about" },
        { name: "LEGO<sup>®</sup> News", src: "/news" },
        { name: "Sustainability", src: "/about" },
        { name: "Supply Chain Transparency Statement", src: "/about" },
        { name: "LEGO Product Certification", src: "/about" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", src: "/contact-us" },
        { name: "Find Building Instructions", src: "/contact-us" },
        { name: "Replacement Parts", src: "/contact-us" },
        { name: "Shipping and Returns", src: "/contact-us" },
        { name: "Payment Methods", src: "/about" },
        { name: "Terms & Conditions", src: "/about" },
        { name: "Product Recalls", src: "/contact-us" },
      ],
    },
    {
      title: "Attractions",
      links: [
        { name: `LEGO<sup>®</sup> House`, src: "/home" },
        { name: "LEGOLAND<sup>®</sup> Parks", src: "/store" },
        { name: "LEGOLAND Discovery Centers", src: "/store" },
      ],
    },
    {
      title: "More From Us",
      links: [
        { name: "LEGO<sup>®</sup> LIFE", src: "/store" },
        { name: "LEGO Ideas", src: "/store" },
        { name: "LEGO Foundation", src: "/about" },
      ],
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className="column col-logo">
          <div className="logo-region">
            <img src={Logo} alt="" />
            <a href="#test" className="region">
              <i className="fas fa-map-marker-alt"></i>
              Change Region
            </a>
          </div>

          <a href="#test">Gift Cards</a>
          <a href="#test">LEGO Catalogue</a>
        </div>
        <FooterColumn
          title={footerLinks[0].title}
          footerLinks={footerLinks[0].links}
        />
        <FooterColumn
          title={footerLinks[1].title}
          footerLinks={footerLinks[1].links}
        />
        <FooterColumn
          title={footerLinks[2].title}
          footerLinks={footerLinks[2].links}
        />
        <FooterColumn
          title={footerLinks[3].title}
          footerLinks={footerLinks[3].links}
        />
      </div>
      <section className="socialmedia-wrapper">
        <div className="subscription">
          <h6>Subscribe to LEGO® Shop emails</h6>
          <div className="email">
            <input
              type="email"
              name="footer-email"
              placeholder="Your email address"
            />
            <button>
              <img src={ChevoeronRight} alt="" />
            </button>
          </div>
        </div>
        <div className="follow">
          <h6>Follow us</h6>
          <div className="social-icons">
            <a href="#test" className="icon fa">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#test" className="icon tw">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#test" className="icon insta">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#test" className="icon yout">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="footer-copyright">
        <p>
          This website cloned and developed by&copy; Karim 3alaa , Mahmoud Emam
          , Mahmoud 3ssam, Alaa Abdelmotelb, Romaisaa Samir
        </p>
      </section>
    </footer>
  );
}

export default Footer;
