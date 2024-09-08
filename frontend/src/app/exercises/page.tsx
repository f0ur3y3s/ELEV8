import Navbar from "@/components/navbar";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function TestPage() {
    return (
        <div>
            <Navbar>
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold">Exercises</h1>
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
                </div>
            </Navbar>
        </div>
    );
}