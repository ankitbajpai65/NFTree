import React from 'react';
import {
	Typography,
    Card,
    CardContent,
    CardMedia,
} from '@mui/material';
import { styled } from '@mui/system';
import { css } from '@emotion/react';
import './About.css';

const CardMediaWrapper = styled(CardMedia)(({ theme }) => css`
  max-width: 100px
`);

export default function AboutCard(props) {
    return (
        <Card sx={{
            // border: '2px solid red',
            maxWidth: 345,
            height: '100%',
            textAlign: 'center',
            padding: '1rem',
            boxShadow: '0px 4px 12px rgba(12, 68, 204, 0.1)',
            borderRadius: '6px',
            margin: 'auto'
        }} className="aboutCard">
            {/* <CardMediaWrapper
                component="img"
                height="40"
                image={props.img}
                alt="green iguana"
                sx={{
                    // border: '2px solid red',
                    margin: 'auto',
                    mt: 2,
                    mb: 3,
                    objectFit: 'contain'
                }}
            /> */}
            <CardContent className='cardContent'>
                <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: props.desc }} />
            </CardContent>
        </Card >
    );
}