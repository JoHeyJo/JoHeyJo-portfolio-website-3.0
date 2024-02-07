"use client"
import Tooltip from 'react-bootstrap/Tooltip';
import "../../styles/Footer.css"

type ToolTipProp = {
  text: string;
}

/** Renders pop-up "bubble" when icon is clicked
 * 
 * PopText -> Tooltip
 */
function ToolTip({ text }: ToolTipProp) {
  return (
    <Tooltip id="button-tooltip">
      {text}
    </Tooltip>
  );
}

export default ToolTip;