import { Link } from "react-router-dom";

const componentes = [
  {
    title: "Botones",
    href: "/componentes/botones",
    description: "Diferentes estilos de botones para tu aplicación.",
  },
  {
    title: "Tarjetas",
    href: "/componentes/tarjetas",
    description: "Componentes de tarjetas para mostrar información.",
  },
  {
    title: "Formularios",
    href: "/componentes/formularios",
    description: "Elementos de formulario con validación.",
  },
];

export function ComponentsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Componentes</h1>
      <p className="text-muted-foreground">
        Explora nuestra biblioteca de componentes UI.
      </p>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {componentes.map((componente) => (
          <Link 
            key={componente.title} 
            to={componente.href}
            className="rounded-lg border p-4 block hover:bg-accent transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2">{componente.title}</h2>
            <p className="text-muted-foreground">
              {componente.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
} 