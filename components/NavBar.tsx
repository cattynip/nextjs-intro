import Link from "next/link";
import { useRouter } from "next/router";

function NavBar() {
  const router = useRouter();

  return (
    <nav>

      <img src="/vercel.svg" />

      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>
            Home
          </a>
        </Link>

        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>
            About
          </a>
        </Link>

        <Link href="/movies">
          <a className={router.pathname === "/movies" ? "active" : ""}>
            Movies
          </a>
        </Link>

        <a href="https://github.com/Novelier-Webbelier/nextjs-intro" target={"_blank"}>
          Github
        </a>
      </div>

      <style jsx global>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}

export default NavBar;
