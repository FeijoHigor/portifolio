import styled from "styled-components"

import BallsList from "../../templates/BallsList/BallsList"

const StyledContainer = styled.div`
    background: radial-gradient(63.08% 45.85% at 50% 50%, #B02525 0%, #671313 38.76%, #1A0000 96.88%);
    height: 100%;
    width: 100%;

    overflow-y: hidden;
    overflow: auto;
    scroll-snap-type: x mandatory;  
    display: flex;

`

const StyledTest = styled.div`
    flex: none;
    width: 100vw;
    height: 100%;
    scroll-snap-align: start;
    font-size: 5rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Experience() {
    return (
        <>
            <BallsList page={'experience'} />
            <StyledContainer>
                <StyledTest className="page">
                    Page 1
                </StyledTest>
                <StyledTest className="page">
                    Page 2
                </StyledTest>
                <StyledTest className="page">
                    Page 3
                </StyledTest>
            </StyledContainer>
        </>
    )
}

export default Experience