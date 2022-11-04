import styled from "styled-components"

import BallsList from "../../templates/BallsList/BallsList"
import ScreenDefault from "./screens/ScreenDefault"

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: none;
  overflow-x: hidden;
  overflow: auto;
  scroll-snap-type: y mandatory;
`

function Main() {



  return (
    <Container>
      <BallsList />
      <ScreenDefault />
    </Container>
  )
}

export default Main
 