export default function RootLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
