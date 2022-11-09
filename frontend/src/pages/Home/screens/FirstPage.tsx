import styled from "styled-components"

import profifeImg from '../../../../public/profileImg.png'

const StyledContainer = styled.div`
    font-size: 2.2rem;
    display: flex;
    flex: 1;
    max-width: 90%;
    flex-direction: column;
    color: #ffffffe2;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;

    img {
        width: 100%;
        padding-bottom: 2rem;
        z-index: 0;
    }

    h2 {
        font-weight: 300;
        font-size: 3rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0;

        div.red-line {
            height: 3px;
            flex: 1;
            margin-left: 10px;
            background-color: #C22B2B;
        }

    }

    div.slogan {
        h2.slogan {
            display: inline;
        }
        h2.red-word {
            text-shadow: 0px 1px 10px rgba(232, 16, 16, 0.36);
            color: #A10000;
            display: inline;
        }
    }
    

    h1 {
        padding: 0;
        width: 100%;
        font-size: 6rem;
        margin: 0;
    }

    @media(min-width: 450px) {
        max-width: 80%;

        img {
            width: 80%;
        }
    }

    @media(max-width: 344px) {
        h1 {
            font-size: 5rem;
        }
    }

    @media(min-width: 600px) {
        max-width: 60%;
        padding-left: 2rem;
        img {
            width: 100%;
        }
    }

    @media(min-width: 920px) {
        flex-direction: row-reverse;
        max-width: 100%;
        padding: 0 0 0 13rem;
        height: 100%;
        position: relative;
        justify-content: flex-end;
        img {
            padding: 0;
            position: absolute;
            width: 50%;
            right: 0;
            bottom: -1rem;
        }

        div {
            max-width: 60%;
        }

        h2 {
            font-size: 4.2rem;
        }

        h1 {
            font-size: 9rem;
        }
    }

    @media(min-width: 1350px) {
        padding-left: 18rem;
        h2 {
            font-size: 4.5rem;
        }

        h1 {
            font-size: 12rem;
        }
    }

    @media(min-width: 1750px) {
        h1 {
            font-size: 16rem;
        }

        h2 {
            font-size: 6rem;
        }
    }

`

function FirstPage(props: any) {
    return (
        <StyledContainer>
            <img src={profifeImg} alt="" />
            <div>
                <h2>Olá, eu sou o <div className="red-line"></div></h2>
                <h1>Higor Feijó</h1>
                <div className="slogan">
                    <h2 className="slogan">Pensar, projetar, desenvolver e</h2><h2 className="red-word"> fazer dar certo.</h2> 
                </div>
            </div>
        </StyledContainer>
    )
}

export default FirstPage