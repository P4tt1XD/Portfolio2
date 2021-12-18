import React from 'react';
import Menu from '../menu/index';
import Banner from './banner/index';
import { HeaderContainer, Container } from './styles';

export default function Header() {
    return (
        <>
        <HeaderContainer>
            <Container>
        <div>
            Logo
        </div>
        <div>
           <Menu/>
        </div>
        </Container>
    </HeaderContainer>
    <Banner/>
    </>
    )
}

