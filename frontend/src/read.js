// import React, { useState } from 'react';
// import axios from 'axios';

// const ReadButton = () => {
//     const [loading, setLoading] = useState(false);

//     const handleClick = async () => {
//         setLoading(true);
//         try {
//             const response = await axios.get('http://localhost:8000/read',);
//             console.log(response.data);
//             setLoading(false);
//         } 
//         catch (error) {
//             console.error(error);
//             setLoading(false);
//         }
//     };

//     return (
//         <button onClick={handleClick} disabled={loading}>
//             {loading ? 'Sending...' : 'Read'}
//         </button>
//     );
// };

// export default ReadButton;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        workouts.map(workout => (
          <div key={workout.id} style={{ border: '1px solid black', padding: '10px' }}>
            <p>Name: {workout.name}</p>
            <p>Bodypart: {workout.bodypart}</p>
            <p>Reps: {workout.reps}</p>
            <p>Weight: {workout.weight}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default WorkoutCards;
