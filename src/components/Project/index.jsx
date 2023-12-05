import { removeHyphensAndCapitalize } from '../../utils/helpers';
import * as projects from '../../assets';

function Project({ project }) {
  const { name, repo, link, description } = project;

  return (
    <div className="project" key={name}>
      <img
        src={projects[name]}
        alt={removeHyphensAndCapitalize(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
        <a href={repo}>
            <i className="fab fa-github-alt" />
          </a>
          <a href={link}>{removeHyphensAndCapitalize(name)}</a>
          &nbsp;
         
        <p>{description}</p>
        </h3>
      </div>
    </div>
  );
}

export default Project;
