// Exports a Wrapper component that covers the entire page ( high z-index )
export default function FullPage({ children, className = "" }) {
  return (
    <div
      className={`fixed top-0 z-[1001] min-h-screen min-w-[100vw] bg-background ${className}`}
    >
      {children}
    </div>
  );
}
