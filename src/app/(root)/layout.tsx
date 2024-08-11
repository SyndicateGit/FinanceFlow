import Sidebar from "@/components/shared/Sidebar";


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
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn}/>
      <div>
        
      </div>
      {children}
    </main>
  );
}
