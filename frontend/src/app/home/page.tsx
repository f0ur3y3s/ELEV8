import Navbar from "@/components/layout/navbar";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Clock,
    Weight,
    Flame,
    Hash,
} from "lucide-react"

const briefOverview = [
    { name: "Time", icon: Clock, description: "Minutes worked out this week", value: "120", unit: "min" },
    { name: "Loss", icon: Flame, description: "Calories burned", value: "120", unit: "kcal" },
    { name: "Completed", icon: Hash, description: "Workouts completed", value: "4", unit: "workouts" },
    { name: "Overall", icon: Weight, description: "Pounds lifted", value: "50,000", unit: "lbs" },
]

export default function Homepage() {
    return (
        <div>
            <Navbar>
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold text-secondary-foreground">Dashboard</h1>
                </div>
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 lg:grid-cols-4">
                    {briefOverview.map((item) => (
                        <Card key={item.name} className="min-h-full">
                            <CardHeader>
                                <CardTitle className="text-2xl flex justify-between">
                                    {item.name}
                                    <item.icon className="font-bold text-muted-foreground" />
                                </CardTitle>
                                <CardDescription>{item.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="tabular-nums">
                                <span className="text-4xl font-bold">{item.value}{" "}</span>
                                <span className="text-muted-foreground">{item.unit}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>This is a card description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>This is the card content</p>
                        </CardContent>
                        <CardFooter>
                            <button className="btn">Click me</button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>This is a card description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>This is the card content</p>
                        </CardContent>
                        <CardFooter>
                            <button className="btn">Click me</button>
                        </CardFooter>
                    </Card>
                </div>
            </Navbar>
        </div>
    );
}