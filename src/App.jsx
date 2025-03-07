import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Menu from "./components/Menu/Menu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Menu />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </Layout>
    </>
  );
}

export default App;
