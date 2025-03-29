import { Outlet } from "react-router-dom";
import { MainNavBar } from "../ui/navbar/MainNavBar";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainNavBar />
      <main className="flex-1 container mx-auto py-6 px-4">
        <Outlet />
      </main>
    </div>
  );
} 