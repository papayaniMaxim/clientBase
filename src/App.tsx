import { BrowserRouter, Route, RouteProps, Routes } from "react-router-dom";
import { useDeviceType } from "./hooks/useDeviceType";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import routes from "./routes";

function App() {
  const deviceType = useDeviceType();

  return (
      <div>
        <BrowserRouter>
          <NavigationMenu />
          <main>
            <Routes>
              {routes.map((route: RouteProps) => (
                <Route key={route.path} {...route} />
              ))}
            </Routes>
          </main>
        </BrowserRouter>
      </div>
  );
}

export default App;
