import { useState } from 'react';
import axios from 'axios';

const baseURL = 'http://localhost:8500/api';

const useAxios = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = async (config) => {
        setLoading(true);
        setData(null);
        setError(null);

        try {
            const response = await axios({
                ...config,
                url: baseURL + config.url
            });
            setData(response.data);
            return response.data;
        } catch (err) {
            setError(err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, request };
};

export default useAxios;
