import footerStyles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Link href='https://www.linkedin.com/in/douglasdeveloper256/' >
        <a className={footerStyles.a}>Developed by douglasdeveloper256</a>
      </Link>
    </footer>
  );
};

export default Footer;
