/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Github from "@/icons/GitHub";
import Instagram from "@/icons/Instagram";
import Mastodon from "@/icons/Mastodon";

const FooterLink = ({ children, href }) => (
  <a
    className="footer-link"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    css={css`
      display: flex;
      fill: #fff;
      font-size: 1.75vw;
      margin-right: 1vw;
    `}
  >
    {children}
  </a>
);

const Footer = () => (
  <footer
    css={css`
      background: #0c257e;
      padding: 2vh 8.5vh;
      color: #fff;
      font-size: 1.35vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      font-weight: 100;
      box-sizing: border-box;
    `}
  >
    <div className="left">(c) 2020 Aman Harwara</div>
    <div
      className="right"
      css={css`
        display: flex;
      `}
    >
      <FooterLink href="https://github.com/amanharwara">{Github}</FooterLink>
      <FooterLink href="https://mastodon.social/@amanharwara">
        {Mastodon}
      </FooterLink>
      <FooterLink href="https://instagram.com/aman.harwara">
        {Instagram}
      </FooterLink>
    </div>
  </footer>
);

export default Footer;
