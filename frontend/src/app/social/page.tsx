import Navbar from "@/components/navbar";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Page() {
    return (
        <div>
            <Navbar>
                <div className="text-4xl text-accent-foreground">
                    Social
                </div>
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
            </Navbar>
        </div>
    );
}