/// <reference types="vite/client" />

declare module "checkout/CheckoutButton" {
  const Component: React.ComponentType;
  export default Component;
}

declare module "checkout/CheckoutPage" {
  const Component: React.ComponentType;
  export default Component;
}

declare module "designSystem/Header" {
  import { ComponentType } from "react";
  type Props = {
    user?: { id: number; name: string } | null;
    onLogout?: () => void;
  };
  const Header: ComponentType<Props>;
  export default Header;
}
