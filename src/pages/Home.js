// src/pages/Home.js
import Navigation from '../components/Navigation';
import ThemeButton from '../components/ThemeButton';
import ProductCard from '../components/ProductCard';
import styled from 'styled-components';

const Home = () => {
  return (
    <div>
      <NavStyle><Navigation /></NavStyle>
      <NavLine />

      <ThemeSection>
        <ThemeButton themeName={"#겨울방한템"} />
        <ThemeButton themeName={"#따순머그컵"} />
      </ThemeSection>

      <GrayLine />

      <ProductSection>
        <ProductCard
          name="비숑 블랙 머그잔"
          thumbnail={"https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"}
          description={"쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은\n블랙 & 화이트 비숑 머그잔입니다."}
        />

        <ProductCard
          name="가열 보온 티코스터 온열 원터치 컵 받침대"
          thumbnail={"https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg"}
          description={"언제나 따뜻하게 최대 12시간 동안\n최대 60도의 온도로 따듯한 차를 즐길 수 있습니다."}
        />

        <ProductCard
          name="벨루즈까사 솜사탕 파스텔 머그 4종 세트"
          thumbnail={"https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg"}
          description={"솜사탕처럼 부드러운 쉐입에 스트라이프 조각이\n더해져 심플하면서도 세련된 파스텔 컬러의 머그"}
          //JS가 다루는 스트링 타입 값
        />
      </ProductSection>

    </div>
  );
};

const ThemeSection = styled.div`
  display:flex;
  gap:13px;
  padding: 40px 24px;
`;

const GrayLine = styled.div`
  height: 8px;
  width: 100%;
  background: #EEEEEE;
`;

const ProductSection = styled.div`
  padding: 24px;
  width: 400px;
`;

const NavLine = styled.div`
  height: 1px;
  background: #EEEEEE;
`;

const NavStyle = styled.div`//내비게이션의 스타일 지정
  //위치 지정
  //position: relative;
  height: 63px;
  //left: 152px;
  width: 100%;
  //폰트 지정
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  //정렬 지정
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  //글꼴 색 지정
  color: #000000;
`;

export default Home;
