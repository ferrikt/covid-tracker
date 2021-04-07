import Axios from 'axios';
import { useEffect, useState } from 'react';
import { DAILY_BASE_URL } from '../constants';

export const useDailyUrl = (): string => {
    const [dataUrl, setDataUrl] = useState('');

    useEffect(() => {
        const getFilesNames = (): string[] => {
            // const today = new Date();
            // const todayStr = today.toISOString().split('T')[0];
            // today.setDate(today.getDate() - 1);
            // const ydayStr = today.toISOString().split('T')[0];
            // const todayArr = todayStr.split('-');
            // const ydayArr = ydayStr.split('-');

            // return [
            //     `${todayArr[2]}-${todayArr[1]}-${todayArr[0]}.csv`,
            //     `${ydayArr[2]}-${ydayArr[1]}-${ydayArr[0]}.csv`
            // ];

            const today = new Date();
            let files: string[] = [];
            for (let i = 0; i < 4; i++) {
                const year = today.getFullYear();
                const month = (today.getMonth() + 1).toString().padStart(2, '0');
                const date = today.getDate().toString().padStart(2, '0');
                const fileName = `${month}-${date}-${year}.csv`;
                files.push(fileName);
                today.setDate(today.getDate() - 1);
            }
            return files;
        };

        async function getUrl() {
            const files = getFilesNames();

            for (const file of files) {
                try {
                    const url = DAILY_BASE_URL + file;
                    const res = await Axios.get(url);
                    const status = res.status;
                    if (status === 200) {
                        setDataUrl(url);
                        break;
                    }
                } catch {
                    // csv files are not found. handle this error.
                }
            }
        }

        getUrl();
    }, []);

    return dataUrl;
};
