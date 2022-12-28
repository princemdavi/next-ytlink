import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { Footer, Navbar, SideNav } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <ThemeProvider>
      <Navbar setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
      {showSideNav && <SideNav />}
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
