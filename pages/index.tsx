import { ThemeProvider } from 'styled-components'
import CoreLayout from '../components/CoreLayout'
import { useEffect } from 'react'
import Head from 'next/head'

const ThemeMain = {
  BackgroundMain: '#1e1e1e',
  BackgroundAccent: '#303030',
  TextColour: '',
  ForegroundColour: '#217bf3',
  ForegroundAccent1: '#388dff',
  ForegroundAccent2: '#5ea3ff'
}

export default () => {
  return (
    <ThemeProvider theme={ThemeMain}>
      <Head>
        <meta name='theme-color' content='#217bf3'></meta>
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-starturl' content='/' />
        <title>Macro Tracker</title>
        <link rel='icon' type='image/png' href='icons/icon192.png' />
        <link rel='apple-touch-icon' href='icons/icon192.png' />
      </Head>
      <CoreLayout />
      <style jsx global>{`
        body {
          background-color: #1e1e1e;
          color: white;
          overflow-y: auto;
          font-family: Camphor, Open Sans, Segoe UI, sans-serif;
        }

        html {
          height: 100%;
        }
      `}</style>
    </ThemeProvider>
  )
}
