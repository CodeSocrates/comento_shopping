import styled from 'styled-components';

const DetailNavBar = ()=>{
  return (
    <div>
      <NavTitle>코멘토 쇼핑</NavTitle>
      <DetailImg 
      src={"https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"}
      alt={"비숑 블랙 머그잔"}
      />
      <ProductTitle>비숑 블랙 머그잔</ProductTitle>
      <ProdPrice>21,800원</ProdPrice>
      <ProdButton>상품 설명</ProdButton>
      <ProdButton>상품 후기</ProdButton>
    </div>
  );
};

const DetailImg = styled.img`
  width:100%;
  height:420px;
  padding-top:3px;
`

const NavTitle = styled.div`
  margin-top: 3px;
  padding: 17px;
  width: 100%;

  display: flex;
  align-items: center;
  text-align: center;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
`

const ProductTitle = styled.div`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;

  padding: 24px;
  padding-bottom: 8px;
`

const ProdPrice = styled.div`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
/* identical to box height, or 131% */

  letter-spacing: -0.01em;

  color: rgba(0, 0, 0, 0.86);
  padding: 0px;
  padding-left: 24px;
`

const ProdButton = styled.button`
  width: 50%;
  height: 48px;
`

export default DetailNavBar;