import { GetStaticProps } from "next";
import { Layout } from "@/components/layouts";
import { pokeApi } from "@/api";

export default function HomePage(props: any) {
  console.log(props);
  return (
    <>
      <Layout title="Home Page, Pokemon Api">
        <></>
      </Layout>
    </>
  );
}

// ngsp
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get("/pokemon?limit=151");
  console.log(data.results);
  return {
    props: {
      pokemons: data,
    },
  };
};
