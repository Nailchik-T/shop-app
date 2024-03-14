"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ReactNode } from "react";

interface ILink {
  id: number;
  name: string | ReactNode;
  path: string;
}

interface Props {
  navItems?: ILink[];
}

const Header: FC<Props> = ({ navItems }) => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <header
      className={`h-20 flex items-center mx-10  ${!navItems ? "justify-center" : "justify-between"}`}
    >
      <Link href={"/"}>
        <Image
          width={120}
          height={40}
          src={"/logo.svg"}
          alt={"магазин специй"}
        />
      </Link>

      <nav>
        <ul className={"flex items-center justify-center  gap-10"}>
          {navItems?.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className={`text-font-dark-blue font-light ${isActive(link.path) ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
