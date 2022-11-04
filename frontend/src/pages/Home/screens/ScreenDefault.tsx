import { useEffect, useState } from "react"
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

    const [pages, setPages] = useState([...document.getElementsByClassName('page')])

    useEffect(() => {
        setPages([...document.getElementsByClassName('page')])
    }, [])

    function isVisible(el: any) {
        const elPositions = el.getBoundingClientRect();
        const elTop = elPositions.top
        const elBottom = elPositions.bottom

        if((elTop >= 0) && (elBottom <= window.innerHeight)) {
            return true
        }else {
            return false
        }
    }

    return (
        <>
            <Test pageColor={'linear-gradient(180deg, #280000 0%, #C12A2A 66.15%);'} className="page 1">
                1
            </Test>
            <Test pageColor={'linear-gradient(180deg, #C12A2A 0%, #971F1F 51.04%, #C12A2A 100%);'} className="page 2">
                2
            </Test>
            <Test cellphone pageColor={'linear-gradient(180deg, #C12A2A 16.15%, #280000 100%);'} className="page 3">
                3
            </Test>
        </>
    )
}

export default ScreenDefault