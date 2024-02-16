import '../styles/Bio.css';
import { user } from '../utils/userData';

/** Renders Bio  
 *  
 * App -> Bio
 */
function Bio() {
  return (
    <section id="Bio-about-me">
      <ul id="about-me-links container">
        {user.info.map((info,i) => <li key={i} className='Bio-info'>{info}</li>)}
      </ul>
    </section>
  )
}

export default Bio;

