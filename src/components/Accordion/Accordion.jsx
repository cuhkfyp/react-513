import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();
import AccordionItem from "./AccordionItem.jsx";
import AccordionTitle from "./AccordionTitle.jsx";
export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>."
    );
  }

  return ctx;
}

export default function Accordion({ children, className }) {
  const [OpenItemId, setOpenItemId] = useState();

  // function openItem(id) {
  //   setOpenItemId(id);
  // }

  // function colseItem() {
  //   setOpenItemId(null);
  // }

  function toggleItem(id) {
    setOpenItemId((previd) => (previd === id ? null : id));
  }

  const contextValue = {
    openItemId: OpenItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContext;
