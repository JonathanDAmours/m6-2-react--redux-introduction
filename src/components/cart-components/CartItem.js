import React from "react";
import styled from "styled-components";
import { VscClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../../actions";

const CartItem = ({ itemId }) => {
  const item = useSelector((state) => {
    return state[itemId];
  });

  console.log(item);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeItem(item));
  };
  return (
    <Wrapper>
      <Header>
        <Title>{item.title}</Title>
        <StyledVscClose onClick={handleDelete} />
      </Header>
      <Item>
        <Span>Quantity:</Span>
        <Input
          onChange={(event) => {
            dispatch(
              updateQuantity({ id: item.id, quantity: event.target.value })
            );
          }}
          value={item?.quantity}
        ></Input>
      </Item>
    </Wrapper>
  );
};

const Input = styled.input`
  background-color: transparent;
  border-bottom: 3px solid white;
  color: white;
  width: 30px;
  height: 20px;
  padding-bottom: 3px;
  text-align: center;
  font-weight: bold;
`;

const Wrapper = styled.div`
  border: 3px dashed gray;
  margin-bottom: 5px;
`;

const StyledVscClose = styled(VscClose)`
  width: 30px;
  height: 30px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;

const Header = styled.div`
  padding: 0px 20px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0;
  padding: 10px 0;
`;

const Span = styled.span`
  font-size: 18px;
  margin-right: 20px;
`;

const Item = styled.div`
  padding: 10px 20px;
  color: white;
  display: flex;
  background-color: #301732;
`;

export default CartItem;
