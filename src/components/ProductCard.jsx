import styled from "styled-components";

const ProductCard = ({ name, description, thumbnail }) => {
    return (
      <div>

        <ProdImg Width='400' Height='250' Top='3'src={thumbnail} alt={name} />
        <ProductTitle>
        {name}
        </ProductTitle>
        <ProductBody>
        {description}
        </ProductBody>
      </div>
    );
  };

  const ProdImg = styled.img`
    object-fit: cover;
    width: 400px;
    height: 250px;
  `

  const ProductTitle = styled.div`
height: 26px;
width: 400px;
left: 0px;
top: 219px;
font-family: Noto Sans CJK KR;
font-size: 20px;
font-weight: 700;
line-height: 26px;
letter-spacing: -0.01em;
text-align: left;
padding: 12px 0px;
white-space: pre-wrap;
  `;  
  const ProductBody = styled.div`
height: 42px;
width: 400px;
left: 0px;
top: 257px;
font-family: Noto Sans CJK KR;
font-size: 16px;
font-weight: 400;
line-height: 21px;
letter-spacing: -0.01em;
text-align: left;
padding: 0px 0px 40px 0px;
display: block;
white-space: pre-line;
  `;  
  export default ProductCard;