import Link from "next/link"

export const NavLink = ({ href, title }: any) => {
    return (
        <Link href={href} className="font-semibold block text-sm text-white hover:text-zinc-500"
        >
            {title}
        </Link>
    )
}