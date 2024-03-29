import { useContext } from "react";
import { Project } from "../utils/types";
import '../styles/ProjectCarouselView.css'
import { Col, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";
import { PortfolioContext } from "@/context/user";
import Image from 'next/image';

type ProjectProps = {
  projects: Project[];
}


/** Renders individual project image with description
 * 
 * Portfolio -> ProjectCarouselView
 */
function ProjectCarouselView({ projects }: ProjectProps) {

  // Context => Portfolio
  const { toggleView, index, handleSelect } = useContext(PortfolioContext);

  return (
    <Row className="justify-content-end">
      <Col md={6}>
        <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
          {projects.map((project: Project, i) =>
            <Carousel.Item key={i}>
              <Image className="ProjectCarouselView-image" src={project.image} alt={`${project.name}`} />
              <Carousel.Caption>
                <h3>{project.heading}</h3>
                <p>{project.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )}
        </Carousel>
      </Col>
      <Col md={4}>
        <div className="ProjectCarouselView-text-box ">
          <ul style={{paddingLeft: "0px"}}>
            <div className="text-technologies">

              {projects[index].tech.map((t,i) =>
                <li className="text-tech" key={i}>
                  {i === 0 ? t : <><span className="text-tech-pipe">|</span> {t}</>}
                </li>
              )}
            </div>
            {projects[index].specs.map((detail, i) => <li key={i} className="text">{detail}</li>)}
            <li className="text-note">NOTE: Heroku server takes a moment to fire up.</li>
          </ul>
          <div className="d-flex justify-content-evenly" >
            <Button variant="dark" className="align-self-center" onClick={toggleView}>View all</Button>
            <Button variant="dark" className="align-self-center" href={projects[index].links.demo} target="_blank">Demo</Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default ProjectCarouselView;