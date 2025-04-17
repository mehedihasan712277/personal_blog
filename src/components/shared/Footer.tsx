import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="mt-[50px] py-5 flex flex-col lg:flex-row items-center justify-between text-[--softTextColor] gap-[50px] lg:gap-5">
            <div className="flex-1 flex flex-col gap-[14px] items-start">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="lama blog" width={50} height={50} />
                    <p className="text-2xl font-bold">
                        {"Bloggers'"}
                    </p>
                </div>
                <p className="font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                    necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                    porro sequi, totam minima consequuntur, aspernatur deleniti vero
                    repellendus dorales.
                </p>
                <div className="mt-2 flex gap-2">
                    <Link href="#">
                        <Image src="/facebook.png" alt="Facebook" width={18} height={18} />
                    </Link>
                    <Link href="#">
                        <Image src="/instagram.png" alt="Instagram" width={18} height={18} />
                    </Link>
                    <Link href="#">
                        <Image src="/tiktok.png" alt="Tiktok" width={18} height={18} />
                    </Link>
                    <Link href="#">
                        <Image src="/youtube.png" alt="YouTube" width={18} height={18} />
                    </Link>
                </div>
            </div>

            <div className="flex-1 flex justify-between gap-12 md:gap-[50px] lg:gap-[100px] w-full lg:w-auto text-sm sm:text-base">
                <div className="flex flex-col gap-2 font-light">
                    <span className="font-bold">Links</span>
                    <Link href="/">Homepage</Link>
                    <Link href="/#blog">Blog</Link>
                    <Link href="/about">About</Link>
                    {/* <Link href="/">Contact</Link> */}
                </div>
                <div className="flex flex-col gap-2 font-light">
                    <span className="font-bold">Tags</span>
                    <Link href="/">Style</Link>
                    <Link href="/">Fashion</Link>
                    <Link href="/">Coding</Link>
                    <Link href="/">Travel</Link>
                </div>
                <div className="flex flex-col gap-2 font-light">
                    <span className="font-bold">Social</span>
                    <Link href="/">Facebook</Link>
                    <Link href="/">Instagram</Link>
                    <Link href="/">Tiktok</Link>
                    <Link href="/">Youtube</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
