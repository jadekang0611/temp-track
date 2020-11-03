import React from 'react';

import { Box, Typography, Link } from '@material-ui/core';

const Copyright = () => {
  return (
    <Box mt={5} align="center">
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
