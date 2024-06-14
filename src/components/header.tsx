import { useEffect, useState } from "react";
import NavItem from "./nav-item";

export default function Header() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    console.log(headerVisible);
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headerVisible, lastScrollTop]);
  return (
    <div
      className={`p-8 fixed z-50 w-full text-black transition duration-100 bg-current border-current
      ${!headerVisible ? "transform -translate-y-full" : ""}
      `}
    >
      <div className="flex items-center justify-between px-5 font-medium font-montserrat">
        <div>
          <NavItem href="/">Trang Chủ</NavItem>
          <NavItem href="/jewelry">Sản phẩm</NavItem>
          <NavItem href="/about">Về chúng tôi</NavItem>
        </div>
        {/* <img src="/logo.png" alt="logo" className="h-[80px] w-[80px]" /> */}
        <div
        className="absolute text-6xl text-black font-manhattan left-[50%] transform translate-x-[-50%] top-0 p-4"
        >HUYNH HANH</div>
        <div>
          <NavItem href="/jewelry">Đăng nhập</NavItem>
          <NavItem href="/about">Đăng ký</NavItem>
        </div>
      </div>
    </div>
  );
}
