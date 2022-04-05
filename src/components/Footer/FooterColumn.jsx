import React from "react";
import CheveronDown from "./../../imgs/chevron-down.svg";

function FooterColumn({ title, footerLinks }) {
  return (
    <div className="column">
      <h4>
        {title} <img src={CheveronDown} alt="" />
      </h4>
      <ul>
        {footerLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.src}
              dangerouslySetInnerHTML={{ __html: link.name }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterColumn;
