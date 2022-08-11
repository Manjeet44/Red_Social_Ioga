import React from 'react';
import { Container, Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/energy-masters.png'
import Search from './Search/Search';
import MenuEnergy from '../Menu/MenuEnergy';
import RightHeader from './RightHeader/RightHeader';
import './Header.scss';

//TODO: Search

export default function Header() {
  return (
    <header className='header'>
        <Container>
            <Grid>
                <Grid.Column width={3} className='header__logo'>
                    <Link to='/'>
                        <Image src={Logo} alt='energymasters' className='logo' />
                    </Link>
                </Grid.Column>
                
                <Grid.Column width={6}>
                    <MenuEnergy />
                </Grid.Column>
                <Grid.Column width={4}>
                    <Search/>
                </Grid.Column>

                <Grid.Column width={3}>
                    <RightHeader/>
                </Grid.Column>
            </Grid>
        </Container>
    </header>
  )
}
