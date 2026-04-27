"use client";

export default function Button({children, onClick, variant = "primary"}) {

    const variants = {
        primary: "px-12.5 py-3 text-red-500 hover:text-neutral-50 hover:bg-linear-to-r from-red-500/0 via-red-500 to-red-500/0 transition-all"
    }

    return (
        <button
            onClick={onClick}
            className={`${variants[variant]}`}
        >
            {children}
        </button>
    );
}