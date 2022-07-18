import DetailNavBar from '../components/DetailNavBar';
import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import { getProductDetail } from '../data/mockData';
import { useState } from 'react';

const ProductDetail = () => {
  //url에서 파라미터 변수(productId) 받아오는 로직
  let { productId } = useParams();
  const [product, setProduct] = useState();

  //형제 데이터를 가져온다음에 스테이트에 담아줌
  useEffect(() => {
    const result = getProductDetail(productId);
    setProduct(result);
  }, []);

  return (
      <>
      <DetailNavBar />
      {
        product && (
        <>
          <div>상품 ID : {product.id}</div>
          <img src={product.thumbnail} width="200" />
          <div>{product.name}</div>
          <div>{product.description}</div>
        </>
      )}
      </>
  );
}
export default ProductDetail;