module.exports = {
  apps: [
    {
      name: 'cn-lb4.jonesrussell42.xyz',
      script: './dist/index.js',
      watch: './dist',
      // Delay between restart
      watch_delay: 1000,
      ignore_watch: ['node_modules'],
      env: {
        PORT: 4100,
        NODE_ENV: 'production',
        MONGODB_URI: 'mongodb://mongodb.jonesrussell42.xyz:27017/portfolio-app',
      },
    },
  ],
};
