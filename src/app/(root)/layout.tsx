'use client'
import Sidebar from "@/components/shared/Sidebar";
import Image from "next/image";
import Logo from "@/public/icons/LogoIcon.png"
import MobileNav from "@/components/shared/MobileNav.";
import { getUser } from "@/services/user.services";
import { defaultUser, User } from "@/Models/UserModel";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [user, setUser] = useState<User>(defaultUser);
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUser();
      setUser(user);
    }
    fetchUser();
  }, []);

  return (
    <main className="flex h-screen w-full">
      <Sidebar user={user}/>
      <div className="flex size-full flex-col">
        <div className="flex h-16 items-center justify-between p-5 shadow-sm md:hidden">
          <Image src={Logo} width={30} height={30} alt="logo"/>
          <MobileNav user={user} />
        </div>
      {children}
      </div>
    </main>
  );
}
