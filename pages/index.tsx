import { FC } from "react";
import { GetStaticProps } from "next";
import { Layout } from "@/components/layouts";
import { PokemonCardComponent } from "@/components/pokemon";
import { pokeApi } from "@/api";
import { PokemonListResponse } from "@/interface";
import { SmallPokemon } from "../interface/pokemon-list";

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: FC<Props> = ({ pokemons }) => {
  return (
    <>
      <Layout title="Home Page, Pokemon Api">
        <div className=" container gap-2 grid grid-cols-1 xs:grid-cols-6 sm:grid-cols-3 md:grid-cols-4 pt-2">
          {pokemons.map((pokemon) => (
            <PokemonCardComponent
              key={pokemon.id}
              pokemons={pokemon}
            />
            // <li key={id}>
            //   #{id}-{name}
            // </li>
          ))}
        </div>
      </Layout>
    </>
  );
};

// ngsp
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));
  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
