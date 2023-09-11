import Head from "next/head";
import { FC, ReactNode } from "react";
import { NavBar } from "../ui";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "PokemonApi"}</title>
        <meta
          name="author"
          content="Fernando Berrio"
        ></meta>
        <meta
          name="description"
          content={`Informacion sobre algun pokemon ${title}`}
        ></meta>
        <meta
          name="keywords"
          content={`${title}, pokemon, pokedex`}
        ></meta>
      </Head>
      <NavBar />

      <main style={{ padding: "0x 10px" }}>{children}</main>
    </>
  );
};
