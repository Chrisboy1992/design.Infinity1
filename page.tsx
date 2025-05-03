'use client';
import { useState } from 'react';
import CoverCreator from '../components/CoverCreator';

export default function HomePage() {
  const [user, setUser] = useState(null);

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Infinity1 Cover Designer</h1>
      {!user ? (
        <button className="bg-red-600 text-white px-4 py-2" onClick={() => setUser('demo')}>Login as Demo</button>
      ) : (
        <CoverCreator />
      )}
    </main>
  );
}
