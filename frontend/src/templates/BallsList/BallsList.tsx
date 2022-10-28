import styled from 'styled-components'

const BallsCont = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    transition: 0.2s;

    @media(min-width: 600px) {
        bottom: 50%;
        right: 5%;
        transform: translate(0, 50%);
        transition: 0.2s;
    }
`

const Ball = styled.li`
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    margin: 1rem;

    @media(min-width: 600px) {
        width: 2.2rem;
        height: 2.2rem;
    }

    ${(props: any) => (props.cellphone ? `
        @media(min-width: 600px) {
            display: none;
        }
    ` : ``)}

    ${(props: any) => (
        props.selected ? `
            background: #FFC7C7;
            box-shadow: 0px 0px 20px #FFFFFF;
        ` : `
            background: rgba(255, 199, 199, 0.65);
            box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.25);
            &:hover {
                background: #FFC7C7;
                box-shadow: 0px 0px 20px #FFFFFF;
            }
        `
    )}
`

function BallsList(props: any) {

    const clickHandle = (wicthPage: number) => {
        const pages = [...document.getElementsByClassName('page')]
        pages[wicthPage - 1].scrollIntoView({behavior: 'smooth'})
    }

    return (
        <BallsCont>
            <Ball onClick={() => clickHandle(1)} />
            <Ball onClick={() => clickHandle(2)} />
            <Ball onClick={() => clickHandle(3)} cellphone />
        </BallsCont>
    )
}

export default BallsList