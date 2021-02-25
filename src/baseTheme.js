const colors = {
  black: '#000',
  correct: {
    base: '#67B430',
    'dark-80': '#CDD1DD',
    'light-20': '#EDEEF2',
  },
  gmBlue: {
    base: '#0F526F',
    'dark-60': '#638EA1',
    'dark-80': '#3D738A',
    'light-20': '#E6EDF0',
    'light-40': '#9FBAC5',
  },
  incorrect: {
    base: '#C42A2A',
    'dark-80': '#911F1F',
    'light-20': '#F2C2C2',
  },
  neutral: {
    base: '#E6E8EA',
    'dark-60': '#CCD3D5',
    'light-20': '#FCFCFC',
    'light-30': '#F5F6F7',
    'light-40': '#EDF0F2',
  },
  primary: {
    base: '#0B212C',
    'dark-60': '#647881',
    'dark-80': '#4A5D66',
    'light-40': '#A6B5BD',
    'light-50': '#7D9099',
  },
  transparent: {
    black: 'rgba(0, 0, 0, 16%)',
  },
  warning: {
    base: '#EEBB0B',
    'dark-80': '#D93D1A',
    'light-20': '#E65427',
  },
  white: '#FFF',
};

const measurements = {
  extraExtraLarge: '20px',
  extraExtraSmall: '4px',
  extraLarge: '16px',
  extraSmall: '1px',
  large: '12px',
  medium: '8px',
  shadows: {
    'elevation-1': '0px 1px 1px 0px',
    'elevation-2': '0px 1px 3px 0px',
    'elevation-3': '0px 2px 4px 0px',
    'elevation-4': '0px 4px 8px 0px',
    'elevation-5': '0px 8px 16px 0px',
    'elevation-6': '0px 16px 24px 0px',
    medium: '0px 0px 0px 5px',
    small: '0px 0px 0px 2px',
  },
  small: '4px',
  zero: '0',
};

const typography = {
  fonts: {
    primary: 'Circular Std',
  },
  rootFontSize: '14px',
  sizes: {
    extraExtraLarge: '2.357rem',
    extraLarge: '1.786rem',
    extraSmall: '0.875rem',
    large: '1.357rem',
    medium: '1.143rem',
    small: '1rem',
  },
  weights: {
    black: '900',
    bold: '700',
    regular: '400',
  },
};

const baseTheme = {
  colors,
  measurements,
  typography,
};

export default baseTheme;
