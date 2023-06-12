import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <h1 className="text-2xl">From _app.tsx</h1> */}
      <nav className="flex">
        <Link href={"/"} className="mx-auto">
          Home
        </Link>
        <Link href={"/dashboard"} className="mx-auto">
          Dashboard
        </Link>
        <Link href={"/login"} className="mx-auto">
          Login
        </Link>
        <Link href={"/signup"} className="mx-auto">
          Signup
        </Link>
      </nav>

      <Component {...pageProps} />
    </div>
  );
}
