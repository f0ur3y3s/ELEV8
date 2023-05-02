import React, { useState } from 'react';
import axios from 'axios';

const DeleteButton = () => {
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            const response = await axios.delete('http://localhost:8000/delete', {
                data: {
                    "name": "test",
                    "bodypart": "test",
                    "reps": 0,
                    "weight": 0
                }
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
            {loading ? 'Sending...' : 'Delete'}
        </button>
    );
};

export default DeleteButton;
