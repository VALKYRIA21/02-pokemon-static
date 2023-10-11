import { SmallPokemon } from "@/interface";
import { Image, Card, CardBody, CardFooter } from "@nextui-org/react";
import { FC } from "react";

interface PokemonCardComponentProps {
  pokemons: SmallPokemon;
}

export const PokemonCardComponent: FC<PokemonCardComponentProps> = ({
  pokemons,
}) => {
  return (
    <Card
      shadow="sm"
      isPressable
      isFooterBlurred
    >
      <CardBody className="overflow-visible p-0">
        <Image
          isZoomed
          width="100%"
          height={140}
          alt=""
          src={pokemons.img}
          className="justify-center bg-white"
        />
      </CardBody>
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-danger/80 capitalize text-lg">{pokemons.name}</p>
      </CardFooter>
    </Card>
  );
};
