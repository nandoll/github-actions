import React from 'react'
import { MainHeader } from '../header/MainHeader'
import { Global, css} from '@emotion/react'
import Head from 'next/head'

export const MainLayout = (props) => {
    return (
        <>
        <Global
        styles={css`
          :root{
            --gris: #ededed;
            --gris2: #efefef;
            --naranja: #da55df
          }
          html: {
            font-size: 62.5%,
            box-sizing: border-box;
          }
          *, *:before, *:after{
            box-sizing: inherit;
          }
          body:{
            font-size: 1.6rem;
          }
          a{
            text-decoration: none;            
          }
        `}
        />
        <h1>Header </h1>
        <Head>
          <html lang="es"/>
          <title>Titulo </title>
        </Head>
        <MainHeader/>
        <main>
            {props.children}
        </main>
        <p>Footer</p>
        </>
    )
}
