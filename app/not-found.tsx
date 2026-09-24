import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container page-hero">
      <h1>Page not found</h1>
      <p>That address is not on this site.</p>
      <Link className="btn btn-primary" href="/">Back home</Link>
    </div>
  );
}
