// import logo from './logo.svg';
import './App.css';
// import create
import CreateButton from './create.js';
import UpdateButton from './update.js';
import DeleteButton from './delete.js';
// import ReadButton from './read.js';
import NewWorkoutForm from './newworkout';
import WorkoutCards from './read.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <NewWorkoutForm />
        <br></br>
        {/* <CreateButton /> */}
        <UpdateButton />
        <DeleteButton />
        {/* <ReadButton /> */}
        <WorkoutCards />
      </header>
    </div>
  );
}

export default App;
