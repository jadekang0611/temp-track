import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import CovidTimeline from '../../Timeline';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },

  timeline: {
    margin: '2rem 0',
  },
  mainText: {
    fontFamily: 'Noto Sans KR, sans-serif',
    fontWeight: 500,
  },
  subText: {
    fontFamily: 'Noto Sans KR, sans-serif',
    fontWeight: 500,
    lineHeight: 1.5,
  },
}));

const Forms = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              className={classes.mainText}
            >
              코로나19 (COVID19)
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              className={classes.subText}
            >
              2019년 겨울에 시작해 지금은 전 세계를 강타한 코로나19. 정확한
              정보와 현재 국제 상황을 이해하여 함께 코로나19에 대한 두려움을
              최소화 해봐요!
            </Typography>
          </Container>
        </div>
        <div className={classes.timeline}>
          <CovidTimeline />
        </div>
      </main>
    </React.Fragment>
  );
};
export default Forms;
