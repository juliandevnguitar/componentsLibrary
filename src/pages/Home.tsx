export function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to My Component Library</h1>
      <p className="text-muted-foreground">
        A modern and accessible UI component library build with Shadcn/UI and Tailwind CSS.
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold mb-2">Reusable Components</h2>
          <p className="text-muted-foreground">
            Components designed to be reusable in different projects.
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold mb-2">Personalizable</h2>
          <p className="text-muted-foreground">
            Easy to customize to meet your needs.
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="text-xl font-semibold mb-2">Accesible</h2>
          <p className="text-muted-foreground">
            Built with accessibility in mind.
          </p>
        </div>
      </div>
    </div>
  );
} 