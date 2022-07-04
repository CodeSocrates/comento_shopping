import styled from 'styled-components';

const ProductCard = ({name, description, thumbnail})=>{
  return (
    <div>
      <imgSize>
        <img
          width="341"
          height="204"
          src={thumbnail}
          alt={name}
        />
      </imgSize>
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
};

const imgSize = styled.img`
  object-fit: cover; 
`;

export default ProductCard;