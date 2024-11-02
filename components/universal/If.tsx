import { IfComponent } from "../../intefaces";

export default function If({ condition, children }: IfComponent) {
  if (!condition) {
    return null;
  }
  return <>{children}</>;
}
