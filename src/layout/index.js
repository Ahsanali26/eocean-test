import React, { useState } from "react";
import { Portal } from "../pages";
import { Header, Sidebar } from "../components";

const Layout = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="flex xs:flex-col desktopMini:flex-row h-screen">
      <div className={`${sidebar ? "open" : null} sidebar`}>
        <Sidebar setSidebar={setSidebar} />
      </div>
      <main className="flex flex-1 flex-col overflow-x-auto">
        <Header setSidebar={setSidebar}>Invoice Management System</Header>
        <Portal />
      </main>
    </div>
  );
};

export default Layout;
