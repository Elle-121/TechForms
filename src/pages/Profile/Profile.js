import ProfileContainer from "../../pages/Profile/Profile_container";
import homeicon from '../../assets/PNGIcon.svg'

const profile_icon_size = 300

const sidebar_content = (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
    <img src={homeicon} alt="home icon" width={profile_icon_size} height={profile_icon_size} className="mb-2" />
    <p style={{ marginTop: '50px', marginBottom: '0', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Rayu Ma Masakit</p>
    <p className="text-muted" style={{ textAlign: 'center' }}>Full-Stack Developer</p>
  </div>
);


const main_content = (
  <div>
    <h3>Main Content</h3>
    <p>This is where the main data or components go.</p>
  </div>
);

function Profile() {
  return (
    <ProfileContainer sidebar={sidebar_content} main={main_content} />
  );
}

export default Profile;
