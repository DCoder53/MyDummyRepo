// import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  const loggedIn = {firstName: 'Darshan' , lastName:'Thorat'};
  return (
      <main className="flex h-screen w-full font-inter">
         SIDEBAR
         {/* <Sidebar user={loggedIn}/> */}
          {children}
      </main>
  );
}
