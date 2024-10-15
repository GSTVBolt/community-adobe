import Link from "next/link";
import { NavLink } from "./nav-link";
import { twMerge } from 'tailwind-merge'
import { LogIn } from "lucide-react";

type Links = {
    path: string;
    title: string;
}

interface MenuOverlayProps {
    links: Links[];
    className?: string;
}

export const MenuOverlay = ({ links, className }: MenuOverlayProps) => {
    return (
        <ul className={twMerge("flex flex-col p-4 gap-4", className)}>
            {links.map((link, index) => (
                <li key={(index)}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}

            <div className="h-0.5 w-full bg-zinc-400" />

            <div className="flex items-center gap-1">
                <Link
                    href={"/login"}
                    className="font-semibold block text-lg text-white hover:text-zinc-500"
                >
                    Login

                </Link>

                <LogIn className="text-white" />
            </div>

        </ul>
    );
};