import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navItems = [
  "Prospects",
  "Entreprises",
  "Dossiers", // TODO
  "Modules",
  "Formateurs",
  "Ressources",
  "Sessions", // TODO
  "Agenda", // TODO
];
export const SideNav = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { push } = useRouter();
  return (
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 bg-card transition-transform duration-300 ease-in-out`}
    >
      <nav className="flex h-full flex-col space-y-2 p-4 pt-20">
        {navItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className="w-full justify-start"
            onClick={() => {
              push(`/${item.toLowerCase()}`);
              setSidebarOpen(false);
            }}
          >
            {item}
          </Button>
        ))}
      </nav>
    </aside>
  );
};
