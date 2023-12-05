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
        Hardworking Software Developer currently enrolled in the University of Utah's Full Stack Flex Web Development Program, continuing to further my skills. I love learning new things and working with others in a team environment. Always make room for improvement and look for ways to challenge myself. Happy to be able to gain more experience through this course.
        </p>
      </div>
    </section>
  );
}

export default About;
