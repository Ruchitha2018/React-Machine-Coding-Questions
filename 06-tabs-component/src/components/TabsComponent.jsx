import { useState, useEffect } from "react";

const tabsComponent = [
  { title: 'Tab 1', content: 'This is Tab 1 Content' },
  { title: 'Tab 2', content: 'This is Tab 2 Content' },
  { title: 'Tab 3', content: 'This is Tab 3 Content' },
]

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState(0)
  const activeContent = tabsComponent.find((tab, index) => index === activeTab)
  console.log(activeTab);
  return (
    <div className="tab-container">
      <div className="tab-headers">
        {tabsComponent.map((tab, index) => {
          return (
            <>
              <button onClick={() => setActiveTab(index)} className={`tab-header ${activeTab === index ? "active": ""}`}>{tab.title}</button>
            </>
          )
        })}
      </div>
      <div className="tab-content">{activeContent.content}</div>
    </div>
  );
}
