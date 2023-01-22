import { NextSeo as LibNextSeo, NextSeoProps } from 'next-seo';

export const NextSeo = (overrides: Partial<NextSeoProps>) => (
  <LibNextSeo title="Site in progress" description="Site is in progress" {...overrides} />
);
