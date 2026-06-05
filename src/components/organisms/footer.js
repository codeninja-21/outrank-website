import getFooter from "@/services/footer.service";

export default async function Footer() {

    const dataSupabase = await getFooter();

    return (
        <section className="w-full h-screen">
            <div className="w-full h-full">
                <div className="w-full h-[35vh] bg-linear-to-t from-neutral-950/90 to-neutral-950/0">
                </div>

                <div className="relative w-full h-[65vh] pt-12 pb-8 bg-red-600 flex flex-col items-center justify-between max-md:min-h-150 max-sm:pb-25">
                    
                    <div className="flex flex-col items-center gap-6">
                        <h2 className="display-lg text-neutral-100">{dataSupabase[0].title}</h2>
                        <div className="flex flex-col items-center gap-2">
                            <h6 className="heading-6 text-neutral-100">{dataSupabase[0].sub_title}</h6>
                            <p className="body-sm text-neutral-100">{dataSupabase[0].copyright}</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-16 max-sm:gap-8">
                        <div className="flex flex-col items-center gap-4">
                            <p className="body-sm text-neutral-100">{dataSupabase[0].address_title}</p>
                            <div className="flex flex-col items-center gap-1">
                                <p className="body-md text-neutral-100">{dataSupabase[0].address}</p>
                                <p className="body-md text-neutral-100">{dataSupabase[0].address_city}</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-8">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="5.95254" cy="5.95254" r="1.95254" fill="#F5F5F5"/>
                                <rect x="4.3252" y="9.36914" width="3.25424" height="10.6305" fill="#F5F5F5"/>
                                <rect x="9.69482" y="9.36914" width="3.25424" height="10.6305" fill="#F5F5F5"/>
                                <path d="M12.9491 10.5086C12.9491 10.5086 13.9426 9.55739 14.7664 9.26114C16.2015 8.74504 17.6995 8.95653 18.8882 9.91198C19.9613 10.7745 20.0003 12.2713 20.0003 12.9764C20.0003 15.0374 20.0003 20.0001 20.0003 20.0001H16.746C16.746 20.0001 16.6374 14.6035 16.6374 14.1967C16.6374 13.2205 15.444 11.6205 14.1694 12.2984C12.7774 13.0389 12.9491 14.5222 12.9491 14.5222L12.9491 10.5086Z" fill="#F5F5F5"/>
                            </svg>
                            
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5117 12.5752L11.002 13.3359L11.0898 13.4736L10.9834 13.5977L6.25293 19.0889L6.1875 19.1641H4.52637L4.83398 18.8037L10.1621 12.5518L10.3525 12.3271L10.5117 12.5752Z" fill="#F5F5F5" stroke="#F5F5F5" strokeWidth="0.4375"/>
                                <path d="M18.5806 4.78125L18.269 5.14258L13.186 11.042L13.0024 11.2539L12.8413 11.0254L12.3247 10.291L12.2271 10.1523L12.3374 10.0234L16.7407 4.8584L16.8062 4.78125H18.5806Z" fill="#F5F5F5" stroke="#F5F5F5" strokeWidth="0.4375"/>
                                <path d="M5.82617 5.43457L14.8242 18.5615L17.7207 18.5215L8.73926 5.43457H5.82617Z" stroke="#F5F5F5" strokeWidth="0.869903"/>
                                <path d="M4.58496 4.78125L4.81934 5.12402L14.416 19.124L14.4824 19.2207L14.5996 19.2188L18.541 19.1641L18.9492 19.1592L18.7188 18.8223L9.14941 4.87598L9.08398 4.78125H4.58496Z" stroke="#F5F5F5" strokeWidth="0.4375"/>
                            </svg>
                            
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.3332 5.33321C16.2165 5.33585 17.0629 5.68791 17.6875 6.31251C18.3121 6.9371 18.6641 7.78348 18.6668 8.66679V15.3332C18.6641 16.2165 18.3121 17.0629 17.6875 17.6875C17.0629 18.3121 16.2165 18.6641 15.3332 18.6668H8.66679C7.78348 18.6641 6.9371 18.3121 6.31251 17.6875C5.68791 17.0629 5.33585 16.2165 5.33321 15.3332V8.66679C5.33585 7.78348 5.68791 6.9371 6.31251 6.31251C6.9371 5.68791 7.78348 5.33585 8.66679 5.33321H15.3332ZM15.3332 4H8.66679C6.1 4 4 6.1 4 8.66679V15.3332C4 17.9 6.1 20 8.66679 20H15.3332C17.9 20 20 17.9 20 15.3332V8.66679C20 6.1 17.9 4 15.3332 4Z" fill="#F5F5F5"/>
                                <path d="M16.3332 8.66699C16.1354 8.66699 15.9421 8.60834 15.7776 8.49846C15.6132 8.38858 15.485 8.2324 15.4093 8.04968C15.3336 7.86695 15.3138 7.66588 15.3524 7.4719C15.391 7.27792 15.4863 7.09974 15.6261 6.95989C15.766 6.82003 15.9441 6.72479 16.1381 6.68621C16.3321 6.64762 16.5332 6.66743 16.7159 6.74311C16.8986 6.8188 17.0548 6.94697 17.1647 7.11142C17.2746 7.27587 17.3332 7.46921 17.3332 7.66699C17.3335 7.79839 17.3078 7.92856 17.2577 8.05001C17.2075 8.17146 17.1339 8.28181 17.041 8.37473C16.948 8.46764 16.8377 8.54129 16.7162 8.59145C16.5948 8.6416 16.4646 8.66727 16.3332 8.66699ZM12 9.33342C12.5274 9.33342 13.043 9.48983 13.4816 9.78286C13.9201 10.0759 14.2619 10.4924 14.4638 10.9797C14.6656 11.467 14.7184 12.0032 14.6155 12.5205C14.5126 13.0378 14.2587 13.513 13.8857 13.8859C13.5127 14.2589 13.0376 14.5129 12.5203 14.6157C12.003 14.7186 11.4668 14.6658 10.9795 14.464C10.4922 14.2622 10.0757 13.9203 9.78265 13.4818C9.48962 13.0432 9.33322 12.5276 9.33322 12.0002C9.33397 11.2932 9.61518 10.6153 10.1151 10.1153C10.6151 9.61538 11.293 9.33418 12 9.33342ZM12 8.00021C11.2089 8.00021 10.4355 8.2348 9.77772 8.67433C9.11992 9.11385 8.60723 9.73857 8.30448 10.4695C8.00173 11.2004 7.92252 12.0046 8.07686 12.7806C8.2312 13.5565 8.61216 14.2692 9.17157 14.8286C9.73098 15.388 10.4437 15.769 11.2196 15.9233C11.9956 16.0777 12.7998 15.9985 13.5307 15.6957C14.2616 15.393 14.8864 14.8803 15.3259 14.2225C15.7654 13.5647 16 12.7913 16 12.0002C16 10.9393 15.5786 9.92193 14.8284 9.17178C14.0783 8.42163 13.0609 8.00021 12 8.00021Z" fill="#F5F5F5"/>
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-row items-center gap-6 max-sm:flex-col">
                        <a href="" className="body-xsm text-neutral-100">{dataSupabase[0].license_text}</a>
                        <a href="" className="body-xsm text-neutral-100">{dataSupabase[0].style_guide_text}</a>
                        <a href="" className="body-xsm text-neutral-100">{dataSupabase[0].not_found_text}</a>
                        <a href="" className="body-xsm text-neutral-100">{dataSupabase[0].changelog_text}</a>
                    </div>

                    <div className="absolute bottom-8 right-8 max-sm:w-full max-sm:flex max-sm:justify-center max-sm:right-0">
                        <p className="body-xsm text-neutral-100">{dataSupabase[0].design_by}</p>
                    </div>

                </div>
            </div>
        </section>
    );
}