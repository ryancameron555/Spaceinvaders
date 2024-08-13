/** @format */

import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const StartButtonStyled = styled(Button)({
  color: 'white',
  backgroundColor: 'green',
  fontSize: '1.5rem', // changed from 3vh to 1.5rem for better accessibility
  marginTop: '2rem',
  padding: '1rem',
  borderRadius: '1rem',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'green',
  },
});
