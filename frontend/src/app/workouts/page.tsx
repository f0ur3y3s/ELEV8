"use client";

import Navbar from "@/components/layout/navbar";

import {
    Card,
    // CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

import { Minus, Plus } from "lucide-react"
import { useState } from 'react';

type Exercise = {
    name: string,
    description: string,
    duration: number,
    unit: "min" | "lbs",
    sets?: number,
    reps?: number,
    weight?: number
};

type Workout = {
    name: string,
    description: string,
    unit: string,
    exercises: Exercise[];
};

const workouts: Workout[] = [

    {
        name: "Chest and Tri", description: "Chest and triceps workout", unit: "lbs", exercises: [
            {
                name: "Bench Press",
                description: "Bench press with barbell",
                duration: 30,
                unit: "lbs",
                sets: 3,
                reps: 10,
                weight: 225,
            },
            {
                name: "Tricep Dips",
                description: "Dips on parallel bars",
                duration: 15,
                unit: "lbs",
                sets: 3,
                reps: 10,
                weight: 0,
            },
            {
                name: "Pushups",
                description: "Pushups on the floor",
                duration: 15,
                unit: "lbs",
                sets: 3,
                reps: 10,
                weight: 0,
            },
            {
                name: "Cable Flys",
                description: "Cable flys on machine",
                duration: 15,
                unit: "lbs",
                sets: 4,
                reps: 8,
                weight: 30,
            },
            {
                name: "Skull Crushers",
                description: "Skull crushers with barbell",
                duration: 15,
                unit: "lbs",
                sets: 3,
                reps: 10,
                weight: 50,
            }
        ]
    },
    {
        name: "Back and Bi", description: "Back and biceps workout", unit: "lbs", exercises: [
            {
                name: "Deadlifts",
                description: "Deadlifts with barbell",
                duration: 30,
                unit: "lbs",
                sets: 3,
                reps: 10,
                weight: 225,
            },
            {
                name: "Pullups",
                description: "Pullups on the bar",
                duration: 15,
                unit: "lbs",
                sets: 3,
                reps: 10,
                weight: 0,
            },
            {
                name: "Bicep Curls",
                description: "Bicep curls with dumbbells",
                duration: 15,
                unit: "lbs",
                sets: 3,
                reps: 10,
                weight: 30,
            },
            {
                name: "Lat Pulldowns",
                description: "Lat pulldowns on machine",
                duration: 15,
                unit: "lbs",
                sets: 4,
                reps: 8,
                weight: 30,
            },
            {
                name: "Hammer Curls",
                description: "Hammer curls with dumbbells",
                duration: 15,
                unit: "lbs",
                sets: 3,
                reps: 10,
                weight: 30,
            }
        ]
    },
    {
        name: "Cardio", description: "Cardiovascular workout", unit: "min", exercises: [
            {
                name: "Running",
                description: "Running on the treadmill",
                duration: 30,
                unit: "min",
            },
            {
                name: "Cycling",
                description: "Cycling on the stationary bike",
                duration: 30,
                unit: "min",
            },
            {
                name: "Rowing",
                description: "Rowing on the rowing machine",
                duration: 30,
                unit: "min",
            }
        ]
    },
]

export default function WorkoutsPage() {
    const [exerciseState, setExerciseState] = useState(
        workouts.map((workout) =>
            workout.exercises.map((exercise) => ({
                sets: exercise.sets || 0,
                reps: exercise.reps || 0,
                weight: exercise.weight || 0
            }))
        )
    );

    const updateSets = (workoutIndex: number, exerciseIndex: number, newSets: number) => {
        setExerciseState((prevState) =>
            prevState.map((workout, i) =>
                i === workoutIndex
                    ? workout.map((exercise, j) =>
                        j === exerciseIndex ? { ...exercise, sets: newSets } : exercise
                    )
                    : workout
            )
        );
    };

    const updateReps = (workoutIndex: number, exerciseIndex: number, newReps: number) => {
        setExerciseState((prevState) =>
            prevState.map((workout, i) =>
                i === workoutIndex
                    ? workout.map((exercise, j) =>
                        j === exerciseIndex ? { ...exercise, reps: newReps } : exercise
                    )
                    : workout
            )
        );
    };

    const updateWeight = (workoutIndex: number, exerciseIndex: number, newWeight: number) => {
        setExerciseState((prevState) =>
            prevState.map((workout, i) =>
                i === workoutIndex
                    ? workout.map((exercise, j) =>
                        j === exerciseIndex ? { ...exercise, weight: newWeight } : exercise
                    )
                    : workout
            )
        );
    };

    return (
        <div>
            <Navbar>
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold text-secondary-foreground">Workouts</h1>
                    <p className="text-muted-foreground">Click on a specific exercise to edit it.</p>
                </div>
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 lg:grid-cols-1">
                    {workouts.map((workout, workoutIndex) => {
                        const totalWeight = workout.exercises.reduce((acc, exercise) => acc + ((exercise.weight || 0) * (exercise.reps || 0) * (exercise.sets || 0)), 0);
                        const totalDuration = workout.exercises.reduce((acc, exercise) => acc + exercise.duration, 0);

                        return (
                            <Card key={workout.name} className="min-h-full">
                                <CardHeader>
                                    <CardTitle className="text-2xl flex justify-between">
                                        {workout.name}
                                        <span className="font-bold text-muted-foreground">{workout.unit === "lbs" ? totalWeight : totalDuration}{" "}{workout.unit}</span>
                                    </CardTitle>
                                    <CardDescription>{workout.description}</CardDescription>
                                </CardHeader>

                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Name</TableHead>
                                            <TableHead className="hidden md:table-cell">Description</TableHead>
                                            <TableHead>{workout.unit === "lbs" ? "Weight" : "Min"}</TableHead>
                                            <TableHead>Sets</TableHead>
                                            <TableHead>Reps</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {workout.exercises.map((exercise, exerciseIndex) => (
                                            <Drawer key={exercise.name}>
                                                <DrawerTrigger asChild>
                                                    <TableRow>
                                                        <TableCell>{exercise.name}</TableCell>
                                                        <TableCell className="hidden md:table-cell">{exercise.description}</TableCell>
                                                        <TableCell>
                                                            {exercise.unit === "lbs" ? exercise.weight : exercise.duration}{" "}{exercise.unit}
                                                        </TableCell>
                                                        <TableCell>{exerciseState[workoutIndex][exerciseIndex].sets}</TableCell>
                                                        <TableCell>{exerciseState[workoutIndex][exerciseIndex].reps}</TableCell>
                                                    </TableRow>
                                                </DrawerTrigger>
                                                <DrawerContent className="border-0">
                                                    <div className="mx-auto w-full max-w-sm">
                                                        <DrawerHeader>
                                                            <DrawerTitle>Modify Exercise</DrawerTitle>
                                                            <DrawerDescription>Adjust sets and reps</DrawerDescription>
                                                        </DrawerHeader>
                                                        <div className="p-4 pb-0">
                                                            <div className="flex items-center justify-center space-x-2">
                                                                <Button
                                                                    variant="outline"
                                                                    size="icon"
                                                                    className="h-16 w-16 shrink-0 rounded-full"
                                                                    onClick={() => updateSets(workoutIndex, exerciseIndex, exerciseState[workoutIndex][exerciseIndex].sets - 1)}
                                                                >
                                                                    <Minus className="h-4 w-4" />
                                                                    <span className="sr-only">Decrease Sets</span>
                                                                </Button>
                                                                <div className="flex-1 text-center">
                                                                    <div className="text-7xl font-bold tracking-tighter">
                                                                        {exerciseState[workoutIndex][exerciseIndex].sets}
                                                                    </div>
                                                                    <div className="text-[0.70rem] uppercase text-muted-foreground">
                                                                        Sets
                                                                    </div>
                                                                </div>
                                                                <Button
                                                                    variant="outline"
                                                                    size="icon"
                                                                    className="h-16 w-16 shrink-0 rounded-full"
                                                                    onClick={() => updateSets(workoutIndex, exerciseIndex, exerciseState[workoutIndex][exerciseIndex].sets + 1)}
                                                                >
                                                                    <Plus className="h-4 w-4" />
                                                                    <span className="sr-only">Increase Sets</span>
                                                                </Button>
                                                            </div>

                                                            <div className="flex items-center justify-center space-x-2 mt-4">
                                                                <Button
                                                                    variant="outline"
                                                                    size="icon"
                                                                    className="h-16 w-16 shrink-0 rounded-full"
                                                                    onClick={() => updateReps(workoutIndex, exerciseIndex, exerciseState[workoutIndex][exerciseIndex].reps - 1)}
                                                                >
                                                                    <Minus className="h-4 w-4" />
                                                                    <span className="sr-only">Decrease Reps</span>
                                                                </Button>
                                                                <div className="flex-1 text-center">
                                                                    <div className="text-7xl font-bold tracking-tighter">
                                                                        {exerciseState[workoutIndex][exerciseIndex].reps}
                                                                    </div>
                                                                    <div className="text-[0.70rem] uppercase text-muted-foreground">
                                                                        Reps
                                                                    </div>
                                                                </div>
                                                                <Button
                                                                    variant="outline"
                                                                    size="icon"
                                                                    className="h-16 w-16 shrink-0 rounded-full"
                                                                    onClick={() => updateReps(workoutIndex, exerciseIndex, exerciseState[workoutIndex][exerciseIndex].reps + 1)}
                                                                >
                                                                    <Plus className="h-4 w-4" />
                                                                    <span className="sr-only">Increase Reps</span>
                                                                </Button>
                                                            </div>
                                                            <div className="flex items-center justify-center space-x-2 mt-4">
                                                                <Button
                                                                    variant="outline"
                                                                    size="icon"
                                                                    className="h-16 w-16 shrink-0 rounded-full"
                                                                    onClick={() => updateWeight(workoutIndex, exerciseIndex, exerciseState[workoutIndex][exerciseIndex].weight - 1)}
                                                                >
                                                                    <Minus className="h-4 w-4" />
                                                                    <span className="sr-only">Decrease Weight</span>
                                                                </Button>
                                                                <div className="flex-1 text-center">
                                                                    <div className="text-7xl font-bold tracking-tighter">
                                                                        {exerciseState[workoutIndex][exerciseIndex].weight}
                                                                    </div>
                                                                    <div className="text-[0.70rem] uppercase text-muted-foreground">
                                                                        Weight
                                                                    </div>
                                                                </div>
                                                                <Button
                                                                    variant="outline"
                                                                    size="icon"
                                                                    className="h-16 w-16 shrink-0 rounded-full"
                                                                    onClick={() => updateWeight(workoutIndex, exerciseIndex, exerciseState[workoutIndex][exerciseIndex].weight + 1)}
                                                                >
                                                                    <Plus className="h-4 w-4" />
                                                                    <span className="sr-only">Increase Weight</span>
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <DrawerFooter>
                                                            <DrawerClose asChild>
                                                                <Button>Submit</Button>
                                                            </DrawerClose>
                                                            <DrawerClose asChild>
                                                                <Button variant="outline">Cancel</Button>
                                                            </DrawerClose>
                                                        </DrawerFooter>
                                                    </div>
                                                </DrawerContent>
                                            </Drawer>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Card>
                        );
                    })}
                </div>
            </Navbar>
        </div>

    );
}