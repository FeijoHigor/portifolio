import styled from "styled-components"

const ScreenPart = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  background: ${(props: any) => props.pageColor};
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props: any) => (props.cellphone ? `
        @media(min-width: 600px) {
            display: none;
        }
    ` : ``)}

    button {
      width: 30rem;
      height: 4rem;
      font-size: 3rem;
    }
`

export default ScreenPart