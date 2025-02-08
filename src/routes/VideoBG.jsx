import React from 'react'
import videoBG from '../assets/bgVideo.mov'
import reactLogo from '../assets/logo.png'
import '../css/App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from '../components/NavBar'

const VideoBG = () => {
    return (
        <div className='VideoBG'>
            <div className='overlayHome'></div>
            <video className='video' src={videoBG} autoPlay loop muted />
            <div className='homePageContent'>
                <Grid templateAreas={`"nav nav" "logo logo"`}>
                    <GridItem area='nav' className='NavBar'> <NavBar /> </GridItem>
                    <GridItem area='logo' className='logo'>
                        <a target="_blank">
                            <img src={reactLogo} className="logo react" alt="React logo" />
                        </a>
                    </GridItem>
                </Grid>
            </div>
        </div>
    )
}

export default VideoBG