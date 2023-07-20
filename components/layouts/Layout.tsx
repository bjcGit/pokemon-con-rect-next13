import Head from "next/head"
import { FC } from "react";
import { Navbar } from "../ui";
import { MyObjectType } from '../../interfaces/typeChildren';


export const Layout: FC<MyObjectType> = ({children, titulo}) => {
    const defaultTitle = 'pokemon app';
    const title = titulo || defaultTitle;
  return (
    <>
        <Head>
            <meta name="author" content="Bryan Jc"/>
            <meta name="description" content="info del pokemon"/>
            <meta name="keywords" content="XXXX, pokemon, pokedex"/>
            <title> Pokemon App </title>
            
        </Head>

        <Navbar/>

        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}

