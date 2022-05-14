/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const Map = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box>
        <Box marginBottom={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Get in touch
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={'text.secondary'}>
            We'd love to hear from you.
          </Typography>
        </Box>
      </Box>
      <Box marginY={3}>
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.438543327472!2d-88.21035348433483!3d40.1102293794019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd70ac83f3633%3A0xf9954412e8105fbe!2sUrbana%20First%20United%20Methodist%20Church!5e0!3m2!1sen!2sus!4v1652545924126!5m2!1sen!2sus"
          style={{
            minHeight: 300,
            borderRadius: 8,
            filter:
              theme.palette.mode === 'dark'
                ? 'grayscale(0.5) opacity(0.7)'
                : 'none',
          }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Call us:
          </Typography>
          <Typography variant={'subtitle1'}>+1 217 407 3022</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Email us:
          </Typography>
          <Typography variant={'subtitle1'}>chmbibletheater@outlook.com</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Address:
          </Typography>
          <Typography variant={'subtitle1'}>
            304 S. Race St. Urbana, IL 
            <br/>
            United Methodist Church
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Map;


