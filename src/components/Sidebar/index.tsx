import { AnimatePresence, motion } from "framer-motion";
import { HTMLAttributes, useState } from "react";
import { FiGithub, FiGitlab } from 'react-icons/fi';
import { Container } from "./styles";

interface SidebarProps extends HTMLAttributes<HTMLElement> {}

const greenPanel = <div style={{ width: '400px', height: '100%', backgroundColor: 'green' }} />;
const redPanel = <div style={{ width: '800px', height: '100%', backgroundColor: 'red' }} />;

export function Sidebar(props: SidebarProps) {
  const [isDynamicPanelOpen, setIsDynamicPanelOpen] = useState(false);
  const [panel, setPanel] = useState(greenPanel);

  function handleButtonClick(newPanel: JSX.Element) {
    if(isDynamicPanelOpen && newPanel === panel) {
      return setIsDynamicPanelOpen(false);
    }

    setPanel(newPanel);
    setIsDynamicPanelOpen(true);
  }

  return (
    <Container {...props}>
      <AnimatePresence>
        {isDynamicPanelOpen && (
          <motion.div
            className="dynamic-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {panel}
          </motion.div>
        )}
      </AnimatePresence>
      <nav>
        <button type="button" onClick={() => handleButtonClick(greenPanel)}>
          <FiGithub />
        </button>
        <button type="button" onClick={() => handleButtonClick(redPanel)}>
          <FiGitlab />
        </button>
      </nav>
    </Container>
  );
}