import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (
    <Tooltip title="10/100">
      <Box
        sx={{
          display: 'flex',
          flexDirection: "column",
          alignItems: 'center',
          gap: '10px',
          my: 5
        }}>
        <Typography sx={{ mr: 'auto' }}>No of plants plant</Typography>
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
      </Box>
    </Tooltip>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function ProgressBar() {
  const [progress, setProgress] = React.useState(10);

  return (
    <Box sx={{ width: '45%' }}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}