import { fetchFeaturedProducts } from "@/utils/action";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGird from "../products/ProductsGird";

async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();
  if (products.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGird products={products} />
    </section>
  );
}

export default FeaturedProducts;
