import Loading from "@/components/Loading";
import Router from "next/router";
import NProgress from "nprogress";
import '@/styles/globals.css';
import "nprogress/nprogress.css";
import { useEffect, useState } from "react";
import Layout from "./../layout.js";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before showing the page
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);
  return (

    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      )}
    </div>
  )
}
