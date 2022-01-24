import React from "react";
import NavigationSidebar from "./components/pages/Navigation/NavigationSidebar";
import CandidatesPage from "./components/pages/CandidatesPage";
import Content from "./components/pages/Content";

function App() {
  return (
    <div className="App">
      <NavigationSidebar
        menuElements={[
          { title: "Candidates", emoji: "🧑‍💻", current: true },
          { title: "Flow", emoji: "📈", current: false },
          { title: "Positions", emoji: "💼", current: false },
          { title: "Schedule", emoji: "📅", current: false },
          { title: "Reports", emoji: "📝", current: false },
          { title: "Chapo", emoji: "📝", current: false },
        ]}
      />
      <Content childComponent={<CandidatesPage />} />
    </div>
  );
}

export default App;
