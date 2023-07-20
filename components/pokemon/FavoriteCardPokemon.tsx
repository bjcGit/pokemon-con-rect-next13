import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {
    pokemonId: number
}

export const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {

    const router = useRouter()
    const back = () => {
        router.push(`/pokemon/${pokemonId}`)
    }
    return (
        <Grid xs={6} sm={2} xl={1} key={pokemonId}  onClick={back}>
            <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    width={'100%'}
                    height={120}
                />
            </Card>
        </Grid>
    )
}
