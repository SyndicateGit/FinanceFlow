import Sidebar from "@/components/shared/Sidebar";
import Image from "next/image";
import Logo from "@/public/icons/LogoIcon.png"
import MobileNav from "@/components/shared/MobileNav.";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn:User = {
    id: "1",
    name: "Raymond Zeng",
    email: "email@email.com",
    phone: "123-456-7890",
    role: "USER",
    accountIds: ["1", "2", "3"]
  };

  return (
    <main className="flex h-screen w-full">
      <Sidebar user={loggedIn}/>
      <div className="flex size-full flex-col">
        <div className="flex h-16 items-center justify-between p-5 shadow-sm md:hidden">
          <Image src={Logo} width={30} height={30} alt="logo"/>
          <MobileNav user={loggedIn} />
        </div>
      {children}
      </div>
    </main>
  );
}
