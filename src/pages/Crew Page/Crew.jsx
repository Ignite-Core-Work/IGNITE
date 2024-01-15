import "./Crew.css";
import sajid from "../../assets/sajid.jpg";
import rishitha from "../../assets/rishitha.jpg";
import rishithreddy from "../../assets/rishithreddy.jpg";
import dwisanth from "../../assets/dwisanth.jpg"
import lahari from "../../assets/lahari.jpg";
import mubhashira from "../../assets/mubhashira.jpg";
import saiganesh from "../../assets/saiganesh.jpg";
import saipavan from "../../assets/saipavan.jpg";
import saivivek from "../../assets/saivivek.jpg";
import sreenadh from "../../assets/sreenadh.jpg";
import anil from '../../assets/anil.jpg';
import Navbar from "../../components/Navbar/Navbar";
import Bar from "../../components/Bar/Bar";
    

const Crew = () => {   

    const teamMembers = [
        { name: 'B Dwishanth', role: 'Chief Excuitive Officer', imageSrc: dwisanth },
        { name: 'N Ganesh', role: 'Chief Finance Officer', imageSrc: saiganesh },
        { name: 'K Anil Kumar', role: 'Chief Tehnical Officer', imageSrc: anil},
        { name: 'Shaik Mubhashira', role: 'Chief Tehnical Officer', imageSrc: mubhashira},        
        { name: 'U Rishitha Sharon', role: 'Chief Operations Officer', imageSrc: rishitha }, 
        { name: 'Shaik Sajid Hussain', role: 'Chief Marketing Officer', imageSrc: sajid},        
        { name: 'P Rishith Reddy', role: 'Chief Stategy Officer', imageSrc: rishithreddy},
        { name: 'Y Lahari', role: 'Chief Social Officer', imageSrc: lahari },
        { name: 'P Sai Pavan Kumar', role: 'Cheif Finance Officer', imageSrc: saipavan},        
        { name: 'B Srinadh', role: 'Cheif Creative Offier', imageSrc: sreenadh},
        { name: 'C Sai Vivek', role: 'Chief Communication Officer', imageSrc: saivivek },
      ];

  return (
    <>
    <Navbar/>
    <Bar/>
    <div className='for-whole-Team-page'>
      <h1 className="for-heading-in-team">The Crew</h1>
      <div className="blockContainer" >
        {teamMembers.map((member, index) => (
          <div className="blockInfo" key={index}>
            <div className="for-image">
              <div className="block-img">
                <img src={member.imageSrc} alt={member.name} />
              </div>
            </div>
            <p>{member.name}</p>
            <h3>{member.role}</h3>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Crew;
