import styled from "styled-components"

import BallsList from "../../templates/BallsList/BallsList"

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: none;
  overflow-x: hidden;
  overflow: auto;
  scroll-snap-type: y mandatory;
`

const Test = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  background: ${(props: any) => props.pageColor};

  ${(props: any) => (props.cellphone ? `
        @media(min-width: 600px) {
            display: none;
        }
    ` : ``)}
`

function Main() {

  return (
    <Container>
      <BallsList />
      <Test pageColor={'linear-gradient(180deg, #280000 0%, #C12A2A 66.15%);'} className="page">1</Test>
      <Test pageColor={'linear-gradient(180deg, #C12A2A 0%, #971F1F 51.04%, #C12A2A 100%);;'} className="page">2</Test>
      <Test cellphone pageColor={'linear-gradient(180deg, #C12A2A 16.15%, #280000 100%);'} className="page">3</Test>
    </Container>
  )
}

export default Main
 