/* eslint react/prop-types: 0 */
import { useState } from "react";
import styled from "@emotion/styled";

const StyledButton = styled.input`
  font-size: 2rem;
  all: unset;
  font-size: 2.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

function AddItemForm() {
  const [itemTitle, setItemTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        style={{ height: "1.5rem" }}
        type="text"
        name="itemTitle"
        id="itemTitle"
        value={itemTitle}
        onChange={(e) => setItemTitle(e.target.value)}
      />
      <StyledButton type="submit" value="+" />
    </StyledForm>
  );
}

export default AddItemForm;
