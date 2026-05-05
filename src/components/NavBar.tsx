"use client";

import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/hello", label: "Olá IA" },
    { to: "/riddle", label: "Charada" },
    { to: "/list", label: "Lista" },
    { to: "/bbq", label: "Churrasco" },
  ];

  return (
    <nav className="w-full bg-primary/10 dark:bg-primary/20 py-2 mb-6">
      <ul className="flex justify-center gap-6 text-sm">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-primary-foreground hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;