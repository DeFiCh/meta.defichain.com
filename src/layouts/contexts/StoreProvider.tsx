import { initializeStore, RootState, RootStore } from "@store/index";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

let store: RootStore | undefined;

interface StoreProviderProps {
  state: RootState;
}

/**
 * StoreProvider prevent Store from reloading by hydrating
 */
export default function StoreProvider({
  state,
  children,
}: PropsWithChildren<StoreProviderProps>): JSX.Element {
  store = store ?? initializeStore(state);

  return <Provider store={store}>{children}</Provider>;
}
