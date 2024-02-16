"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils"
import { Organization } from "@clerk/nextjs/server";
import { OrganizationSwitcher } from "@clerk/nextjs";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"],
});

export const OrgSidebar = () => {
    return (
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
            <Link href='/'>
                <div className="flex items-center gap-x-2">
                    <Image
                        src='/logo.svg'
                        alt="Logo"
                        height={60}
                        width={60}
                    />
                    <span className={cn(
                        "font-semibold text-2xl",
                        font.className
                    )}>
                        Board
                    </span>
                </div>
            </Link>
            <OrganizationSwitcher
                hidePersonal
                appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            justifyContent:"center",
                            alignContent: 
                        }
                    }
                }}
            />
        </div>
    )
}