import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import DistancingPDF from './Posters/distancing.pdf';
import SanitizerPDF from './Posters/sanitizer.pdf';
import HowToUsePDF from './Posters/howToUse.pdf';
import UseMaskPDF from './Posters/useMask.pdf';

//Preview
import distancingImg from '../../../images/distancing.png';
import santizerImg from '../../../images/sanitizer.png';
import useMaskImg from '../../../images/useMask.png';
import howToUseImg from '../../../images/howToUse.png';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },

  link: {
    fontFamily: 'Noto Sans KR, sans-serif',
    textDecoration: 'none',
    color: '#f50256',
  },
  cardText: {
    fontFamily: 'Noto Sans KR, sans-serif',
  },
  mainText: {
    fontFamily: 'Noto Sans KR, sans-serif',
    fontWeight: 500,
  },
  subText: {
    fontFamily: 'Noto Sans KR, sans-serif',
    fontWeight: 500,
  },
}));

const cards = [
  {
    poster: `${distancingImg}`,
    link: `${DistancingPDF}`,
    title: '슬기로운 거리두기',
    description: '코로나19시대에 거리두기는 우리를 더 강하게 만듭니다.',
  },
  {
    poster: `${howToUseImg}`,
    link: `${HowToUsePDF}`,
    title: '올바른 마스크 스타일',
    description: '올바른 마스크 사용방법으로 모두 건강하게 지내요.',
  },
  {
    poster: `${santizerImg}`,
    link: `${SanitizerPDF}`,
    title: '소독제 사용',
    description: '입장 전 꼭 손 소독제를 사용해 주세요.',
  },
  {
    poster: `${useMaskImg}`,
    link: `${UseMaskPDF}`,
    title: '마스크 사용',
    description: '마스크를 쓴 당신 더 멋있습니다.',
  },
];

const Forms = () => {
  const classes = useStyles();
  document.title = 'Tempture | Forms';
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
              코로나19관련 콘텐츠
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
              className={classes.subText}
            >
              Tempture에서 매장 손소독제 사용안내문, 마스크 착용 권고 안내문 등
              코로나19 관련 콘텐츠를 모두 무료로 다운받으세요. 함께 이겨내고
              우리 함께 웃어요!
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.poster}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.cardText}
                    >
                      {card.title}
                    </Typography>
                    <Typography className={classes.cardText}>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button className={classes.download} color="secondary">
                      <a href={card.link} download className={classes.link}>
                        다운받기
                      </a>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};
export default Forms;
