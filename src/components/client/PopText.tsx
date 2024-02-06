"use client"
import { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ToolTip from './Tooltip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Footer.css"

/** Renders interactive email icon - clicking email icon copies email to clipboard 
 * 
 * Footer -> PopText
 */
function PopText() {
  const [text, setText] = useState("Copy email address.");

  const renderTooltip = (props: any) => (
    <ToolTip text={text} {...props} />
  );

  const handleCopy = () => {
    navigator.clipboard.writeText("JPF0628@gmail.com")
      .then(() => {
        setText("copied to clipboard!")
      })
      .catch(err => {
        console.log("error", err)
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <button id="Footer-copy-email" onClick={handleCopy}>
        <FontAwesomeIcon size="xl" icon={faEnvelope} />
      </button>
    </OverlayTrigger >
  );
}

export default PopText;