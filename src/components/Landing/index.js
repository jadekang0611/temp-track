// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Grid, Typography } from '@material-ui/core';
// import { Router, Link, Route, Switch } from 'react-router-dom';
// import * as ROUTES from '../../constants/routes';
// import Home from '../Website/Home';
// import Covid from '../Website/MiscPages/Covid';
// import Forms from '../Website/MiscPages/Forms';
// import Tempture from '../../images/Tempture.png';

// const useStyles = makeStyles((theme) => ({
//   content: {
//     backgroundColor: 'white',
//     padding: '6rem 2rem',
//     height: 'auto',
//     [theme.breakpoints.down('sm')]: {
//       padding: '4rem 1rem',
//     },
//   },
//   buttons: { marginTop: '2rem' },
//   signup: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     margin: 8,
//   },
//   login: {
//     background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     margin: 8,
//   },
//   link: {
//     textDecoration: 'none',
//   },
//   landing: {
//     margin: theme.spacing(3, 0, 2),
//     [theme.breakpoints.down('sm')]: {
//       fontSize: '20px',
//       lineHeight: '32px',
//     },
//   },
//   appName: {
//     fontFamily: 'Rubik, sans-serif',
//     color: '#f50256',
//     fontWeight: 600,
//   },
//   navigation: {
//     padding: '1rem 4rem',
//     alignItems: 'center',
//     display: 'flex',
//     justifyContent: 'space-between',
//     [theme.breakpoints.down('sm')]: {
//       justifyContent: 'center',
//       padding: '2rem 4rem',
//     },
//   },
//   navLeft: {
//     [theme.breakpoints.down('sm')]: {
//       display: 'none',
//     },
//   },
//   navRight: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//   },
//   item: {
//     marginRight: '2rem',
//     [theme.breakpoints.down('sm')]: {
//       margin: '0 20px',
//     },
//   },
//   itemContent: {
//     fontFamily: 'Rubik, sans-serif',
//     fontSize: 18,
//     fontWeight: 600,
//     color: '#757575',
//     '&:hover': {
//       color: '#f50256',
//     },
//   },
// }));

// const Landing = () => {
//   const classes = useStyles();
//   return (
//     <Router>
//       <header>
//         <nav>
//           <Grid container className={classes.navigation}>
//             <div className={classes.navLeft}>
//               <Grid item>
//                 <img src={Tempture} alt="logo" width="300" />
//               </Grid>
//             </div>
//             <div className={classes.navRight}>
//               <Grid item className={classes.item}>
//                 <Link to={ROUTES.COVID} className={classes.link}>
//                   <Typography className={classes.itemContent}>
//                     COVID 19
//                   </Typography>
//                 </Link>
//               </Grid>
//               <Grid item className={classes.item}>
//                 <Link to={ROUTES.NEWS} className={classes.link}>
//                   <Typography className={classes.itemContent}>News</Typography>
//                 </Link>
//               </Grid>
//               <Grid item className={classes.item}>
//                 <Link to={ROUTES.FORMS} className={classes.link}>
//                   <Typography className={classes.itemContent}>Forms</Typography>
//                 </Link>
//               </Grid>
//             </div>
//           </Grid>
//         </nav>
//       </header>

//       <Switch>
//         <Route path={ROUTES.HOME} component={Home} />
//         <Route path={ROUTES.COVID} component={Covid} />
//         <Route path={ROUTES.FORMS} component={Forms} />
//       </Switch>
//     </Router>
//   );
// };

// export default Landing;
