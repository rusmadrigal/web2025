import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-nightBlack text-white px-6 py-16">
      <h1 className="text-6xl font-bold mb-4 text-theme">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Well, this is awkward...
      </h2>
      <p className="text-lg text-gray-400 max-w-xl mb-8">
        The page you’re looking for either doesn’t exist or took a break to optimize its meta tags.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-theme text-black font-semibold rounded-full hover:opacity-90 transition-all"
      >
        Back to safety
      </Link>

      <div className="mt-16 text-sm text-gray-600 dark:text-gray-500">
        (Don’t worry — even Google gets lost sometimes.)
      </div>
    </div>
  );
}
