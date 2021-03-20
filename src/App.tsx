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
        secondary: '#fff',
        red: '#e60000',
        gray: {
            50: '#f7fafc',
            400: '#A0AEC0',
            500: '#718096',
            200: '#E2E8F0'
        }
    },
    text: {
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.2em'
        },
        heading: {
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading'
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
