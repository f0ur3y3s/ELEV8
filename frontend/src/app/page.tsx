
import {
    Card,
    CardContent,
    // CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ButtonLink from "@/components/button-link";
import {
    Goal,
    Users,
    ArrowUpNarrowWide
} from "lucide-react";

import ThemeToggle from "@/components/theme-toggle"

const cardContent = [
    { title: "Track", icon: Goal, description: "Log your workouts, track your progress, and share your fitness journey with the elev8 community.", },
    { title: "Connect", icon: Users, description: "Stay motivated, connect with friends, and join challenges to push your limits.", },
    { title: "Elevate", icon: ArrowUpNarrowWide, description: "Elevate your fitness to the next level with analytics and workout templates.", },
]

export default function LandingPage() {
    return (
        <div className="bg-muted/40">
            <div className="flex p-8 justify-end">
                <ThemeToggle />
            </div>
            <div className="grid gap-16 sm:gap-2 min-h-screen items-center justify-items-center">
                <section className="flex flex-col grow text-center lg:pt-40 pt-20 lg:gap-8 gap-2">
                    <h1 className="text-4xl font-medium lg:text-6xl text-secondary-foreground">
                        Welcome to <span className="italic font-extrabold">elev8</span>
                    </h1>
                    <h2 className="text-lg font-light text-muted-foreground lg:text-xl">
                        Hi there! Ready to elevate your fitness to the next level?
                    </h2>
                    <div className="p-16">
                        <ButtonLink to="/home" className="text-lg">
                            Get started
                        </ButtonLink>
                    </div>
                </section>
                <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                    {cardContent.map((content, index) => (
                        <Card key={index} className="grid item-center justify-items-center lg:gap-8 sm:gap-2 pt-12 sm:pt-6">
                            <content.icon className="w-20 h-20 text-accent-foreground" />
                            <CardHeader>
                                <CardTitle className="text-4xl text-bold text-primary">{content.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="sm:w-full lg:w-3/4">
                                <p className="text-muted-foreground text-center">{content.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            {/* 
            <div className="grid items-center justify-items-center min-h-screen p-8 sm:p-20 gap-16 sm:gap-2 bg-muted/40">
                <section className="container flex flex-col grow text-center lg:items-center lg:gap-8 lg:py-20 py-10" >
                    <div className="flex flex-1 flex-col items-center gap-4 text-center lg:gap-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold lg:text-6xl text-secondary-foreground">
                                Welcome to elev8
                            </h1>
                            <h2 className="text-lg font-light text-muted-foreground lg:text-xl">
                                Elevate your fitness to the next level
                            </h2>
                        </div>
                        <ButtonLink to="/home">
                            Get started
                        </ButtonLink>
                    </div>
                    <div className="grid grid-cols-1 gap-8 py-8 lg:grid-cols-3">
                        {cardContent.map((content, index) => (
                            <Card key={index} className="grid item-center justify-items-center gap-6 sm:gap-2 py-6">
                                <content.icon className="w-20 h-20" />
                                <CardHeader>
                                    <CardTitle className="text-4xl text-bold">{content.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{content.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section >
            </div > */}
        </div>
    );
}
