
export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) { 
    const loggedIn = {firstName: 'Darshan' , lastName:'Thorat'};
    return (
        <main className="flex h-screen w-full font-inter">
            {children}
        </main>
    );
  }
  