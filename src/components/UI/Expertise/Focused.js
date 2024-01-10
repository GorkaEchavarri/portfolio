import './Focused.css';
import railsimage from '../../../images/Icons/rails.png';

function Focused() {

  return (
    <div>
    <h2>Ruby on Rails</h2>
    <img className="image" src={railsimage} alt="Rails icon" />
    <p>Small text explaining where and how I used the tool.</p>
    </div>
  )
}

export default Focused;
