import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import CustomerIcon from "../../images/customers-icon.svg";

const Sidebar = ({ setSidebar }) => {
  const tabs = [
    {
      icon: <img src={CustomerIcon} alt="customers" lazy="loading" className="w-7" />,
      content: "INVOICES",
      route: "/",
    }
  ];

  return (
    <div className="bg-primaryGreen xs:w-52 tablet:w-400 h-screen flex flex-col items-center py-12 rounded-e-md">
      <IoMdCloseCircleOutline
        size={35}
        className="text-white self-end mb-7 mr-5 -mt-5 close-button"
        onClick={() => setSidebar(false)}
      />
      <div className="pt-20 w-full px-10">
        {tabs?.map(({ icon, content }, index) => (
          <button
            key={index}
            className="flex items-center text-lg w-full text-white bg-secondaryGreen shadow-3xl xs:p-3 tablet:px-6 tablet:py-5 rounded-lg mb-12"
          >
            {icon}
            <span className="xs:pl-3 tablet:pl-8">{content}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
