import { ScreenProvider } from "../components/ScreenProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <ScreenProvider>
      <Component {...pageProps} />
    </ScreenProvider>
  );
}
