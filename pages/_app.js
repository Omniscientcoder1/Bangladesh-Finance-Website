import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "../styles/globals.scss"; // SCSS styles
import "../styles/tailwind.css"; // Tailwind CSS styles
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout";
import VisitorCount from "../components/VisitorCount"; // Import the VisitorCount component

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // Bootstrap JS for functionality like dropdowns
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // Conditional Layout Rendering
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Head>
          <title>Bangladesh Finance Limited</title>
          <meta
            name="description"
            content="Official Website of Bangladesh Finance"
          />
          <link rel="icon" href="favicon.ico" />
        </Head>
        <VisitorCount /> {/* Always include VisitorCount */}
        <Component {...pageProps} />
      </>
    );
  }

  // Default Layout Rendering
  return (
    <>
      <Head>
        <title>Bangladesh Finance Website</title>
        <meta
          name="description"
          content="Official Website of Bangladesh Finance."
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
        <VisitorCount /> {/* Include VisitorCount inside the Layout */}
      </Layout>
    </>
  );
}
