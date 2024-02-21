import React, { useEffect, useState } from "react";

function Homepage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  if (loading) {
    return <div>Loading.........</div>;
  }
  return (
    <div className="bg-indigo-100  px-12 py-10 flex gap-4 flex-wrap justify-center items-center">
      {products && products.length > 0 ? (
        products.map((item) => (
          <div
            key={item.id}
            className=" bg-indigo-50 px-4 py-2 height-[350px] w-[350px] flex flex-col items-center justify-center gap-4"
          >
            <div>
              <img className="h-[200px] w-[200px]" src={item.image} alt="" />
            </div>
            <div>
              <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold " alt={item.title}>
                  {item.title.slice(0, 25)}....
                </h1>
                <span className="text-red-400 font-bold">
                  Rating : {item.rating.rate}
                </span>
              </div>
            </div>
            <button className="bg-indigo-400 px-4 py-2 rounded-lg hover:bg-orange-400">
              Add to cart
            </button>
          </div>
        ))
      ) : (
        <div>No products to show............</div>
      )}
    </div>
  );
}

export default Homepage;
