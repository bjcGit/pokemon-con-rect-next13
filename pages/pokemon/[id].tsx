import { useState } from 'react';

import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Image from 'next/image';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti'

import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts'
import { Pokemon } from '@/interfaces';
import { getPokemonInfo, localFavorites } from '@/utils';


interface Props {
  pokemon: Pokemon
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorites, setIsInFavorites] = useState(localFavorites.existInFavorites(pokemon.id))

  const onTogglefavorite = () => {
    var end = Date.now() + (15 * 200);
    var colors = ['#bb0000', '#ffffff'];
    localFavorites.togglefavorite(pokemon.id);
    setIsInFavorites(!isInFavorites)

    if (isInFavorites) return
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

  return (
    <Layout>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable isPressable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image'}
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>

              <Text h3 transform='capitalize'> {pokemon.name} </Text>

              <Button
                shadow
                color="gradient"
                ghost={!isInFavorites}
                onPress={onTogglefavorite}
              >
                {isInFavorites ? 'En favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={30}>Evoluciones:</Text>
              <Container direction='row' display='flex' gap={1} css={{ display: 'flex', justifyContent: 'space-between' }}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>

          </Card>
        </Grid>

      </Grid.Container>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    // paths: [
    //   {
    //     params: { id:'1' }
    //   },
    //   {
    //     params: { id:'2' }
    //   },
    //   {
    //     params: { id:'3' }
    //   },
    //   {
    //     params: { id:'4' }
    //   },
    // ],
    paths: pokemon151.map(id => ({
      params: { id }
    })),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string }

  return {
    props: {
      pokemon: await getPokemonInfo(id)
    }
  }
}




export default PokemonPage