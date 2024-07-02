

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <div className='p-2 border-b-2 text-center'>20 % off</div>
    {children}
   </>
  );
}
