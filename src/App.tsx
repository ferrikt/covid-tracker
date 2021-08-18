import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import DataContextProvider from './context/DataContext';
import SelectContextProvider from './context/selectContext';
import theme from './theme';
import { ThemeProvider } from 'theme-ui';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <SelectContextProvider>
                <DataContextProvider>
                    <Dashboard />
                </DataContextProvider>
            </SelectContextProvider>
        </ThemeProvider>
    );
};

export default App;
