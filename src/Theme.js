import color from '@edma/design-tokens/js/color';
import fontSize from '@edma/design-tokens/js/fontSize';
import font from '@edma/design-tokens/js/font';
import weight from '@edma/design-tokens/js/weight';
import spacing from '@edma/design-tokens/js/spacing';

const Kirby = {
  typography: {
    body1: {
      fontFamily: font.body,
      maxWidth: 600
    },
    body2: {
      fontFamily: font.body
    },
    h1: {
      fontFamily: font.heading,
      fontSize: fontSize['h1'],
      fontWeight: weight['bold'],
      '&:after': {
        content: '',
        background: color.y400,
        position: 'relative',
        display: 'block',
        marginBottom: spacing['2'],
        width: 64,
        height: 8
      }
    },
    h2: {
      fontFamily: font.heading,
      fontSize: fontSize['h2'],
      fontWeight: weight['bold'],
      maxWidth: 600,
      '& span': {
        fontSize: 14,
        textTransform: 'uppercase',
        letterSpacing: 2,
        display: 'block',
        marginBottom: 8
      },
      '&:after': {
        content: '',
        background: color.y400,
        position: 'relative',
        display: 'block',
        marginBottom: spacing['3'],
        width: 64,
        height: 4,
        top: 8
      }
    },
    h3: {
      fontFamily: font.heading,
      fontWeight: 'normal',
      color: color.g700,
      minWidth: 260,
      maxWidth: 600,
      fontSize: fontSize['h3'],
      lineHeight: 1.33,
      letterSpacing: 0
    },
    h4: {
      fontFamily: font.heading,
      maxWidth: 600
    },
    h5: {
      fontFamily: font.heading,
      maxWidth: 600
    },
    h6: {
      fontFamily: font.heading,
      letterSpacing: 1.5,
      fontSize: fontSize['body1'],
      maxWidth: 600,
      textTransform: 'uppercase',
      fontWeight: weight['bold'],
      marginTop: '0.3rem'
    }
  },
  palette: {
    type: 'light',
    primary: {
      light: color.b300,
      main: color.b700,
      dark: color.b900
    },
    secondary: {
      light: color.b300,
      main: color.white,
      dark: color.b700
    },
    error: {
      light: color.r300,
      main: color.r600,
      dark: color.r900
    }
  }
};

export default Kirby;
