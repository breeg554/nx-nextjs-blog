import { Typography } from './Typography';

export default {
  title: 'components/Typography',
  component: Typography,
};

export const H1 = () => (
  <Typography variant="h1" className="text-neutral-800">
    Its me, its h1!!!
  </Typography>
);

export const H2 = () => (
  <Typography variant="h2" className="text-neutral-800">
    Its me, its h2!!!
  </Typography>
);

export const H3 = () => (
  <Typography variant="h3" className="text-neutral-800">
    Its me, its h3!!!
  </Typography>
);

export const H4 = () => (
  <Typography variant="h4" className="text-neutral-800">
    Its me, its h4!!!
  </Typography>
);

export const H5 = () => (
  <Typography variant="h5" className="text-neutral-800">
    Its me, its h5!!!
  </Typography>
);

export const H6 = () => (
  <Typography variant="h6" className="text-neutral-800">
    Its me, its h6!!!
  </Typography>
);

export const Body = () => (
  <Typography variant="body" className="text-neutral-800">
    Its me, body
  </Typography>
);

export const Caption = () => (
  <Typography variant="caption" className="text-neutral-800">
    Its me, body
  </Typography>
);
