import uvicorn
from fastapi import FastAPI, Request, BackgroundTasks
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# import the database.py file
from database import Database

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

##################################
# Custom definitions
###################################

# create a database object
db = Database("workouts.sqlite")

class Workout(BaseModel):
    user_id: int
    name: str

class Exercise(BaseModel):
    name: str
    bodypart: str

class WorkoutExercise(BaseModel):
    workout_id: int
    exercise_id: int

class SetReps(BaseModel):
    workout_exercise_id: int
    sets: int
    reps: int
    weight: int

class User(BaseModel):
    username: str
    password: str
    name: str
    email: str
    bio: str

class Login(BaseModel):
    username: str
    password: str

class GroupBy(BaseModel):
    bodypart: str

#################################
# FastAPI Endpoints
#################################

# create workout
@app.post("/create/workout")
async def create_workout(workout: Workout, request: Request):
    print(workout.name)
    db.create_workout(workout.user_id, workout.name)
    return {"message": "Create Workout"}

@app.post("/create/exercise")
async def create_exercise(exercise: Exercise, request: Request):
    print(exercise.name)
    db.create_exercise(exercise.name, exercise.bodypart)
    return {"message": "Create Exercise"}

# # create
# @app.post("/create")
# async def create(workout: Workout, request: Request):
#     print(workout.name)
#     db.insert(workout.name, workout.bodypart, workout.reps, workout.weight)
#     return {"message": "Create"}

# # read
# @app.get("/read")
# async def read(request: Request):
#     workouts = db.view()
#     # parse workouts into proper json
#     data = {}
#     data["workouts"] = workouts
#     return data

# @app.get("/groupby")
# async def groupby(bodypart: GroupBy, request: Request):
#     workouts = db.filter(bodypart)
#     # parse workouts into proper json
#     data = {}
#     data[bodypart] = workouts
#     return data


# # update
# @app.put("/update")
# # async def update(workout: Workout, request: Request):
# #     print(workout.name)
# #     return {"message": "Update"}
# async def update(toUpdate: Update, request: Request):
#     # print(toUpdate.name)
#     db.update(toUpdate.id, toUpdate.name, toUpdate.bodypart, toUpdate.reps, toUpdate.weight)
#     return {"message": "Update"}

# # delete
# @app.delete("/delete")
# async def delete(workout: Workout, request: Request):
#     print(workout.name)
#     return {"message": "Delete"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0")
