import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { TabsSkeleton } from '@/components/products/skeleton';
import { ProductsTab } from '@/components/products/tab';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-4xl flex-col px-3">
      <Header />
      <main className="flex min-h-0 flex-1 flex-col">
        <Suspense fallback={<TabsSkeleton />}>
          <ProductsTab />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
