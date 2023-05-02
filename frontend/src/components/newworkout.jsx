import React, { useState } from 'react';
import axios from 'axios';

const NewWorkoutForm = () => {
    const [name, setName] = useState('');
    const [bodypart, setBodypart] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/create', {
                name,
                bodypart,
                reps: parseInt(reps),
                weight: parseInt(weight)
            });
            console.log(response.data);
            setLoading(false);
            setName('');
            setBodypart('');
            setReps('');
            setWeight('');
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Bodypart:
                <input
                    type="text"
                    value={bodypart}
                    onChange={e => setBodypart(e.target.value)}
                />
            </label>
            <br />
            <label>
                Reps:
                <input
                    type="number"
                    value={reps}
                    onChange={e => setReps(e.target.value)}
                />
            </label>
            <br />
            <label>
                Weight:
                <input
                    type="number"
                    value={weight}
                    onChange={e => setWeight(e.target.value)}
                />
            </label>
            <br />
            <button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Create'}
            </button>
        </form>
    );
};

export default NewWorkoutForm;
