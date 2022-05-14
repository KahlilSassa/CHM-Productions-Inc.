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

const CaseStudy1 = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box
      padding={{ xs: 2, sm: 4 }}
      borderRadius={2}
      bgcolor={
        theme.palette.mode === 'light' ? colors.blue[50] : colors.blue[900]
      }
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
                src={'https://static.wixstatic.com/media/e68753_81acbccf8af144ce8ec8af2de309352a~mv2.jpeg/v1/fill/w_1680,h_752,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e68753_81acbccf8af144ce8ec8af2de309352a~mv2.jpeg'}
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
                Youth Development
              </Typography>
              <Typography component={'p'}>
              We provide youth training and development programs for various communities by allowing the youth to audition and participate in our community stage plays.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'h6'} fontWeight={700} gutterBottom>
                Children Summer Arts & Theater Programs
              </Typography>
              <Typography component={'p'}>
              The Kids Summer Arts & Theater Program is a great way to have your kids involved in creative art and theater projects while learning valuable life skills that can be applied anywhere.
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
              Youth Development Arts & Theater Leadership Programs.
              </Typography>
              <Typography
                color={
                  theme.palette.mode === 'light'
                    ? 'text.secondary'
                    : 'text.primary'
                }
              >
                Registration starts June 2022
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
                    'https://assets.maccarianagency.com/svg/logos/paypal-original.svg'
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

export default CaseStudy1;
