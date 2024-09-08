import { Button } from "@/components/ui/button";

interface ButtonLinkProps {
    to: string;
    children: string;
    className?: string;
}

export default function ButtonLink({ to, children, className }: ButtonLinkProps) {
    return (
        <form action={to}>
            <Button type="submit" className={className}>
                {children}
            </Button>
        </form>
    );
}