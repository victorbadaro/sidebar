import { HTMLAttributes } from "react";
import { FiGithub, FiGitlab } from 'react-icons/fi';
import { Container } from "./styles";

interface SidebarProps extends HTMLAttributes<HTMLElement> {}

export function Sidebar(props: SidebarProps) {
  return (
    <Container {...props}>
      <button type="button">
        <FiGithub />
      </button>
      <button type="button">
        <FiGitlab />
      </button>
    </Container>
  );
}