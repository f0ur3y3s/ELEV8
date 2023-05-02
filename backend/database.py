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
        self.cur.execute("CREATE TABLE IF NOT EXISTS workouts (id INTEGER PRIMARY KEY, user_id INTEGER, additional_info text, FOREIGN KEY (user_id) REFERENCES users (uuid))")
        self.cur.execute("CREATE TABLE IF NOT EXISTS workout_exercises (id INTEGER PRIMARY KEY, workout_id INTEGER, exercise_id INTEGER, FOREIGN KEY (workout_id) REFERENCES workouts (id), FOREIGN KEY (exercise_id) REFERENCES exercises (id))")
        self.cur.execute("CREATE TABLE IF NOT EXISTS sets_reps (id INTEGER PRIMARY KEY, workout_exercise_id INTEGER, sets INTEGER, reps INTEGER, FOREIGN KEY (workout_exercise_id) REFERENCES workout_exercises (id))")
        self.conn.commit()

    def test(self):
        # drop all tables
        self.cur.execute("INSERT INTO users VALUES (NULL, 'testuser', 'testpass', 'testname', 'testemail', 'testbio')")
        self.cur.execute("INSERT INTO exercises VALUES (NULL, 'testexname', 'testexbodypart')")
        self.cur.execute("INSERT INTO workouts VALUES (NULL, 1, 'testadditionalinfo')")
        self.cur.execute("INSERT INTO workout_exercises VALUES (NULL, 1, 1)")
        self.cur.execute("INSERT INTO sets_reps VALUES (NULL, 1, 1, 1)")
        self.conn.commit()
        self.cur.execute("SELECT * FROM users")
        rows = self.cur.fetchall()
        return rows

    def get_workouts(self, id):
        self.cur.execute("SELECT * FROM workouts WHERE user_id=?", (id,))
        rows = self.cur.fetchall()
        for row in rows:
            self.cur.execute("SELECT * FROM workout_exercises WHERE workout_id=?", (row[0],))
            workout_exercises = self.cur.fetchall()
            for row in workout_exercises:
                self.cur.execute("SELECT * FROM exercises WHERE id=?", (row[2],))
                exercise = self.cur.fetchall()
                print(exercise)
                # row.append(exercise)
            print(workout_exercises)
        return rows

    def get_exercises(self, id):
        self.cur.execute("SELECT * FROM exercises WHERE id=?", (id,))
        rows = self.cur.fetchall()
        return rows

    def workout_exercises(self, id):
        self.cur.execute("SELECT * FROM workout_exercises WHERE workout_id=?", (id,))
        rows = self.cur.fetchall()
        return rows

    def create_user(self, username, password, name, email, bio):
        self.cur.execute("INSERT INTO users VALUES (NULL, ?, ?, ?, ?, ?)", (username, password, name, email, bio))
        self.conn.commit()

    def create_exercise(self, name, bodypart):
        self.cur.execute("INSERT INTO exercises VALUES (NULL, ?, ?)", (name, bodypart))
        self.conn.commit()
    
    def create_workout(self, user_id, additional_info):
        self.cur.execute("INSERT INTO workouts VALUES (NULL, ?, ?)", (user_id, additional_info))
        self.conn.commit()
    
    def create_workout_exercise(self, workout_id, exercise_id):
        self.cur.execute("INSERT INTO workout_exercises VALUES (NULL, ?, ?)", (workout_id, exercise_id))
        self.conn.commit()
    
    def create_sets_reps(self, workout_exercise_id, sets, reps):
        self.cur.execute("INSERT INTO sets_reps VALUES (NULL, ?, ?, ?)", (workout_exercise_id, sets, reps))
        self.conn.commit()
    
if __name__ == "__main__":
    db = Database("test.db")
    print("Database created successfully.")
    # print(db.test())
    # print("Test data inserted successfully.")
    # print("Test complete.")
    print(db.get_workouts(1))
    # print(db.get_exercises(1))
    # print(db.workout_exercises(1))