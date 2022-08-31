import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Made by Sumit ⓒ {year} | No rights reserved</p>
    </footer>
  );
}

export default Footer;
