import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./NavBar";

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
