import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Head from 'next/head'

import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: ${({ theme }) => db.theme.colors.blazer};
  }
`

const theme = db.theme


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Psi - Aflane Negrão</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
