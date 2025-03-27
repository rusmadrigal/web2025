import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 text-center lg:ml-auto footer-section max-w-content xl:max-2xl:max-w-50rem">
      <p className="">
        Copyright 2025 | www.rusmadrigal.com | San Jose, Costa Rica.
        <Link href="#" className="transition-colors"></Link>
      </p>
    </footer>
  );
};

export default Footer;
