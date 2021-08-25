import './Feature_block.css';
import Line from '../img/Path 31.png'

function Feature({title,desc}) {
  return (
      <div className="feature-wrapper">
          <img src={Line}/>
          <div className="feature-text">
              <p>{title}</p>
              <p>{desc}</p>
          </div>
         
      </div>

  );
}

export default Feature;
