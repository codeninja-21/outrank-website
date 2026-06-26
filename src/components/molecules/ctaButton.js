"use client";

import Link from "next/link";

export default function CtaButton({ button_text }) {
    return (
        <Link href="/contact">
            <div className="w-115 h-115 p-2 bg-red-500 flex flex-col justify-between cursor-pointer max-lg:w-100 max-lg:h-100 max-lg:shrink-0 max-md:w-60 max-md:h-60">
                <div className="ml-auto">
                    <svg width="218" height="218" viewBox="0 0 218 218" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-52.5 h-52.5 max-md:size-25">
                        <path d="M28.2844 20.0003H197.99V189.706M186.205 31.7854L28.2844 189.706" stroke="#0A0A0A" strokeWidth="40" strokeMiterlimit="10" strokeLinecap="square"/>
                    </svg>
                </div>
                <h3 className="heading-3 max-w-15">{button_text}</h3>
            </div>
        </Link>
    );
}