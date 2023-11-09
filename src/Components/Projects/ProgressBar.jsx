import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
  return (

    <Box
      sx={{
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        gap: '10px',
      }}>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" sx={{height:7}} {...props} />
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function ProgressBar({ progress }) {
  // const [progress, setProgress] = React.useState(10);

  return (
    <Tooltip title={progress}>
      <Box sx={{ width: '100%' }}>
        {
          progress === "10/100" ?
            <LinearProgressWithLabel value="10" />
            :
            <LinearProgressWithLabel value="100" />
        }
      </Box>
    </Tooltip>
  );
}