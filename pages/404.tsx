import Link from "next/link";
import Seo from "../components/Seo";

function NotFound() {
  return (
    <div>
      <Seo title="NOT FOUND" />
      <h1>Whare are you doing here?</h1>
      <Link href="/">
        <a>
          <h2>
            Go home &rarr;
          </h2>
        </a>
      </Link>
    </div>
  );
}

export default NotFound;
