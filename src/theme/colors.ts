export interface ColorsInterface {
  active: string;
  linkBlue: string;
  white: string;
  dark: string;
  grey: string;
}

const colors: ColorsInterface = {
  active: '#e67a00',
  linkBlue: '#017185',
  white: '#FFFFFF',
  dark: '#000000',
  grey: '#827d7d',
};

// export const darkColors: ColorsInterface = {
//   active: "#f3a846",
//   primaryBlue: "#131921",
//   secondaryBlue: "#222f3e",
//   whiteText: "#FFFFFF",
//   darkText: "#000000",
// };

export const chooseColor = (color: string) => {
  switch (color) {
    case 'active': {
      return colors.active;
    }

    case 'linkBlue': {
      return colors.linkBlue;
    }

    case 'white': {
      return colors.white;
    }

    case 'dark': {
      return colors.dark;
    }

    case 'grey': {
      return colors.grey;
    }

    default:
      return colors.dark;
  }
};

export default colors;
