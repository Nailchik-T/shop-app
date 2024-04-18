import type { Metadata } from "next";
import Sidebar from "@/comonents/Sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Магазин специй",
  description: "Generated by create next app",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={"bg-gray-50"}>
      <div className={"flex"}>
        <Sidebar />
        {children}
      </div>
    </body>
  );
}

AdminLayout.layout = false;
