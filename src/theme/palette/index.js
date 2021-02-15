import { green, orange, grey } from '@material-ui/core/colors';

const palette = () => ({
  primary: {
    ...green,
    active: grey[50]
  },
  secondary: {
    ...orange,
    active: grey[50]
  },
});

export default palette;
