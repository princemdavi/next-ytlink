import React, { useState } from "react";
import { Navbar, SideNav } from "../components";

const HowToUse = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <div>
      <Navbar setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
      {showSideNav && <SideNav />}
      <p>how to use</p>
    </div>
  );
};

export default HowToUse;
