import PropTypes from "prop-types";
import "./Member.css";
const Member = ({id ,name , img , github}) => {
    return (
            <div key={id} className="member-container">
              <div className="member-image">
              <img src={img} alt={name} />
              </div>
              <div className="member-content">
                <h1>{name}</h1>
                <h2>
                  Visit my &nbsp;
                  <a href={github}>GitHub</a>
                </h2>
              </div>
            </div>
    )
}

export default Member;

Member.propTypes = {
    id: PropTypes.number.isRequired, 
    name: PropTypes.string.isRequired, 
    img: PropTypes.string.isRequired, 
    github: PropTypes.string.isRequired
  };