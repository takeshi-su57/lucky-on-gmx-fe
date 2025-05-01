export default function Layout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1">
      <div className="flex w-[200px] flex-col overflow-auto border-r border-neutral-800">
        {sidebar}
      </div>
      <div className="relative flex h-full flex-1 flex-col overflow-auto bg-neutral-900 p-4">
        {children}
      </div>
    </div>
  );
}
