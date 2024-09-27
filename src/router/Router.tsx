import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProviders";

export const Router: FC = memo(() => {
  return (
    <LoginUserProvider>
      <Routes>
        {/* "/" パスで Login コンポーネントを表示 */}
        <Route path="/" element={<Login />} />

        {/* "/home" 以下のパスに homeRoutes のルートを展開 */}
          <Route path="/home/*" element={<HomeRoutes />} />
        
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});

const HomeRoutes: FC = () => (
  <HeaderLayout>
    <Routes>
      {homeRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  </HeaderLayout>
  
);