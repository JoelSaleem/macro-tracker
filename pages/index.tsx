import { ThemeProvider, createGlobalStyle } from 'styled-components'
import CoreLayout from '../components/CoreLayout'
import { useState } from 'react'
import Head from 'next/head'
import { ContrastButton } from '../components/ContrastButton'
import {appThemes} from '../themes'


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${function getTheme<ThemeMain>(props: any) {
      return props.theme.BackgroundMain
    }};
    color: ${function getTheme<ThemeMain>(props: any) {
      return props.theme.TextColour
    }};
    overflow-y: auto;
    font-family: Camphor, Open Sans, Segoe UI, sans-serif;
  }

  html {
    height: 100%;
  }
`
type useThemeReturn = [number, () => void]

const useTheme = (length: number) => {
  const [index, setIndex] = useState(0)

  const inc = () => {
    setIndex((index + 1) % length)
  }
  return [index, inc] as useThemeReturn
}

export default () => {
  const [idx, switchTheme] = useTheme(appThemes.length)
  return (
    <ThemeProvider theme={appThemes[idx]}>
      <GlobalStyle />
      <Head>
        <meta name='theme-color' content='#217bf3'></meta>
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-starturl' content='/' />
        <title>Macro Tracker</title>
        <link rel='icon' type='image/png' href='icons/icon192.png' />
        <link rel='apple-touch-icon' href='icons/icon192.png' />
      </Head>
      <CoreLayout />
      <ContrastButton onClick={switchTheme}>Theme</ContrastButton>
    </ThemeProvider>
  )
}
