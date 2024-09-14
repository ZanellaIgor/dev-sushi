import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getAllProducts } from '@/service/product';
import { Product } from '@/types/products';
import { ProductEmpty } from './empty';
import { ProductItem } from './item';

type Tab = {
  title: string;
  value: string;
  products: Product[];
};

export const ProductsTab = async () => {
  const products = await getAllProducts();
  const tabs: Tab[] = [
    {
      title: 'Sushi',
      value: 'sushi',
      products: products.filter((product) => product.category === 'sushi'),
    },
    {
      title: 'Temaki',
      value: 'temaki',
      products: products.filter((product) => product.category === 'temaki'),
    },
    {
      title: 'Combinados',
      value: 'pack',
      products: products.filter((product) => product.category === 'pack'),
    },
    {
      title: 'Bebidas',
      value: 'beverage',
      products: products.filter((product) => product.category === 'beverage'),
    },
  ];

  return (
    <Tabs>
      <TabsList className="flex">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value} className="flex-1">
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-6">
          {tab.products.length > 0 && (
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {tab.products.map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
            </div>
          )}
          {tab.products.length === 0 && <ProductEmpty />}
        </TabsContent>
      ))}
    </Tabs>
  );
};
