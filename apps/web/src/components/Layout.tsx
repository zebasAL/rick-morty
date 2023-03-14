import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./NavBar";
import styles from "../styles/app.module.sass";
import { use } from "chai";
import { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="Description" content={description} />
        <meta name="color-scheme" content="dark light" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "Home | Rick and Morty API",
  description: "This is the about description",
};