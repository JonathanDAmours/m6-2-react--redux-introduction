import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { getStoreItemArray } from "../../reducers/index";

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);
  const state = useSelector((state) => state);

  let preTotal = [];
  storeItems.map((item) => preTotal.push(item?.quantity * item?.price));
  let total = preTotal.reduce((a, b) => a + b, 0);
  let totalFormat = total / 100;

  console.log(storeItems, state);
  return (
    <Wrapper>
      <Main>
        <Header>
          <Title>Your cart</Title>
          <Desc>{storeItems.length} items</Desc>
        </Header>
        {storeItems.map((item) => (
          <CartItem itemId={item.id} key={item.id} />
        ))}
      </Main>
      <PurchaseSection>
        <Total>
          Total: <strong>${totalFormat}</strong>
        </Total>
        <PurchaseBtn>
          <Span>Purchase</Span>
        </PurchaseBtn>
      </PurchaseSection>
    </Wrapper>
  );
};

const Main = styled.div``;

const Span = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
  position: relative;
  top: -2px;
`;

const PurchaseBtn = styled.button`
  background-color: #ff406e;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  width: 40%;
  height: 60px;
  border-radius: 20px;
`;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 30px 40px 50px 40px;
  background-color: #401f43;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Header = styled.div`
  color: white;
  padding: 0;
  margin: 0;
  margin-bottom: 50px;
`;

const Desc = styled.p`
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
`;

const Total = styled.p`
  color: white;
  font-size: 30px;
  margin: 0;
  padding: 0;
`;

const PurchaseSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Cart;
