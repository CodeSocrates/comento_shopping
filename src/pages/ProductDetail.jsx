import DetailNavBar from '../components/DetailNavBar';
import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import { getProductDetail } from '../data/mockData';

const ProductDetail = ()=>{
  let { productId } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, []);

  return (
      <DetailNavBar />
  );
}

export default ProductDetail;