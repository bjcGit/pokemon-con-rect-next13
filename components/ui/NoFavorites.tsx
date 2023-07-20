import { Container, Text, Image } from "@nextui-org/react";


export default function NoFavorites() {
  return (
    <Container css={{
        display:'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
      }}>

        <Text h4>No hay favoritos.</Text>

        <Image
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/91.svg'
          width={250}
          height={250}
          alt='poke'
          css={{
            opacity:0.4
          }}
        />

      </Container>
  )
}
