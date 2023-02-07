import uvicorn
from fastapi import FastAPI, Request, BackgroundTasks
from fastapi.responses import HTMLResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel

app = FastAPI()

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
async def read(workout: Workout, request: Request):
    print(workout.name)
    return {"message": "Read"}

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
