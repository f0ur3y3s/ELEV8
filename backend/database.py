import sqlite3
# CREATE TABLE Users (
#   uuid integer PRIMARY KEY,
#   username varchar(255) NOT NULL,
#   password varchar(255) NOT NULL
#   name varchar(255) NOT NULL,
#   email varchar(255) UNIQUE NOT NULL,
#   bio text,
# );


# CREATE TABLE Exercises (
#   ID integer PRIMARY KEY,
#   Name varchar(255) NOT NULL,
#   Description text
# );


# CREATE TABLE Workouts (
#   uuid integer PRIMARY KEY,
#   user_id integer,
#   Date date,
#   Additional_Info text,
#   FOREIGN KEY (User_ID) REFERENCES Users (ID)
# );


# CREATE TABLE WorkoutExercises (
#   ID integer PRIMARY KEY,
#   Workout_ID integer,
#   Exercise_ID integer,
#   FOREIGN KEY (Workout_ID) REFERENCES Workouts (ID),
#   FOREIGN KEY (Exercise_ID) REFERENCES Exercises (ID)
# );


# CREATE TABLE SetsReps (
#   ID integer PRIMARY KEY,
#   WorkoutExercise_ID integer,
#   Sets integer,
#   Reps integer,
#   FOREIGN KEY (WorkoutExercise_ID) REFERENCES WorkoutExercises (ID)
# );
class Database:
    def __init__(self, db):
        self.conn = sqlite3.connect(db)
        self.cur = self.conn.cursor()
        self.cur.execute("CREATE TABLE IF NOT EXISTS users (uuid INTEGER PRIMARY KEY, username text, password text, name text, email text, bio text)")
        self.cur.execute("CREATE TABLE IF NOT EXISTS exercises (id INTEGER PRIMARY KEY, name text, bodypart text)")
        self.cur.execute("CREATE TABLE IF NOT EXISTS workouts (id INTEGER PRIMARY KEY, user_id INTEGER, date date, additional_info text, FOREIGN KEY (user_id) REFERENCES users (uuid))")
        self.cur.execute("CREATE TABLE IF NOT EXISTS workout_exercises (id INTEGER PRIMARY KEY, workout_id INTEGER, exercise_id INTEGER, FOREIGN KEY (workout_id) REFERENCES workouts (id), FOREIGN KEY (exercise_id) REFERENCES exercises (id))")
        self.cur.execute("CREATE TABLE IF NOT EXISTS sets_reps (id INTEGER PRIMARY KEY, workout_exercise_id INTEGER, sets INTEGER, reps INTEGER, FOREIGN KEY (workout_exercise_id) REFERENCES workout_exercises (id))")
        self.conn.commit()

if __name__ == "__main__":
    db = Database("test.db")
    print("Database created successfully.")