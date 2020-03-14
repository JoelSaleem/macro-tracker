import { ThemeProvider, createGlobalStyle } from 'styled-components'
import CoreLayout from '../components/CoreLayout'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { ContrastButton } from '../components/ContrastButton'

const ThemeMain = {
  BackgroundMain: '#1e1e1e',
  BackgroundAccent: '#303030',
  TextColour: 'white',
  ForegroundColour: '#217bf3',
  ForegroundAccent1: '#388dff',
  ForegroundAccent2: '#5ea3ff'
}

const LightTheme = {
  BackgroundMain: '#217bf3',
  BackgroundAccent: '#e4e4e4',
  TextColour: 'black',
  ForegroundColour: '#1155b0',
  ForegroundAccent1: '#e4e4e4',
  ForegroundAccent2: '#5ea3ff'
}

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
  const themes = [ThemeMain, LightTheme]
  const [idx, switchTheme] = useTheme(themes.length)
  return (
    <ThemeProvider theme={themes[idx]}>
      <Head>
        <meta name='theme-color' content='#217bf3'></meta>
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-starturl' content='/' />
        <title>Macro Tracker</title>
        <link rel='icon' type='image/png' href='icons/icon192.png' />
        <link rel='apple-touch-icon' href='icons/icon192.png' />
      </Head>
      <GlobalStyle />
      <ContrastButton onClick={switchTheme}>Theme</ContrastButton>
      <CoreLayout />
    </ThemeProvider>
  )
}
