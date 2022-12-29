import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { Footer, Navbar, SideNav } from "../components";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [showSideNav, setShowSideNav] = useState(false);

  const router = useRouter();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        key={router.route}
      >
        <ThemeProvider>
          <Navbar setShowSideNav={setShowSideNav} showSideNav={showSideNav} />
          {showSideNav && <SideNav />}
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
