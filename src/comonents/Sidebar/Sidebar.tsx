"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = [
  { id: 1, name: "Добавление товара", path: "/add-new-product" },
  { id: 2, name: "Добавление категории", path: "/add-category" },
  { id: 3, name: "Список товаров", path: "/list" },
  { id: 4, name: "Выход", path: "/exit" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <>
      <h1 className={"text-font-dark-blue text-3xl font-bold"}>Админ панель</h1>
      <aside>
        <ul className={"bg-white rounded-2xl p-5 flex flex-col gap-4"}>
          {NavLinks.map((link) => {
            return (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className={`font-light text-font-dark-blue ${isActive(link.path) ? "active" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};
export default Sidebar;
