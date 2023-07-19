import Error404Illustration from "./_components/graphics/404";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 dark:bg-slate-950 dark:text-white">
      <h1 className="mb-1 text-4xl font-bold">Error 404</h1>

      <p className="text-lg text-slate-600 dark:text-slate-400">
        Oh no! You&rsquo;ve found a page that doesn&rsquo;t exist.
      </p>

      <Error404Illustration className="w-full max-w-sm dark:invert" />
      <footer className="text-xs text-slate-600 dark:text-slate-400">
        <p>
          <a href="https://storyset.com/web">Illustration by Storyset</a>
        </p>
      </footer>
    </main>
  );
}
