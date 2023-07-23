import "@/styles/globals.css";
export const URL = "http://backend.link2down.com";
import { Analytics } from "@vercel/analytics/react";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Analytics />
    </>
  );
}
