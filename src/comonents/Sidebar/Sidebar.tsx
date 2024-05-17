"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { router } from "next/client";
import Cookies from "js-cookie";

const NavLinks = [
  { id: 1, name: "Добавление товара", path: "/admin/add-new-product" },
  { id: 2, name: "Добавление категории", path: "/admin/add-new-category" },
  { id: 3, name: "Список товаров", path: "/admin/list" },
  { id: 4, name: "Выход", path: "/" },
];

const handleLogout = () => {
  Cookies.remove("loggedin");
  router.push("/");
};

const Sidebar = () => {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <div className={"p-12 w-96"}>
      <h1 className={"text-font-dark-blue text-3xl font-bold"}>Админ панель</h1>
      <aside>
        <ul className={"bg-white rounded-2xl p-5 flex flex-col gap-4"}>
          {NavLinks.map((link) => {
            return (
              <li key={link.id}>
                {link.name === "Выход" ? (
                  <Link
                    href={link.path}
                    onClick={handleLogout}
                    className={`p-2 font-light text-font-dark-blue ${isActive(link.path) ? "bg-card-3 rounded-lg " : ""}`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <Link
                    href={link.path}
                    className={`p-2 font-light text-font-dark-blue ${isActive(link.path) ? "bg-card-3 rounded-lg " : ""}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};
export default Sidebar;
