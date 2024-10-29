import sqlite3

# # Connect to the SQLite database (or create it)
# conn = sqlite3.connect("workouts.db")
# cursor = conn.cursor()

# # Create the Exercises table
# cursor.execute(
#     """
#     CREATE TABLE IF NOT EXISTS Exercises (
#         exercise_id INTEGER PRIMARY KEY AUTOINCREMENT,
#         name TEXT NOT NULL,
#         description TEXT,
#         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
#     )
# """
# )

# # Create the Workout Templates table
# cursor.execute(
#     """
#     CREATE TABLE IF NOT EXISTS WorkoutTemplates (
#         template_id INTEGER PRIMARY KEY AUTOINCREMENT,
#         template_name TEXT NOT NULL,
#         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
#     )
# """
# )

# # Create the Workout Template Exercises table (junction table)
# cursor.execute(
#     """
#     CREATE TABLE IF NOT EXISTS WorkoutTemplateExercises (
#         template_id INTEGER,
#         exercise_id INTEGER,
#         default_reps INTEGER,
#         default_sets INTEGER,
#         default_weight INTEGER,
#         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
#         FOREIGN KEY (template_id) REFERENCES WorkoutTemplates(template_id),
#         FOREIGN KEY (exercise_id) REFERENCES Exercises(exercise_id)
#     )
# """
# )

# # Create the Workouts table
# cursor.execute(
#     """
#     CREATE TABLE IF NOT EXISTS Workouts (
#         workout_id INTEGER PRIMARY KEY AUTOINCREMENT,
#         template_id INTEGER,
#         workout_date DATE,
#         notes TEXT,
#         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
#         FOREIGN KEY (template_id) REFERENCES WorkoutTemplates(template_id)
#     )
# """
# )

# # Create the Workout Entries table
# cursor.execute(
#     """
#     CREATE TABLE IF NOT EXISTS WorkoutEntries (
#         workout_entry_id INTEGER PRIMARY KEY AUTOINCREMENT,
#         workout_id INTEGER,
#         exercise_id INTEGER,
#         custom_reps INTEGER,
#         custom_sets INTEGER,
#         custom_weight INTEGER,
#         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
#         FOREIGN KEY (workout_id) REFERENCES Workouts(workout_id),
#         FOREIGN KEY (exercise_id) REFERENCES Exercises(exercise_id)
#     )
# """
# )

# # Commit the changes and close the connection
# conn.commit()
# conn.close()

# print("Database and tables created successfully.")

# Insert sample data into Exercises and WorkoutTemplates
conn = sqlite3.connect("workouts.db")
cursor = conn.cursor()

cursor.execute(
    "INSERT INTO Exercises (name, description) VALUES ('Push-up', 'A basic bodyweight exercise')"
)
cursor.execute(
    "INSERT INTO Exercises (name, description) VALUES ('Squat', 'A basic leg exercise')"
)
cursor.execute(
    "INSERT INTO WorkoutTemplates (template_name) VALUES ('Beginner Full Body')"
)

# Insert data into WorkoutTemplateExercises (associate exercises with a template)
cursor.execute(
    "INSERT INTO WorkoutTemplateExercises (template_id, exercise_id, default_reps, default_sets, default_weight) VALUES (1, 1, 10, 3, NULL)"
)  # Push-up
cursor.execute(
    "INSERT INTO WorkoutTemplateExercises (template_id, exercise_id, default_reps, default_sets, default_weight) VALUES (1, 2, 15, 3, NULL)"
)  # Squat

conn.commit()
conn.close()

print("Sample data inserted successfully.")
