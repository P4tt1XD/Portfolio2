import React from 'react';
import { ContainerMenu } from './styles';

function index() {
    return (
        <ContainerMenu>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Portfolio</a></li>
                <li><a>Contact</a></li>
            </ul>
        </ContainerMenu>
    )
}

export default index
