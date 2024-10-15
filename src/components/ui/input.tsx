import type { ComponentProps } from "react"

interface InputPrefixProps extends ComponentProps<'div'> { }

export function Prefix(props: InputPrefixProps) {
    return (
        <div {...props} className="outline-none" />
    )
}

interface InputControlProps extends ComponentProps<'input'> { }

export function Control(props: InputControlProps) {
    return (
        <input className="flex-1 border-0 bg-transparent p-0 outline-none text-zinc-900 placeholder-zinc-600" {...props} />
    )
}

export interface InputRootProps extends ComponentProps<'div'> { }

export function Root(props: InputRootProps) {
    return (
        <div className="flex items-center gap-2 h-14 rounded-full border border-transparent bg-white outline-none  px-3 py-2 shadow-sm hover:border-pink-500 focus-within:border-pink-500" {...props} />
    )
}

