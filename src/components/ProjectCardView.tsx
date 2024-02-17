import '../styles/ProjectCardView.css';
import OverlayCard from './OverlayCard';
import { Project } from '../utils/types';
import Image from 'next/image';

type ProjectCardProp = Project & {
  index: number;
}
// fixing case
/** Project Image displayed in thumbnail view
 * 
 * Project -> ProjectCardView -> OverlayCard
 */
function ProjectCardView({ index, name, image, links, cardHeader, cardSummary, tech }: ProjectCardProp) {
  return (
    <div className="ProjectCardView-container">
      <Image className="ProjectCardView-image" src={image} alt={`${name} image`} />
      <div className="ProjectCardView-overlay">
        <OverlayCard index={index} link={links.demo} header={cardHeader} summary={cardSummary} tech={tech} />
      </div>
    </div>
  )
}

export default ProjectCardView;