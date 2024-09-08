"use client";

import Link from "next/link"
import {
    Home,
    LineChart,
    PanelLeft,
    Settings,
    Users2,
    Dumbbell,
    Activity,
    User,
    LogOut,
    // File,
    // ListFilter,
    // MoreHorizontal,
    // PlusCircle,
    // Search,
    // ShoppingCart,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider,
} from "@/components/ui/tooltip"

import ThemeToggle from "@/components/theme-toggle"
import { usePathname } from "next/navigation";


const navbarItems = [
    { name: "Dashboard", icon: Home, link: "/home" },
    { name: "Exercises", icon: Activity, link: "/exercises" },
    { name: "Workouts", icon: Dumbbell, link: "/workouts" },
    { name: "Social", icon: Users2, link: "/social" },
    { name: "Analytics", icon: LineChart, link: "/analytics" },
];


export default function Navbar({ children }: Readonly<{ children: React.ReactNode }>) {
    const currentPath = usePathname();

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-card sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 py-4">
                    <Link
                        href="#"
                        className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                    >
                        <Dumbbell className="h-4 w-4 transition-all group-hover:scale-110" />
                        <span className="sr-only">ELEV8</span>
                    </Link>
                    <TooltipProvider>
                        {navbarItems.map((item) => (
                            <Tooltip key={item.name}>
                                <TooltipTrigger asChild>
                                    <Link
                                        href={item.link}
                                        // className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary md:h-8 md:w-8"
                                        className={`flex h-9 w-9 items-center justify-center transition-colors hover:text-primary md:h-8 md:w-8 rounded-lg ${currentPath === item.link ? 'bg-accent text-accent-foreground' : 'text-muted-foreground '}`}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        <span className="sr-only">{item.name}</span>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent side="right">{item.name}</TooltipContent>
                            </Tooltip>
                        ))}
                    </TooltipProvider>
                </nav>
                {/* <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href="/settings"
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-primary md:h-8 md:w-8"
                                >
                                    <Settings className="h-5 w-5" />
                                    <span className="sr-only">Settings</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Settings</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav> */}
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 justify-between">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" className="sm:hidden text-muted-foreground hover:text-primary">
                                <PanelLeft className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="sm:max-w-xs backdrop-blur-sm">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    href="#"
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                >
                                    <Dumbbell className="h-5 w-5 transition-all group-hover:scale-110" />
                                    <span className="sr-only">ELEV8</span>
                                </Link>
                                {/* map items */}
                                {navbarItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.link}
                                        className={`flex items-center gap-4 px-2.5 ${currentPath === item.link ? 'text-foreground font-bold' : 'text-muted-foreground hover:text-foreground '}`}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        {item.name}
                                    </Link>
                                ))}
                                {/* <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                >
                                    <Settings className="h-5 w-5" />
                                    Settings
                                </Link> */}
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <div className="relative ml-auto flex gap-2">
                        <ThemeToggle />

                        <DropdownMenu >
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="overflow-hidden rounded-full text-muted-foreground hover:text-primary bg-card hover:bg-accent"
                                >
                                    <User className="h-5 w-5" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <User className="h-4 w-4 mr-2" />
                                    <a href="/account/settings">
                                        Profile
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="h-4 w-4 mr-2" />
                                    <a href="/account/settings">
                                        Settings
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <LogOut className="h-4 w-4 mr-2" />
                                    <a href="/">
                                        Logout
                                    </a>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                </header >
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    {children}
                </main>
            </div >
        </div >
    )
}
