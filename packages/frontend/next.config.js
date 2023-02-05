const { withNx } = require('@nrwl/next/plugins/with-nx');

const nextConfig = {
  transpilePackages: ['@blog/ui', '@blog/http-client', '@blog/contracts'],
};

module.exports = withNx(nextConfig);
