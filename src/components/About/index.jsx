// import Avatar from '../../assets';
import Image from './images/image0.jpeg'

function About() {
  return (
    <section className="my-5 about-me">
      <div className="my-2">
        <div className="profile-img my-5">
          <img src={Image} alt="" className="profile" />
        
        </div>
        <p>
      Hi My name is Tommy
        </p>
        <p>
       Web Developer and
        </p>
      </div>
    </section>
  );
}

export default About;
