import React, { useState } from "react";
import { Button } from "../ui/button";

const navItems = [
  "Prospects",
  "Entreprises",
  "Dossiers",
  "Modules",
  "Formateurs",
  "Ressources",
  "Sessions",
  "Agenda",
];
export const SideNav = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
  return (
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 bg-card transition-transform duration-300 ease-in-out`}
    >
      <nav className="h-full flex flex-col p-4 space-y-2">
        {navItems.map((item, index) => (
          <Button key={index} variant="ghost" className="justify-start">
            {item}
          </Button>
        ))}
      </nav>
    </aside>
  );
};
