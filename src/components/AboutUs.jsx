import "./AboutUs.css";
import "./Member";
import Member from "./Member";

const AboutUs = () => {
  const Team = [
    
    {
      id :1,
      name : "Abanoub Refaat" ,
      img : "./assets/bob.png",
      github : "https://github.com/abanoub-refaat"
    }
    ,
    {
      id :2,
      name : "Antonios Samy" ,
      img : "./assets/tony.png",
      github : "https://github.com/tonyBuffon"
    }
    ,
    {
      id :3,
      name : "Fady Monir", 
      img : "./assets/foda.png",
      github : "https://github.com/fadymonir10"
    }
  
 
    ,
    {
      id :4,
      name : "Menna Ayman" ,
      img : "./assets/manon.png",
      github : "https://github.com/ME-nna"
    }
    ,
    {
      id :5,
      name : "Ebram Wael", 
      img : "./assets/bero.png",
      github : "https://github.com/Ebram-Wael"
    }
    ,
    {
      id :6,
      name : "Esraa Hassan", 
      img : "./assets/asora.png",
      github : "https://github.com/xxesraahassan"
    }
    ,
    {
      id :7,
      name : "Youssef Emad" ,
      img : "./assets/joe.png",
      github : "https://github.com/youssef-emad347"
    }
  
  ];
  return (
  <div className="about-container">
      <h1>Our Team</h1>
      <ul className="member-list">
      {Team.map((member) => (
       <li key = {member.id} className="member"> <Member 
        key = {member.id}
        name = {member.name}
        img = {member.img}
        github = {member.github} /> </li>
      ))}
      </ul>

    </div>
  )
    
  };

export default AboutUs;
