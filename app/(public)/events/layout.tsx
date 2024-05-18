export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="max-w-6xl mx-auto">
            {children}
        </main>
    )
}
