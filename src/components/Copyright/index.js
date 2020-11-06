import React from 'react';

import { Box, Typography, Link } from '@material-ui/core';
import Tempture from '../../images/Tempture.png';

const Copyright = () => {
  return (
    <Box mt={1} align="center">
      <a href="/">
        <img src={Tempture} alt="Tempture" width="200" />
      </a>
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/jadekang0611">
          Jade Kang
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Copyright;
