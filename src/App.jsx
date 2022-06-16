import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layouts";
import Page404 from "./pages/Page404";
import routes from "./routes";
function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => {
          let Page = route.component;
          let path = route.path;
          console.log(path);
          return (
            <Route
              key={index}
              path={path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}

        <Route path="/" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
