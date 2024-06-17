import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [currentProduct, setCurrentProduct] = useState({});
  const { productId } = useParams();
  fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => res.json())
    .then((json) => setCurrentProduct(json));
  useEffect(() => {}, [productId]);
  return <div></div>;
};

export default ProductDetails;
