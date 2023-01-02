import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import styled from "styled-components";

const CollapsibleItem = ({ item, theme }) => {
  const [showCollapsible, setShowCollapsible] = useState(false);

  return (
    <Container>
      <Header
        theme={theme}
        onClick={() => setShowCollapsible(!showCollapsible)}
      >
        <span>{item.question}</span>
        {!showCollapsible ? <RxCaretDown size={28} /> : <RxCaretUp size={28} />}
      </Header>
      {showCollapsible && (
        <CollapsibleContent>{item.answer}</CollapsibleContent>
      )}
    </Container>
  );
};

export default CollapsibleItem;

const Container = styled.div``;

const Header = styled.p`
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: ${(props) => props.theme == "dark" && "#081f35"};
  padding: 0.5rem 1rem;
  font-size: 1.25em;
  cursor: pointer;
  border-radius: 4px;
  color: ${(props) => props.theme == "dark" && "#c2c8cc"};

  span:first-of-type {
    flex-grow: 1;
  }
`;

const CollapsibleContent = styled.div`
  padding: 0.5rem 1rem;
`;
