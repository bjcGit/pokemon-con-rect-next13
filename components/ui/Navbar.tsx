import NextLink from 'next/link';
import { Spacer, Text, useTheme, Link } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
  const { theme } = useTheme()
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 15px',
      backgroundColor: theme?.colors.gray200.value
    }}>

      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
        alt='icono de la app'
        width={70}
        height={70}
      />

      <NextLink href="/" passHref>
        <Text color='white' h2>Pokémon</Text>
      </NextLink>

      <Spacer x={1} css={{ flex: 1 }} />
      <NextLink href="/favorites">
        <Text color='white' >Favoritos</Text>
      </NextLink>
    </div>
  )
}
