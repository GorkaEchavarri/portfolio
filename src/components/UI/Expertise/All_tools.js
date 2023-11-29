import './All_tools.css';

function AllTools() {

  const image = 'https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/breakfast.jpg'
  return (
    <div>
      <p>All Tools</p>
      <img className="icon" src={image} alt="Ruby icon" />
      <p>Ruby on Rails</p>
      <p>JavaScript</p>
      <p>React</p>
      <p>Redux</p>
      <p>REST API</p>
      <p>PostgreSQL</p>
      <p>HTML</p>
      <p>Bootstraps</p>
      <p>Github</p>
      <p>Figma</p>
      <p>Trello</p>
      <p>Salesforce</p>
    </div>
  )
}

export default AllTools;
