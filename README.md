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

