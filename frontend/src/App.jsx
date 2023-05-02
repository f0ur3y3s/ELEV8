// import logo from './logo.svg';
import WorkoutCards from './components/workoutcards.jsx';
import UpdateButton from './components/update.jsx';
import DeleteButton from './components/delete.jsx';
import NewWorkoutForm from './components/newworkout.jsx';
import ReadButton from './components/read.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
    return (
        <div class="container">
            <NewWorkoutForm />
            <br></br>

            {/*  */}
            {/* <CreateButton /> */}
            <UpdateButton />
            <DeleteButton />
            <ReadButton />
            <WorkoutCards />
        </div>
    );
}

export default App;
