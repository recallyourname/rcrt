import React from "react";
import NavigationPage from "./components/pages/Navigation/NavigationPage";

function App() {
  return (
    <div className="App">
      <NavigationPage
        menuElements={[
          { title: "Candidates", emoji: "🧑‍💻" },
          { title: "Flow", emoji: "📈" },
          {title: "Positions", emoji: "💼"},
          {title: "Schedule", emoji: "📅"},
          {title: "Reports", emoji: "📝"}
        ]}
      />
    </div>
  );
}

export default App;
