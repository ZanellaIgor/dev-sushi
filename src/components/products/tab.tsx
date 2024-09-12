import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

export const ProductsTab = () => {
  return (
    <Tabs>
      <TabsList>
        <TabsTrigger value="tab1"></TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
