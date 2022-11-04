import { useState } from "react"
import styled from "styled-components"

import { Link, useLocation } from "react-router-dom"


const OptionsCont = styled.div`
    position: absolute;
    top: 3%;
    left: 4%;
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
`

const MenuCont = styled.div`

    opacity: ${(props: any) => props.open ? '1' : '0'};
    pointer-events: ${(props: any) => props.open ? 'inherit' : 'none'};

    transition: 0.3s;

    position: absolute;
    top: 18rem;
    left: -14.8rem;
    transform: rotate(-90deg);

    ul {
        list-style: none;
        display: flex;
        flex-direction: row-reverse;
    }

    a {
        margin: 0 10px 0 10px;
        color: #fff;
        text-decoration: none;
        font-size: 2.2rem;
        font-weight: 300;

        &:hover {
            color: #ffffffa5;
            transition: 0.2s;
        }
    }

    a.selectedPage {
        font-weight: 500;
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