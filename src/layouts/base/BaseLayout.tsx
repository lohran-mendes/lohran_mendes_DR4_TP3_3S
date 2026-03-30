import "./styles.css";
import type { PropsWithChildren } from "react";
import { Header } from "../../components";

export function BaseLayout(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <div className="base-layout">
        {props.children}
      </div>
    </>
  );
}
