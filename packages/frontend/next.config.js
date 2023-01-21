const { withNx } = require('@nrwl/next/plugins/with-nx');

const nextConfig = {
  transpilePackages: ['@blog/ui'],
};

module.exports = withNx(nextConfig);
