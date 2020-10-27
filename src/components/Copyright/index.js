import React from 'react';

import { Box, Typography, Link } from '@material-ui/core';

const Copyright = () => {
  return (
    <Box mt={5} align="center">
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://google.com/">
          TempTrek
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Box>
  );
};

export default Copyright;
