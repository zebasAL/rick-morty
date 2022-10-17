import Head from "next/head";
import Footer from "@navigation/Footer";
import Navbar from "@navigation/NavBar";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <div className="layout-container">
      <Head>
        <title>{title}</title>
        <meta name="Description" content={description} />
        <meta name="color-scheme" content="dark light" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Home | Rick and Morty API",
  description: "This is the about description",
};
