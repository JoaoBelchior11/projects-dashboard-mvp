import React from "react";
import { Layout } from "./components/Layout/Layout";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (
    <div>
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
