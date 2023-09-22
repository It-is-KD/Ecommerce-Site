import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0 fs-6">Made by ©&nbsp;
              <a  href="https://khush-portfolio.netlify.app/" className="text-decoration-underline text-dark fs-6" target="_blank">Khush Desai</a>
            </p>
            <a className="text-dark fs-4 m-2 mb-0" href="https://github.com/It-is-KD?tab=repositories" target="_blank">
              <i class="fa fa-github"></i>
            </a>
            <a className="text-dark fs-4 m-2 mb-0" href="https://www.linkedin.com/in/khush-desai/" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;