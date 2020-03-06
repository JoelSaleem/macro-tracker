import { ThemeProvider } from 'styled-components'
import CoreLayout from '../components/CoreLayout'

const ThemeMain = {
  BackgroundMain: '',
  BackgroundAccent: '',
  TextColour: '',
  ForegroundColour: '#217bf3',
  ForegroundAccent1: '#388dff',
  ForegroundAccent2: '#5ea3ff'
}

export default () => {
  return (
    <ThemeProvider theme={ThemeMain}>
      <>
        <meta name='theme-color' content='#217bf3'></meta>
        <title>Macro Tracker</title>
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
      </>
    </ThemeProvider>
  )
}
