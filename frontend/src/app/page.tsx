
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ButtonLink from "@/components/button-link";

export default function LandingPage() {
  return (
    <div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Welcome to elev8</CardTitle>
              {/* <CardDescription>Your new fitness companion</CardDescription> */}
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p>Whether you&apos;re lifting, running, or working on endurance, we&apos;ve got you covered.</p>
              <p>Log your workouts, track your progress, and share your fitness journey with the Elev8 community. </p>
              <p>Stay motivated, connect with friends, and join challenges to push your limits. </p>
              <p>Let&apos;s elevate your fitness to the next level!</p>
            </CardContent>
            <CardFooter>
              {/* <Button>Let&apos;s go!</Button> */}
              <ButtonLink to="/home">Let&apos;s go!</ButtonLink>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div >
  );
}
