import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0: 'none',
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating({handleStarScore}) {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  const starSize = 30; // Adjust the size as needed

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        marginBottom:'5%'
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
          handleStarScore(newValue)
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        icon={<StarIcon style={{ fontSize: starSize }} />} // Filled star
        emptyIcon={<StarIcon style={{ fontSize: starSize, opacity: 0.55 }} />} // Empty star
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
