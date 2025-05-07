// src/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      lightGray: string;
      gray: string;
      dark: string;
      primary: string;
      primaryDark?: string; 
    };
    space: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl'?: string; 
    };
    fontSizes: {
      small: string;
      base: string;
      large: string;
      medium: string;
      regular: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    shadows: {
      small: string;
    };
    breakpoints: {
      mobile: string; 
      tablet: string;
      desktop: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
