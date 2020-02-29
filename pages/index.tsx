import styled from 'styled-components'
import CoreLayout from '../components/CoreLayout'

export default () => {
  return (
    <>
      <CoreLayout />
      <style jsx global>{`
        body {
          background-color: #1e1e1e;
          color: white;
          height: 100%;
          overflow: hidden;
        }

        html {
          height: 100%;
        }
      `}</style>
    </>
  )
}
