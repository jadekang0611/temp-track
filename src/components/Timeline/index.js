import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddLocationRoundedIcon from '@material-ui/icons/AddLocationRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import ScatterPlotRoundedIcon from '@material-ui/icons/ScatterPlotRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PublicRoundedIcon from '@material-ui/icons/PublicRounded';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  yellow: {
    backgroundColor: '#f1d302',
  },
}));

export default function CovidTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            December 31, 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
            <AddLocationRoundedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              코로나의 첫 출현
            </Typography>
            <Typography>
              중화 인민 공화국 WHO 국가 사무소는 중국 우한에서 발생한 '바이러스
              성 폐렴'사례에 대한 웹 사이트에서 우한시 보건위원회의 언론 성명을
              수집
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            January 9, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.yellow}>
            <MessageRoundedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              WHO's 첫 공식 발표
            </Typography>
            <Typography>
              WHO에서는 중국 당국이 최초로 알려진 발병은 신종 코로나 바이러스에
              의해 발생했음을 알림.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            January 21, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <ScatterPlotRoundedIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              코로나의 전염성 확증
            </Typography>
            <Typography>
              WHO와WPRO는 공식 트위터계정에 적어도 어느정도의 사람들사이의
              전염이 명백히 일어났음을 발표함.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            March 16, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SecurityRoundedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              글로벌 코로나사태 대응 협력구축
            </Typography>
            <Typography>
              WHO는 모든 국가를위한 도구로 COVID-19 파트너 플랫폼을 출시하여
              파트너, 기부자 및 기여자를 구현하여 글로벌 COVID-19 대응에
              협력시작.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            May 27, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.yellow}>
            <MonetizationOnRoundedIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              WHO 재단 설립
            </Typography>
            <Typography>
              WHO를 포함 신뢰할 수있는 파트너에게 자금을 제공하여 전 세계 공중
              보건 요구를 지원할 목적으로 WHO 재단이 설립됨.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            August 5, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <FavoriteRoundedIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              #WearAMask Challenge
            </Typography>
            <Typography>
              WHO 사무 총장은 COVID-19로부터 보호하기 위해 마스크를 사용하는
              방법과 적합한 상황을 대중에게 알리기 위해 소셜 미디어에서
              #WearAMask 챌린지를 시작.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            November 6, 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot className={classes.yellow}>
            <PublicRoundedIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Present | 현재 상황
            </Typography>
            <Typography>
              전 세계적으로 4,830 만 건의 사례와 3,200 만 명의 회복 된 환자가
              있음. 질병이 시작된 이래 123만 명이 목숨을 잃음.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
