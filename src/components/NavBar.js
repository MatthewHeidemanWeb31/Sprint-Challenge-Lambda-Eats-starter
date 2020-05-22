import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`
function NavBar(){
    return (
        <>
            <Nav>
                <li>
                    <Link to = '/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to = '/pizza'>
                        Order Now!
                    </Link>
                </li>
            </Nav>
        </>
    )
}
export default NavBar;