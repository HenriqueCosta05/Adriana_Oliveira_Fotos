import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get(url, {
            headers: {
                Accept: 'application/json',
            },
        })
            .then(response => {
                console.log('Data fetched: ', response.data);
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, [url]);

    return data;
};