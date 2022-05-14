/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

const CaseStudy3 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      bgcolor={theme.palette.mode === 'light' ? colors.amber[50] : '#DEB22F'}
      data-aos={'fade-up'}
    >
      <Grid
        container
        spacing={isMd ? 4 : 2}
        flexDirection={{ xs: 'column-reverse', md: 'row' }}
      >
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2}>
            <Grid
              item
              xs={12}
              sx={{
                '& .lazy-load-image-background.lazy-load-image-loaded': {
                  width: '100%',
                  height: '100%',
                },
              }}
            >
              <Box
                component={LazyLoadImage}
                height={1}
                width={1}
                src={
                  'https://static.wixstatic.com/media/e68753_a977b389048e44e4959ba38ae77d96c7~mv2.jpg/v1/fill/w_1680,h_752,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/e68753_a977b389048e44e4959ba38ae77d96c7~mv2.jpg'
                }
                alt="..."
                effect="blur"
                borderRadius={2}
                maxWidth={1}
                maxHeight={400}
                sx={{
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Auditions
              </Typography>
              <Typography component={'p'}>
                Auditions have opened for our virtual plays, dinner theater and
                Fall production. If interested in auditioning, please click on
                the audition button and complete the form. Please bring the form
                with bio and headshot to the audition or you can email it.
                Audition forms will also be available at the auditions for
                walk-ins.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Rehersals
              </Typography>
              <Typography component={'p'}>
              For our large stage play productions, most rehearsals run weekly between 4-5 months prior to the production date. 
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            justifyContent={{ xs: 'flex-start', md: 'space-between' }}
            height={1}
          >
            <Box>
              <Typography variant={'h4'} fontWeight={700} gutterBottom>
                Get Involved
              </Typography>
              <Typography
                color={
                  theme.palette.mode === 'light'
                    ? 'text.secondary'
                    : 'text.primary'
                }
              >
                If you are interested in auditioning please contact us for more
                details about open auditions. We are always looking for new
                people.
              </Typography>
            </Box>
            <Box
              component={Card}
              marginTop={{ xs: 2, md: 0 }}
              boxShadow={0}
              borderRadius={2}
            >
              <CardContent sx={{ padding: { xs: 2, sm: 4 } }}>
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={
                    'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg'
                  }
                  alt="..."
                  maxWidth={80}
                  marginBottom={2}
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0.7)'
                        : 'none',
                  }}
                />
                <Typography component={'p'}>
                  First class templates. These guys know what they're doing:
                  great code quality, clear naming conventions and clear code
                  structure. Plain awesome and a pleasure to work with.
                </Typography>
                <Box marginTop={{ xs: 2, sm: 4 }}>
                  <Typography variant={'subtitle1'} sx={{ fontWeight: 700 }}>
                    Jhon Anderson
                  </Typography>
                  <Typography color="text.secondary">MUI lover</Typography>
                </Box>
              </CardContent>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaseStudy3;
