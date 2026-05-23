import { Component, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  fallback: ReactNode;
};

type State = {
  hasError: boolean;
};

export default class RemoteBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Microfrontend falhou:", error);
    // Aqui você manda pro Sentry/DataDog
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
