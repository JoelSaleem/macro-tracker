import styled from 'styled-components'
import CoreLayout from '../components/CoreLayout'

export default () => {
  return (
    <>
      <meta name='theme-color' content='#ff2200'></meta>
      <CoreLayout />
      <style jsx global>{`
        body {
          background-color: #1e1e1e;
          color: white;
          height: 100%;
          overflow: hidden;
          font-family: Camphor, Open Sans, Segoe UI, sans-serif;
        }

        html {
          height: 100%;
        }
      `}</style>
    </>
  )
}
