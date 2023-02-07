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
    name: str
    bodypart: str
    reps: int
    weight: int

#################################
# FastAPI Endpoints
#################################

# create
@app.post("/create")
async def create(workout: Workout, request: Request):
    print(workout.name)
    return {"message": "Create"}

# read
@app.get("/read")
async def read(request: Request):
    workouts = db.view()
    print(workouts)
    return workouts
# async def read(workout: Workout, request: Request):
    # print(workout.name)
    # return {"message": "Read"}

# update
@app.put("/update")
async def update(workout: Workout, request: Request):
    print(workout.name)
    return {"message": "Update"}

# delete
@app.delete("/delete")
async def delete(workout: Workout, request: Request):
    print(workout.name)
    return {"message": "Delete"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0")
