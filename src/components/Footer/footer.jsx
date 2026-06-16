export default function Footer() {
  return (
    <footer className="footer">
      <div className="section_container footer_container">
        <div className="footer_about">
          <h3 className="footer_about_title">About</h3>
          <p className="footer_about_text">Built by Benjamin</p>
        </div>
        <div className="footer_bottom">
          <div className="footer_credit">
            <p className="footer_copy">
              ©2026 Designed by{" "}
              <a
                href="https://amakandukwu.com/"
                target="_blank"
                rel="noreferrer"
                className="footer_link"
              >
                Amaka
              </a>{" "}
              &{" "}
              <a
                href="https://www.linkedin.com/in/ifeomaokocha"
                target="_blank"
                rel="noreferrer"
                className="footer_link"
              >
                Ifeoma A.
              </a>
            </p>
            <p className="footer_copy">
              Built by{" "}
              <a
                href="https://github.com/JAMIN-exe"
                target="_blank"
                rel="noreferrer"
                className="footer_link"
              >
                JAMIN.exe.
              </a>
              <span className="footer_rights"> All rights reserved</span>
            </p>
          </div>
          <div className="footer_links">
            <a
              href="https://tsacademyonline.com/"
              target="_blank"
              rel="noreferrer"
              className="footer_link"
            >
              TSAcademy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
