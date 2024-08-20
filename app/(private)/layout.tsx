"use client";

import { SWRConfig } from "swr";
import fetcher from "../util/fetcher";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SWRConfig value={{ fetcher }}>
      <div>
        <Header />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </SWRConfig>
  );
}
