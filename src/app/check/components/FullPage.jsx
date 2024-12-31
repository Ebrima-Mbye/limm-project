export default function FullPage({ children }) {
  return (
    <div className="bg-background fixed z-[1001] top-0 min-h-screen min-w-[100vw]">
      {children}
    </div>
  );
}
