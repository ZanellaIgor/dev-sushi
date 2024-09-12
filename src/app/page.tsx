import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Header />
      <div className="mx-3">..</div>
      <Suspense fallback={<div>Loading...</div>}>ss</Suspense>
      <Footer />
    </div>
  );
}
