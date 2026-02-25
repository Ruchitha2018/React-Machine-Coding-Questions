import { useState, useEffect } from "react";

const tabsComponent = [
  { title: 'Tab 1', content: 'This is Tab 1 Content' },
  { title: 'Tab 2', content: 'This is Tab 2 Content' },
  { title: 'Tab 3', content: 'This is Tab 3 Content' },
]

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState('Tab 1')
  console.log(activeTab);
  return (
    <div>
      {tabsComponent.map((tab, index) => {
        return (
          <>
            <h1 onClick={() => setActiveTab(tab.title)}>{tab.title}</h1>
            {tab.title === activeTab && <p>{tab.content}</p>}
          </>
        )
      })}

    </div>
  );
}
