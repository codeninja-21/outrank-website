"use client";
{/* <img src="/image/arrow-forward-sharp.svg" alt="" className="" /> */}
export default function Button({children, onClick, variant = "primary"}) {

    const variants = {
        primary: "px-12.5 py-3 flex flex-row justify-center items-center gap-2 text-red-500 hover:text-neutral-50 hover:bg-linear-to-r from-red-500/0 via-red-500 to-red-500/0 cursor-pointer transition-all"
    }

    return (
        <button
            onClick={onClick}
            className={`${variants[variant]}`}
        >
            {children}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.38462 3L13 8L8.38462 13M12.359 8H3" stroke="currentColor" strokeMiterlimit="10" strokeLinecap="square"/>
            </svg>
        </button>
    );
}