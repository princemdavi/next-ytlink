import React, { useState } from "react";
import { Navbar, SideNav } from "../components";

const Instrument = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <div>
      <Navbar setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
      {showSideNav && <SideNav />}
      <p>instrument page</p>
    </div>
  );
};

export default Instrument;
