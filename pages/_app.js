// import "bootstrap/dist/css/bootstrap.min.css";
// import Head from "next/head";
// import { useEffect } from "react";
// import Layout from "../components/layout";
// import "../styles/globals.scss";
// import "public/scss/main/tailwindcss/global.css";

// export default function App({ Component, pageProps }) {
//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);

//   if (Component.getLayout) {
//     return Component.getLayout(
//       <>
//         <Head>
//           <title>Bangladesh Finance Limited</title>
//           <meta name="description" content="Created by Tahmidur Rahman, IT dept" />
//           <link rel="icon" href="favicon.ico" />
//         </Head>
//         <Component {...pageProps} />
//       </>
//     );
//   }

//   return (
//     <>
//       <Head>
//         <title>Bangladesh Finance Website</title>
//         <meta name="description" content="Created by Tahmidur Rahman, IT dept." />
//         <link rel="icon" href="favicon.ico" />
//       </Head>
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </>
//   );
// }

import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import "../styles/globals.scss"; // SCSS styles
import "../styles/tailwind.css"; // Tailwind CSS styles
import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/layout";

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
            content="Created by Tahmidur Rahman, IT dept"
          />
          <link rel="icon" href="favicon.ico" />
        </Head>
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
          content="Created by Tahmidur Rahman, IT dept."
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
