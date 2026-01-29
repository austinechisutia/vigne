import React from 'react';

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center p-8 bg-gray-50">
      <main className="flex flex-col gap-8 items-center sm:items-start w-full max-w-7xl">
        <header>
          <h1 className="text-4xl font-bold text-gray-800 mt-8">Welcome to Stella</h1>
        </header>
        <section>
          <p className="text-gray-600 text-lg">Review the navigation bar above. It is designed with semantic HTML.</p>
        </section>
      </main>
    </div>
  );
}
