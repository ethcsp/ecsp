// eslint-disable-next-line @typescript-eslint/no-var-requires
const tailwind = require('../../tailwind.config');

const mergeDeep = (target, source) => {
  const isObject = (obj) => obj && typeof obj === 'object';

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
};

module.exports = mergeDeep(tailwind, {
  purge: {
    content: [
      'apps/ecsp-web/src/**/*.ts',
      'apps/ecsp-web/src/**/*.tsx',
      'apps/ecsp-web/src/**/*.js',
      'apps/ecsp-web/src/**/*.jsx',
      'apps/ecsp-web/src/**/*.html',
    ],
  },
  theme: {
    colors: {
      'background-color': '#E1E1E1',
      'bridger-primary': '#F33D6F',
      'bridger-primary-tint': '#F6C8D5',
      'bridger-secondary': '#41C6FE',
      'bridger-dark': '#1A0007',
      'bridger-light': '#FCFBF9',
      'bridger-tertiary': '#1A0007',
      'bridger-subtle-text': '#646464',
      'bridger-dark-accent': '#848383',
      'bridger-medium-accent': '#ADADAD',
      'bridger-accent': '#E2DFDC',
      'bridger-warning-orange': '#FB9A02',
      'bridger-dark-pink-contrast': '#D91D51',
      'bridger-black': '#000000',
      'bridger-white': '#FFFFFF',
      'bridger-success-green': '#466B01',
      'bridger-error-red': '#B80000',
      'bridger-error-red-tint': '#FFD4D4',
      'bridger-tertiary-link': '#1B73B4',
    },
  },
});
