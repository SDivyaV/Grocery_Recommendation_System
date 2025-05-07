// src/theme/index.ts
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    lightGray: '#d3d3d3',
    gray: '#6c757d',
    dark: '#343a40',
    primary: '#28a745',
    primaryDark: '#218838',
  },
  space: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  fontSizes: {
    small: '0.875rem',
    base: '1rem',
    large: '1.5rem',
    medium: '1.25rem', 
    regular: '1rem',    
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px'
  }
};
