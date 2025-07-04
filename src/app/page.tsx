const appVersion = process.env.APP_VERSION ?? "_blank";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>App Version: {appVersion}</li>
          <li>Message: {process.env.MESSAGE}</li>
          <li>Runtime Message: {process.env.RUNTIME_MESSAGE}</li>
          <li>Last Deploy: June 8, 2025 9:56 PM</li>
        </ol>
      </main>
    </div>
  );
}
