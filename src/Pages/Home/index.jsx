import React, { useContext, useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { useParams } from "react-router-dom";

export const Home = () => {
  const context = useContext(ShoppingCartContext);
  const [itemsByCategory, setItemsByCategory] = useState(context.items);
  const { category } = useParams();
  useEffect(() => {
    if (category) {
      setItemsByCategory(
        context.items?.filter(
          (item) => item.category.name.toLowerCase() === category.toLowerCase()
        )
      );
    } else {
      setItemsByCategory(context.items);
    }
  }, [context.items, category]);

  const [searchValue, setSearchValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(itemsByCategory);

  useEffect(() => {
    setFilteredItems(
      itemsByCategory?.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, itemsByCategory]);

  return (
    <Layout>
      <div className="flex justify-center items-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border border-black w-64 p-4 mb-6 focus:outline-none sm:w-80"
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-1 justify-center justify-items-center max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
        {filteredItems < 1 ? (
          <p className="text-center text-2xl col-span-4">
            There are not coincidences for your search
          </p>
        ) : (
          filteredItems?.map((item) => <Card key={item.id} data={item} />)
        )}

        {/* {renderView()} */}
      </div>
      <ProductDetail />
    </Layout>
  );
};
