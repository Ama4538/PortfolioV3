import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function ProjectContent({ project }) {
    return (
        <article className="projectcontent" >
            <h3 className="projectcontent__title">{project.name}</h3>
            <div className="projectcontent__image-container">
                <img
                    className="projectcontent__image"
                    src={`./project-images/${project.image}`}
                    alt={`image screenshot of ${project.name}`}
                />
            </div>

            <div className="projectcontent__right-column">
                <h4 className="projectcontent__description-title">{project.category}</h4>
                    <p className="projectcontent__description">{project.description}</p>
                <ul className="projectcontent__button-container">
                    <li><button className="projectcontent__button"> See It Live</button></li>
                    <li><button className="projectcontent__button"> View The Code</button></li>
                </ul>
            </div>

        </article>
    )
}

export default ProjectContent;