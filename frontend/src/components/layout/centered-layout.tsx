export default function CenteredLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-muted/40">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {children}
            </main>
        </div>
    );
}