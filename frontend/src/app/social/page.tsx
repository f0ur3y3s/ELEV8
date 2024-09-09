import Navbar from "@/components/layout/navbar";

import {
    Card,
    CardContent,
    CardDescription,
    // CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

type SocialPost = {
    name: string,
    username: string,
    content: string,
    usericon?: string,
};

let socialPosts: SocialPost[] = [
    { name: "John Doe", username: "@johndoe", content: "Loving the new updates!" },
    { name: "Jane Doe", username: "@janedoe", content: "Can't believe how amazing this app is!" },
    { name: "Michael Smith", username: "@mikesmith", content: "Had a great time exploring new features." },
    { name: "Emily Davis", username: "@emilydavis", content: "This app just keeps getting better." },
    { name: "Sarah Johnson", username: "@sarahj", content: "What a fantastic user experience!" },
    { name: "Robert Brown", username: "@robbrown", content: "Absolutely loving the design changes." },
    { name: "David Wilson", username: "@davewilson", content: "Super smooth performance on my device." },
    { name: "Laura Taylor", username: "@lauratt", content: "It's so easy to use now!" },
    { name: "James Miller", username: "@jamesmiller", content: "This has become my favorite app." },
    { name: "Olivia Martinez", username: "@oliviam", content: "I can't imagine life without this!" },
    { name: "Thomas Anderson", username: "@tomanderson", content: "A revolutionary update!" },
    { name: "Samantha Harris", username: "@samharris", content: "Brilliant UI!" },
    { name: "William Scott", username: "@willscott", content: "So happy with the improvements." },
    { name: "Grace White", username: "@gracewhite", content: "The new features are so handy." },
    { name: "Liam Martin", username: "@liammartin", content: "The app just works perfectly now." },
    { name: "Sophia Lewis", username: "@sophialewis", content: "The performance is top-notch!" },
    { name: "Matthew Walker", username: "@mattwalker", content: "Huge fan of the recent changes!" },
    { name: "Chloe Young", username: "@chloeyoung", content: "I use it every day now." },
    { name: "Daniel Lee", username: "@danlee", content: "The speed is incredible!" },
    { name: "Mia King", username: "@miaking", content: "This has changed the way I work!" },
    { name: "Noah Wright", username: "@noahwright", content: "Can't get enough of this app!" },
    { name: "Sophia Clark", username: "@sophiac", content: "A much-needed improvement!" },
    { name: "Lucas Hall", username: "@lucashall", content: "I love the new interface!" },
    { name: "Zoe Adams", username: "@zoeadams", content: "Every update gets better and better." },
    { name: "Benjamin Allen", username: "@benallen", content: "It's the little things that make a big difference." },
    { name: "Ella Perez", username: "@ellaperez", content: "Such a smooth experience!" },
    { name: "Alexander Parker", username: "@alexparker", content: "Kudos to the dev team!" },
    { name: "Madison Evans", username: "@madison", content: "Every day it impresses me more." },
    { name: "Joshua Rivera", username: "@joshuar", content: "Top-quality performance!" },
    { name: "Lily Baker", username: "@lilybaker", content: "I love everything about this app." },
    { name: "Elijah Gonzalez", username: "@elijahg", content: "The best app on the market right now!" },
    { name: "Isabella Hernandez", username: "@isabellah", content: "I can't imagine using anything else." },
    { name: "Logan Robinson", username: "@loganr", content: "This has exceeded my expectations!" },
    { name: "Ava Moore", username: "@avam", content: "Incredible functionality and design!" },
    { name: "Jacob Green", username: "@jacobg", content: "Everything works seamlessly." },
    { name: "Mason Thompson", username: "@masonthompson", content: "My favorite app just got better!" },
    { name: "Ella Carter", username: "@ellacarter", content: "Perfect for my daily needs." },
    { name: "Sebastian Foster", username: "@sebastianf", content: "Amazing attention to detail!" },
    { name: "Natalie Ramirez", username: "@natalier", content: "A flawless user experience!" },
    { name: "Christopher Gonzales", username: "@chrisg", content: "So glad I found this app!" },
    { name: "Aiden Flores", username: "@aidenf", content: "Blown away by the updates!" },
    { name: "Victoria Sanders", username: "@vickys", content: "Loving the sleek interface." },
    { name: "Oliver Price", username: "@oliverp", content: "Exceptional performance!" },
    { name: "Harper Bennett", username: "@harperb", content: "Every update is a pleasant surprise." },
    { name: "Jackson Gray", username: "@jacksong", content: "It's like they read my mind!" },
    { name: "Emma Rivera", username: "@emmar", content: "This update is exactly what I needed." },
    { name: "Lucas Russell", username: "@lucasrussell", content: "Smooth and intuitive design." },
    { name: "Ethan Edwards", username: "@ethane", content: "Superb work by the developers." },
    { name: "Hannah James", username: "@hannahjames", content: "The app feels so much faster!" },
    { name: "Jack Rodriguez", username: "@jackrodriguez", content: "A must-have app for everyone!" },
    { name: "Scarlett Morgan", username: "@scarlettm", content: "Every feature is well thought out." },
    { name: "James Ward", username: "@jamesw", content: "The updates are just fantastic." },
    { name: "Ava Bailey", username: "@avab", content: "The app has been rock solid!" },
    { name: "Mason Brooks", username: "@masonbrooks", content: "Great work with the latest patch!" },
    { name: "Liam Sanders", username: "@liamsanders", content: "Couldn't ask for a better app." },
    { name: "Sophia Bell", username: "@sophiab", content: "The updates keep getting better!" },
    { name: "Jacob James", username: "@jacobj", content: "So intuitive and easy to use." },
    { name: "Mia Barnes", username: "@miab", content: "Love how responsive it is." },
    { name: "Elijah White", username: "@elijahwhite", content: "What an incredible app!" },
    { name: "Isabella Walker", username: "@isabellaw", content: "I use this every single day." },
    { name: "Lucas Moore", username: "@lucasmoore", content: "Game-changing update!" },
    { name: "Ella Reed", username: "@ellareed", content: "Simply the best!" },
    { name: "Alexander Hill", username: "@alexhill", content: "Super reliable and efficient." },
    { name: "Grace Scott", username: "@gracescott", content: "Love the look and feel!" },
    { name: "Daniel Kelly", username: "@danielk", content: "Makes my life so much easier." },
    { name: "Madison Foster", username: "@madisonf", content: "They nailed this update!" },
    { name: "Michael Phillips", username: "@mikep", content: "Incredible speed and efficiency." },
    { name: "Sophia Evans", username: "@sophiae", content: "I'm amazed by the improvements!" },
    { name: "Noah King", username: "@noahking", content: "Top-notch app experience!" },
    { name: "Olivia Ramirez", username: "@oliviar", content: "I tell everyone about this app." },
    { name: "Jack Young", username: "@jackyoung", content: "So happy with this latest version!" },
    { name: "Chloe Mitchell", username: "@chloem", content: "It's my go-to app now." },
    { name: "James Carter", username: "@jamescarter", content: "Flawless functionality!" },
    { name: "Emily Diaz", username: "@emilyd", content: "Can't wait for future updates!" },
    { name: "Lucas Campbell", username: "@lucasc", content: "This app just gets me." },
    { name: "Charlotte Nelson", username: "@charlotten", content: "Such a smooth experience." },
    { name: "William Brooks", username: "@willbrooks", content: "Consistently great performance!" },
    { name: "Mia Reed", username: "@miareed", content: "Can't recommend this enough." },
]

socialPosts = socialPosts.map((post) => ({ ...post, usericon: `https://api.dicebear.com/9.x/pixel-art/svg?seed=${Math.random()}` }))

export default function Page() {
    return (
        <div>
            <Navbar>
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold  text-secondary-foreground">Social</h1>
                </div>
                {/* <div className="mx-auto grid w-full max-w-6xl items-start gap-6 lg:grid-cols-4"> */}
                <div className="mx-auto flex flex-col w-full max-w-6xl items-start gap-6 lg:grid-cols-4">
                    {socialPosts.map((post) => (
                        <Card key={post.username}>
                            <CardHeader>
                                <CardTitle className="text-2xl flex items-center gap-4">
                                    <Avatar className="sm:flex">
                                        <AvatarImage src={post.usericon} alt={post.username} loading="lazy" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className="grid gap-1 text-left">
                                        {post.name}
                                        <CardDescription className="font-thin">{post.username}</CardDescription>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{post.content}</p>
                            </CardContent>
                        </Card>

                    ))}
                </div>
            </Navbar >
        </div >
    );
}