import Navbar from "@/components/layout/navbar";

import {
    Card,
    CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

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
    }
]

export default function TestPage() {
    return (
        <div>
            <Navbar>
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold  text-secondary-foreground">Exercises</h1>
                </div>
                {/* extract only exercises from the workouts */}
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 lg:grid-cols-4 md:grid-cols-2 content-between">
                    {workouts.map((workout) => (
                        workout.exercises.map((exercise) => (
                            <Card key={exercise.name} className="min-h-full">
                                <CardHeader>
                                    <CardTitle className="text-2xl flex justify-between">
                                        {exercise.name}
                                    </CardTitle>
                                    <CardDescription>{exercise.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="">
                                    <span className="text-4xl font-bold">{exercise.duration}{" "}</span>
                                    <span className="text-muted-foreground">{exercise.unit}</span>
                                </CardContent>
                                <CardContent>
                                    <span className="flex-1 text-center text-muted-foreground">
                                        {exercise.sets || 0 ?
                                            <span>
                                                {exercise.sets} x {exercise.reps} @ {exercise.weight} {exercise.unit}
                                            </span> : ""}
                                    </span>
                                </CardContent>
                            </Card>
                        ))
                    ))}
                </div>
            </Navbar>
        </div>
    );
}