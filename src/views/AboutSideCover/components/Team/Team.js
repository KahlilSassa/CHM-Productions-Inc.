import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';

const mock = [
  {
    name: 'Crystal Hogue',
    title: 'CEO',
    avatar: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.18169-9/11951952_10205948931260031_6251968212727178816_n.jpg?_nc_cat=111&ccb=1-6&_nc_sid=174925&_nc_ohc=IokkowDoxskAX8AF0ix&tn=pNmi5Ypt4CZ4Wqur&_nc_ht=scontent-ort2-1.xx&oh=00_AT_-ZZs45daQ9qP8E_GhdBJH13AukBOdLurH3WeDXF9tIg&oe=62A6AFA8',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Charles Hogue',
    title: 'Advisor',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'Deborah Morgan',
    title: 'Senior Frontend Developer',
    avatar: 'https://media-exp1.licdn.com/dms/image/C4E03AQGy8Ne5x3gAsQ/profile-displayphoto-shrink_800_800/0/1549047665401?e=1657756800&v=beta&t=gitC7PFIXelcramRZglaa4Gu95qryq0nWWmcuew63Ak',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
  {
    name: 'RH Duncan Jr.',
    title: 'Board',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
    about:
      'I am an ambitious workaholic, but apart from that, pretty simple person.',
  },
];

const Team = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'text.secondary'}
          align={'center'}
        >
          Our team
        </Typography>
        <Typography fontWeight={700} variant={'h4'} align={'center'}>
          Trust the professionals
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Box
              component={Card}
              boxShadow={2}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}
            >
              <CardContent>
                <Box
                  component={Avatar}
                  src={item.avatar}
                  height={80}
                  width={80}
                />
                <Box marginTop={4}>
                  <ListItemText primary={item.name} secondary={item.title} />
                  <Typography variant={'subtitle2'} color={'text.secondary'}>
                    {item.about}
                  </Typography>
                  <Box marginTop={4}>
                    <IconButton size={'small'} color={'primary'}>
                      <FacebookIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <GitHubIcon />
                    </IconButton>
                    <IconButton size={'small'} color={'primary'}>
                      <TwitterIcon />
                    </IconButton>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
