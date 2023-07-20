import React, { useEffect, useState } from 'react'

import { Layout } from '@/components/layouts'
import NoFavorites from '@/components/ui/NoFavorites'
import { localFavorites } from '@/utils'
import { FavoritePokemon } from '@/components/pokemon'

const Favoritos = () => {

  const [favoritePokemon, setFavoritePokemon] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemon(localFavorites.pokemons)
  }, [])

  return (
    <Layout>

      {
        favoritePokemon.length === 0
          ? (<NoFavorites />)
          : (<FavoritePokemon pokemons={favoritePokemon} />)
      }



    </Layout>
  )
}

export default Favoritos