import { HTMLAttributes } from "react";
import { Container } from "./styles";

interface SidebarProps extends HTMLAttributes<HTMLElement> {}

export function Sidebar({ children, ...rest }: SidebarProps) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}