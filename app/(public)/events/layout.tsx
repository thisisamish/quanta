export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="px-4 max-w-6xl mx-auto">
            {children}
        </main>
    )
}
