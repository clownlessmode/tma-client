import WebApp from "@twa-dev/sdk";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { type FC, useEffect } from "react";
import {
  Navigate,
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { routes } from "@/app/navigation/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function BackButtonManipulator() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function onClick() {
      navigate(-1);
    }
    WebApp.BackButton.onClick(onClick);

    return () => WebApp.BackButton.offClick(onClick);
  }, [navigate]);

  useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname === "/telegram-auth" ||
      location.pathname === "/error"
    ) {
      WebApp.BackButton.isVisible && WebApp.BackButton.hide();
    } else {
      !WebApp.BackButton.isVisible && WebApp.BackButton.show();
    }
  }, [location]);

  return null;
}
const queryClient = new QueryClient();

export const App: FC = () => (
  <AppRoot
    appearance={WebApp.colorScheme}
    platform={["macos", "ios"].includes(WebApp.platform) ? "ios" : "base"}
  >
    <BrowserRouter>
      <BackButtonManipulator />
      <QueryClientProvider client={queryClient}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </AppRoot>
);
