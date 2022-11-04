import styled from "styled-components"

const Test = styled.div`
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

function ScreenDefault(props: any) {
    return (
        <>
            <Test pageColor={'linear-gradient(180deg, #280000 0%, #C12A2A 66.15%);'} className="page">
                1
            </Test>
            <Test cellphone pageColor={'linear-gradient(180deg, #C12A2A 16.15%, #280000 100%);'} className="page">
                2
            </Test>
        </>
    )
}

export default ScreenDefault