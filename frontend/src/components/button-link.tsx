import { Button } from "@/components/ui/button";


export default function ButtonLink({ to, children }: { to: string, children: string }) {
    return (
        <form action={to}>
            <Button type="submit">
                {children}
            </Button>
        </form>
    );
}