import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Page not found</h1>
          <p className="lead">The page you are looking for is unavailable.</p>
          <Link className="button" href="/home">
            Return Home
          </Link>
        </div>
      </section>
    </main>
  );
}
