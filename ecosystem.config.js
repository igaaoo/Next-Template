module.exports = {
  apps: [
    {
      name: 'next-template',
      script: 'yarn',
      args: 'start',
      cwd: '/var/www/next-template',
      watch: true,
      ignore_watch: ['node_modules'],
      env: {
        NODE_ENV: 'production',
        AD_URL: '',
        AD_DOMAIN: '',
        AD_USER: '',
        AD_PASS: '',
        TOKEN: '',
        DB_HOST: '',
        DB_PORT: '',
        DB_USER: '',
        DB_PASS: '',
        DB_SERVICE: ''
      },
    },
  ],
};
