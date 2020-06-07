module.exports = {
  stories: ['../src/stories/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};

// module.exports = {
//   webpackFinal: async config => {
//     config.module.rules.push({
//       test: /\.(ts|tsx)$/,
//       use: [
//         {
//           loader: require.resolve('ts-loader'),
//         },
//         // Optional
//         {
//           loader: require.resolve('react-docgen-typescript-loader'),
//         },
//       ],
//     });
//     config.resolve.extensions.push('.ts', '.tsx');
//     return config;
//   },
//   };
