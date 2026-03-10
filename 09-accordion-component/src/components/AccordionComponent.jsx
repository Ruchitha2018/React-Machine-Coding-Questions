import { useState } from "react";

const accordionData = [
  { title: 'Accordion 1', content: 'This is Accordion 1 Content' },
  { title: 'Accordion 2', content: 'This is Accordion 2 Content' },
  { title: 'Accordion 3', content: 'This is Accordion 3 Content' },
]

export default function AccordionComponent() {
  const [activeIndex, setActiveIndex] = useState([])
  const [isMultipleOpen, setIsMultipleOpen] = useState(false);

  const handleClick = (index) => {
    setActiveIndex((prev) => {
      const isOpen = prev.includes(index);
      if (isMultipleOpen) {
        return isOpen ? prev.filter((i) => i !== index) : [...prev, index]
      }
      return isOpen ? [] : [index]
    })
  }
  return (
    <div className="accordion-container">
      <label className="accordion-toggle">
        <input type="checkbox" checked={isMultipleOpen} onChange={() => setIsMultipleOpen((prev) => !prev)} />Is Multiple Open
      </label>
      {accordionData.map((accordion, index) => {
        const isOpen = activeIndex?.includes(index);
        const buttonId = `accordion-header-${index}`;
        const panelId = `accordion-panel-${index}`;
        return (
          <div className="accordion-item" key={index}>
            <button className="accordion-header" id={buttonId} aria-expanded={isOpen} aria-controls={panelId} onClick={() => handleClick(index)}>{accordion.title}</button>
            {(isOpen ? activeIndex?.includes(index) : index === activeIndex) && <div id={panelId} role="region" aria-labelledby={buttonId} className="accordion-content">{accordion.content}</div>}
          </div>
        )
      })}

    </div>
  );
}
