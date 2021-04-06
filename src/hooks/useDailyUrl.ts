import Axios from 'axios';
import { useEffect, useState } from 'react';
import { DAILY_BASE_URL } from '../constants';

export const useDailyUrl = (): string => {
    const [dataUrl, setDataUrl] = useState('');

    useEffect(() => {
        const getFilesNames = (): string[] => {
            const today = new Date();
            let files: string[] = [];
            // const todayUrl = today.toISOString().split('T')[0];
            // today.setDate(today.getDate() - 1);
            // const ydayUrl = today.toISOString().split('T')[0];
            // return [ydayUrl, todayUrl, '03-04-2021.csv'];

            for (let i = 0; i < 7; i++) {
                const year = today.getFullYear();
                const month = (today.getMonth() + 1).toString().padStart(2, '0');
                const date = today.getDate().toString().padStart(2, '0');
                const fileName = `${month}-${date}-${year}.csv`;
                files.push(fileName);
                today.setDate(today.getDate() - 1);
            }
            return files;
        };

        const getUrl = async () => {
            const files = getFilesNames();
            let latestUrl = '';
            for (const file of files) {
                try {
                    const url = DAILY_BASE_URL + file;
                    const res = await Axios.get(url);
                    const status = res.status;

                    if (status === 200) {
                        latestUrl = file;
                        break;
                    }
                } catch {
                    // csv files are not found. handle this error.
                }
            }

            setDataUrl(latestUrl);
        };

        getUrl();
    }, []);

    return dataUrl;
};
