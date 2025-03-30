import { Button } from "@/components/ui/button";



export default function ButtonsPage() {
  return (
    <div className="grid grid-cols-12 gap-6 w-full">
      <h2 className="col-span-12 text-2xl font-bold">Default Buttons</h2>
      <Button className="col-span-6 md:col-span-3">Default Button</Button>
      <Button variant="outline" className="col-span-6 md:col-span-3">Outline Button</Button>
      <Button variant="secondary" className="col-span-6 md:col-span-3">Secondary Button</Button>
      <Button variant="soft" className="col-span-6 md:col-span-3">Soft Button</Button>
      <Button variant="ghost" className="col-span-6 md:col-span-3">Ghost Button</Button>
      <Button variant="link" className="col-span-6 md:col-span-3">Link Button</Button>
      <h2 className="col-span-12 text-2xl font-bold">Semantic Buttons</h2>
      <Button color="success" className="col-span-6 md:col-span-3">Success Button</Button>
      <Button color="info" className="col-span-6 md:col-span-3">Info Button</Button>
      <Button color="warning" className="col-span-6 md:col-span-3">Warning Button</Button>
      <Button color="error" className="col-span-6 md:col-span-3">Error Button</Button>

      <h2 className="col-span-12 text-2xl font-bold">Sizes</h2>
      <Button size="sm" className="col-span-6 md:col-span-3">Small Button</Button>
      <Button size="md" className="col-span-6 md:col-span-3">Medium Button</Button>   
      <Button size="lg" className="col-span-6 md:col-span-3">Large Button</Button>

      <h2 className="col-span-12 text-2xl font-bold">Rounded</h2>
      <Button rounded="sm" className="col-span-6 md:col-span-3">Small</Button>
      <Button rounded="md" className="col-span-6 md:col-span-3">Medium</Button>   
      <Button rounded="lg" className="col-span-6 md:col-span-3">Large</Button>
      <Button rounded="full" className="col-span-6 md:col-span-3">Full</Button>

      <h2 className="col-span-12 text-2xl font-bold">Compound Variants</h2>
      <Button variant="outline" color="error" className="col-span-6 md:col-span-3">Outline Error</Button>
      <Button variant="soft" color="error" className="col-span-6 md:col-span-3">Soft Error</Button>
      <Button variant="outline" color="success" className="col-span-6 md:col-span-3">Outline Success</Button>
      <Button variant="soft" color="success" className="col-span-6 md:col-span-3">Soft Success</Button>
      <Button variant="outline" color="warning" className="col-span-6 md:col-span-3">Outline Warning</Button>
      <Button variant="soft" color="warning" className="col-span-6 md:col-span-3">Soft Warning</Button>
      <Button variant="outline" color="info" className="col-span-6 md:col-span-3">Outline Info</Button>
      <Button variant="soft" color="info" className="col-span-6 md:col-span-3">Soft Info</Button>

    </div>
  );
}
