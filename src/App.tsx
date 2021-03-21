import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import DataContextProvider from './context/DataContext';

import { ThemeProvider } from 'theme-ui';

const theme = {
    fonts: {
        body: 'Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif',
        heading: '"Avenir Next", sans-serif',
        monospace: 'Menlo, monospace'
    },
    colors: {
        text: '#d6d6d6',
        background: '#000000',
        primary: '#e60000',
        red: '#e60000',
        heading: '#fff',
        gray: {
            10: '#bdbdbd',
            50: '#f7fafc',
            400: '#A0AEC0',
            500: '#718096',
            200: '#E2E8F0'
        }
    },
    fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        heading: '2xl'
    },
    fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
        heading: 500
    },
    text: {
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
        },
        heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
            color: 'heading'
        }
    }
};

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <DataContextProvider>
                <Dashboard />
            </DataContextProvider>
        </ThemeProvider>
    );
};

export default App;
