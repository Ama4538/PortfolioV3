

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
                <ul className="projectcontent__link-container">
                    <li className="projectcontent__link-item">
                        <a
                            className="projectcontent__link"
                            href={project.liveLink}
                            target="__blank"
                        > See It Live</a>
                    </li>
                    <li className="projectcontent__link-item">
                        <a
                            className="projectcontent__link"
                            href={project.liveLink}
                            target="__blank"
                        > View The Code</a>
                    </li>
                </ul>
            </div>

        </article>
    )
}

export default ProjectContent;