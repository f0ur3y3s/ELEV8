import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const WorkoutCards = () => {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchWorkouts = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:8000/read');
                setWorkouts(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };
        fetchWorkouts();
    }, []);

    return (
        <Row  className="g-4">
            {loading ? (
                <p>Loading...</p>
            ) : (
                workouts.map(workout => (
                    <Col md={6} lg={3}>
                        <Card key={workout.id}>
                            <Card.Body>
                                <hgroup>
                                    <Card.Title>{workout.name}</Card.Title>
                                    <p>{workout.bodypart}</p>
                                </hgroup>
                                <Card.Text>
                                    Reps: {workout.reps}
                                    Weight: {workout.weight}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            )}
        </Row>
    );
};

export default WorkoutCards;