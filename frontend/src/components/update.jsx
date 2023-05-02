import React, { useState } from 'react';
import axios from 'axios';

const UpdateButton = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            const response = await axios.put('http://localhost:8000/update', {
                "name": "test",
                "bodypart": "test",
                "reps": 0,
                "weight": 0
            });
            console.log(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <button onClick={handleClick} disabled={loading}>
            {loading ? 'Sending...' : 'Update'}
        </button>
    );
};

export default UpdateButton;
