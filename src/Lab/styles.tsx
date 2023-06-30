import { Box, styled } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',

  '.container': {
    position: 'relative',
    width: '90%',
    maxWidth: 1024,
    margin: '0 auto',
  },

  '.header': {
    paddingTop: 16,
  },
  '.title': {
    ...theme.typography.h1,
    fontSize: 28,
  },

  '.translations-content-container': {
    paddingTop: 16,
    wordBreak: 'break-all',
  },

  '.footer': {
    margin: '32px 0 0',
    padding: '16px 0'
  },
}));
