import React, { useEffect } from 'react';
import useAxios from './useAxios';

function DataFetcher() {
    const { data, error, loading, request } = useAxios();

    useEffect(() => {
        request({
            url: '/data',
            method: 'GET'
        });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error occurred: {error.message}</p>;

    return (
        <div>
            <h1>Data Fetched</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default DataFetcher;