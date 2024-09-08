"use client";

import Link from "next/link"
// import { CircleUser, Menu, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

import Navbar from "@/components/layout/navbar";

const subNavbarItems = [
    { name: "General", link: "#" },
    { name: "Privacy & Safety", link: "#" },
    { name: "Security", link: "#" },
    { name: "Integrations", link: "#" },
    { name: "Support", link: "#" },
    { name: "Organizations", link: "#" },
    { name: "Advanced", link: "#" },
]

import { useState } from 'react';

export default function Settings() {
    const [selectedSection, setSelectedSection] = useState('General');

    const handleLinkClick = (section: string) => {
        setSelectedSection(section);
    };

    return (
        <div>
            <Navbar>
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold text-accent-foreground">Settings</h1>
                </div>
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                    <nav className="grid gap-4 text-sm text-muted-foreground">
                        {subNavbarItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.link}
                                className={`${selectedSection === item.name ? 'font-semibold text-primary' : 'text-muted-foreground'}`}
                                onClick={() => handleLinkClick(item.name)}>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                    <div className="grid gap-6">
                        {selectedSection === 'General' && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Display Name</CardTitle>
                                    <CardDescription>
                                        Used to identify you in the social feed.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form>
                                        <Input placeholder="Display Name" />
                                    </form>
                                </CardContent>
                                <CardFooter className="border-t px-6 py-4">
                                    <Button>Save</Button>
                                </CardFooter>
                            </Card>
                        )}
                        {selectedSection === 'Privacy & Safety' && (
                            <Card>
                                <CardHeader>
                                    <CardTitle>Privacy Settings</CardTitle>
                                    <CardDescription>
                                        Manage your privacy settings.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form>
                                        <Input placeholder="Privacy Setting" />
                                    </form>
                                </CardContent>
                                <CardFooter className="border-t px-6 py-4">
                                    <Button>Save</Button>
                                </CardFooter>
                            </Card>
                        )}
                        {/* Add more sections as needed */}
                    </div>
                </div>
            </Navbar>
        </div>
    );
}