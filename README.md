# ELEV8

ELEV8 is a continuation of a previous project that I worked on, called slinging weights. 

The purpose of this project is to provide a platform for people to share their workouts, provide a way for people to track their progress, and provide a social feed for lifting enthusiasts.

## Phases

Phase 1: 
- [X] Create a basic CRUD application for users to create, read, update, and delete their workouts
  - [X] Each workout should accept reps x weight for an amount of sets.

Phase 2:
- [ ] Create React frontend
  - [ ] Allow reordering of workout events

Phase 3:
- [ ] Add user authentication
  - [ ] Use Firebase for authentication

Phase 4:
- [ ] Allow each user to have a profile page
  - [ ] Allow users to upload a profile picture
  - [ ] Allow users to add a bio
  - [ ] Allow users to add a location
  - [ ] Allow users to add a link to their social media

Phase 5:
- [ ] Create a basic social feed for video proof of lifts

## Relationships

Users: To store user details such as ID, name, email, etc.

Exercises: To store details about exercises, like the name of the exercise, an explanation, etc. This can all be universally shared among users.

Workouts: To store workout details like date, user_id (to link a workout to a user), and optionally any additional info related to the workout.

WorkoutExercises: A junction table that connects workouts and exercises. It will store a workoutid (connecting it to the Workouts table) and an exerciseid (connecting it to the Exercises table). This table makes it possible to represent multiple exercises in a single workout session, as well as enables multiple users to add exercises within a workout.

SetsReps: A table to store the sets and reps for a given workoutexercise. You would include columns for workoutexercise_id (connecting it to the WorkoutExercises table), sets, and reps.



## Definitions

```
// Define the database structure for users, follows, and posts

Table exercises {
  exercise_id integer [primary key, increment]
  name varchar
  description text
  default_reps integer
  default_sets integer
  default_weight integer
  created_at timestamp
}

Table workout_templates {
  template_id integer [primary key, increment]
  template_name varchar
  created_at timestamp
}

Table workout_template_exercises {
  template_id integer
  exercise_id integer
  created_at timestamp

  // Defining the relationship
}
Ref: workout_template_exercises.template_id > workout_templates.template_id
Ref: workout_template_exercises.exercise_id > exercises.exercise_id

Table workouts {
  workout_id integer [primary key, increment]
  template_id integer
  workout_date date
  notes text
  created_at timestamp

  // Defining the relationship
}
Ref: workouts.template_id > workout_templates.template_id

Table workout_entries {
  workout_entry_id integer [primary key, increment]
  workout_id integer
  exercise_id integer
  custom_reps integer
  custom_sets integer
  custom_weight integer
  created_at timestamp

  // Defining the relationships
}
Ref: workout_entries.workout_id > workouts.workout_id
Ref: workout_entries.exercise_id > exercises.exercise_id

```

```
// Define the database structure for exercises, workout templates, and workouts

Table exercises {
  exercise_id integer [primary key, increment]
  name varchar
  description text
  created_at timestamp
}

Table workout_templates {
  template_id integer [primary key, increment]
  template_name varchar
  created_at timestamp
}

Table workout_template_exercises {
  template_id integer
  exercise_id integer
  default_reps integer
  default_sets integer
  default_weight integer
  created_at timestamp

  // Defining the relationship
}
  Ref: workout_template_exercises.template_id > workout_templates.template_id
  Ref: workout_template_exercises.exercise_id > exercises.exercise_id

Table workouts {
  workout_id integer [primary key, increment]
  template_id integer
  workout_date date
  notes text
  created_at timestamp

  // Defining the relationship
}
  Ref: workouts.template_id > workout_templates.template_id

Table workout_entries {
  workout_entry_id integer [primary key, increment]
  workout_id integer
  exercise_id integer
  custom_reps integer
  custom_sets integer
  custom_weight integer
  created_at timestamp

  // Defining the relationships
}
  Ref: workout_entries.workout_id > workouts.workout_id
  Ref: workout_entries.exercise_id > exercises.exercise_id

```