"use client";

import { usePathname } from "next/navigation";
import { UserButton } from "@/features/auth/components/user-button";
import MobileSidebar from "./mobile-sidebar";

const pathnameMap = {
  tasks: {
    title: "My Tasks",
    description: "Monitor all of your tasks in one place",
  },
  projects: {
    title: "My Projects",
    description: "Monitor all of your projects in one place",
  },
  members: {
    title: "My Members",
    description: "Monitor all of your members in one place",
  },
};

const defaultMap = {
  title: "Home",
  description: "Monitor all of your projects and tasks in one place",
};

const Navbar = () => {
  const pathname = usePathname();
  const pathnameParts = pathname.split("/");
  const patnameKey = pathnameParts[3] as keyof typeof pathnameMap;
  const { title, description } = pathnameMap[patnameKey] || defaultMap;
  return (
    <nav className="pt-4 px-6 flex items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>
      <MobileSidebar />
      <UserButton />
    </nav>
  );
};

export default Navbar;
