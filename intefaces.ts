import { ReactNode } from "react";

export interface IfComponent {
  condition: boolean;
  children: ReactNode;
}
