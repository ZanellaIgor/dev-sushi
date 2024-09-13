import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const ProductsTab = () => {
  return (
    <Tabs>
      <TabsList className="flex">
        <TabsTrigger value="tab1" className="flex-1">
          Tab 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="flex-1">
          Tab 2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Conteudo tab1</TabsContent>
      <TabsContent value="tab2">Conteudo tab2</TabsContent>
    </Tabs>
  );
};
