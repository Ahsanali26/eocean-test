import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = ({ children, setSidebar }) => {
  return (
    <div className="bg-white shadow-4xl flex items-center py-8 xs:px-11 tablet:px-10">
      <GiHamburgerMenu
        size={30}
        className="xs:mr-2 tablet:mr-11 hamburger"
        onClick={() => setSidebar(true)}
      />
      <p className="text-md sm:text-lg tablet:text-2xl xs:pl-3 tablet:pl-0 font-bold text-secondaryGreen">{children}</p>
    </div>
  );
};

export default Header;
