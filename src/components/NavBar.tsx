"use client";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
  const items = [
    {
      label: "首頁 Home",
      icon: "pi pi-home",
      command: () => router.push("/"),
    },
    {
      label: "注冊 Register",
      icon: "pi pi-plus",
      command: () => router.push("/register"),
    },
    {
      label: "新增聯絡人 who",
      icon: "pi pi-plus",
      command: () => router.push("/who"),
    },

    {
      label: "登入 Login",
      icon: "pi pi-user",
      command: () => router.push("/login"),
    },
    {
      label: "检视联络人 ViewContact",
      icon: "pi pi-user",
      command: () => router.push("/view"),
    },
    {
      label: "會員管理 Member Management",
      icon: "pi pi-user",
      command: () => router.push("/members"),
    },
    {
      label: "联络人管理Contact Management",
      icon: "pi pi-user",
      command: () => router.push("/contact"),
    },
    {
      label: "購物車 Shopping Cart",
      icon: "pi pi-shopping-cart",
      command: () => router.push("/cart"),
    },
    {
      label: "訂單填寫 note write",
      icon: "pi pi-user",
      command: () => router.push("/note"),
    },
  ];
  const end = (
    <div className="flex align-items-center gap-2">
      <Button icon="pi pi-user" rounded text />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} end={end} />
    </div>
  );
}
