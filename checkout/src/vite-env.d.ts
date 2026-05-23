/// <reference types="vite/client" />

declare module "designSystem/Header" {
  import { ComponentType } from "react";
  type Props = { userName?: string; onLogout?: () => void };
  const Header: ComponentType<Props>;
  export default Header;
}
