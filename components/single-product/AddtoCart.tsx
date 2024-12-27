import { Button } from "../ui/button";

function AddtoCart({ productID }: { productID: string }) {
  return (
    <Button className="capitalize mt-8" size="lg">
      add to cart
    </Button>
  );
}

export default AddtoCart;
