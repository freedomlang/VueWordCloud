module.exports = (api) => {
  api.cache(api.env('development'));

  const presets = [
    ['@babel/preset-env', {
      modules: false,
      useBuiltIns: false,
      forceAllTransforms: true,
    }],
  ];

  return {
    presets
  };
};