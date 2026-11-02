import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-white px-4">
      <div className="max-w-lg text-center">
        <p className="text-8xl font-extrabold text-green-600">404</p>

        <h1 className="mt-6 text-3xl font-bold text-gray-900 sm:text-4xl">
          Page Not Found
        </h1>

        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for does not exist or may have
          been removed.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}