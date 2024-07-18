
import Description from "./components/Description";
import Image from "./components/Image";
import Name from "./components/Name";
import Price from "./components/Price";
import { productData } from "../data/products";
import { useState } from "react";


function App() {
  const [products, setProducts] = useState(productData);


  return (
    <>
      <section className="grid grid-cols-4 gap-4">
        {
          products.map((product) => (
          <article
          className="shadow-md border-[1px] border-slate-200 rounded-md py-6 px-12 w-fit"
          key={product.id}>
            <Image thumbnail={product.images} />
            <Name title={product.title} />
            <Description description={product.description} />
            <Price price={product.price} />
          </article>
          ))
        }
      </section>
    </>
  )
}

export default App;