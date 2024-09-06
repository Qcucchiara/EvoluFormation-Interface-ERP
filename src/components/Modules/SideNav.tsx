import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

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
export const SideNav = ({ sidebarOpen }: { sidebarOpen: boolean }) => {
  return (
    <aside
      className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed inset-y-0 left-0 z-50 w-64 bg-card transition-transform duration-300 ease-in-out`}
    >
      <nav className="h-full flex flex-col pt-20 p-4 space-y-2">
        {navItems.map((item, index) => (
          <Link key={index} href={`/${item.toLowerCase()}`} className="w-full">
            <Button
              key={index}
              variant="ghost"
              className="justify-start w-full"
            >
              {item}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
};
