import { useState } from "react"
import styled from "styled-components"

import { Link, useLocation } from "react-router-dom"


const OptionsCont = styled.div`
    position: absolute;
    top: 3%;
    left: 4%;

    @media(min-width: 600px) {
        top: 50%;
        right: 5%;
        transform: translate(0, -170%);
        left: -23rem;
    }
`

const Hamburger = styled.button`
    display: flex;
    width: 3rem;
    height: 3rem;
    justify-content: space-around;
    flex-direction: column;
    border: 0;
    background: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:focus {
        outline: none;
    }

    div {
        width: 100%;
        height: 17%;
        background-color: #ffffffcb;
        border-radius: 0.5rem;
        transition: all 0.3s linear;
        position: relative;
        transform-origin: 1px;

        :first-child {
            transform: ${(props: any) => props.open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        :nth-child(2) {
            opacity: ${(props: any) => props.open ? '0' : '1'};
            transform: ${(props: any) => props.open ? 'translateX(-20px)' : 'translateX(0)'};
        }

        :nth-child(3) {
            transform: ${(props: any) => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media(min-width: 600px) {
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
    }
`

const MenuCont = styled.div`
    transition: 0.3s;

    position: absolute;
    transform: rotate(-90deg);

    ul {
        list-style: none;
        display: flex;
        flex-direction: row-reverse;
    }

    a {
        margin: 0 40px 0 40px;
        color: #ffffffd7;
        text-decoration: none;
        font-weight: 300;
        font-size: 3.2rem;

        &:hover {
            color: #ffffffa5;
            transition: 0.2s;
        }
    }

    a.selectedPage {
        font-weight: 500;
    }

    @media(max-width: 600px) {
        opacity: ${(props: any) => props.open ? '1' : '0'};
        top: 18rem;
        pointer-events: ${(props: any) => props.open ? 'inherit' : 'none'};
        left: -14.8rem;

        a {
            margin: 0 10px 0 10px;
            font-size: 2.2rem;
        }
    }
`

function SideMenu(props: any) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <OptionsCont>
            <Hamburger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div />
                <div />
                <div />
            </Hamburger>
            <MenuCont open={isOpen}>
                <ul>
                    <li>
                        <Link to={'/'} className={useLocation().pathname == '/' ? "selectedPage": ''}>
                            Home    
                        </Link>
                    </li>
                    <li>
                        <Link to={'/experiencia'} className={useLocation().pathname == '/experiencia' ? "selectedPage": ''}>
                            Experiência
                        </Link>
                    </li>
                    <li>
                        <Link to={'/contato'} className={useLocation().pathname == '/contato' ? "selectedPage": ''}>
                            Contato
                        </Link>
                    </li>
                </ul>
            </MenuCont>
        </OptionsCont>
    )
}

export default SideMenu