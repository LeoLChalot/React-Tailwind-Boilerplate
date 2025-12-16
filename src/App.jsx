import { BrowserRouter as Router, Routes, Route, useRoutes } from "react-router"
import routes from "@Routes/RoutesMap.jsx"
import * as Layout from '@Layouts';

const AppRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

function App() {

  console.log("Routes loaded:", routes);

  return (
    <>
      <Router>
        <AppRoutes />
      </Router>      
    </>
  )
}

export default App
