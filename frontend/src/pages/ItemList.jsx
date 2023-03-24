import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import AddItemForm from "../components/AddItemForm";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {}, []);

  return (
    <StyledContainer>
      <AddItemForm setItems={setItems} items={items} />
      <ul>
        {Array.isArray(items) &&
          items.map((item) => <li key={item.id}>{item.title}</li>)}
      </ul>
    </StyledContainer>
  );
}

export default ItemList;
