import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  console.log(params.productId);
  return (
    <section>
      <h1>Product details</h1>
      <h3>{params.productId}</h3>
    </section>
  );
};

export default ProductDetails;
