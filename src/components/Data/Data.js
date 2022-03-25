import React, { useEffect } from 'react';

const Data = () => {
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>borhan</h1>
        </div>
    );
};

export default Data;