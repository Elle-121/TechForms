import ProfileContainer from "./Profile_container";
import homeicon from '../../assets/PNGIcon.svg';
import confirmicon from '../../assets/ConfirmIcon.svg';
import cancelicon from '../../assets/CancelIcon.svg';

const profile = () => {
    window.location.href = "/profile";
  }

const profileIconSize = 300;
const IconSize = 25;

const ProfileSidebar = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
    <img src={homeicon} alt="home icon" width={profileIconSize} height={profileIconSize} className="mb-2" />
    <input type="text" className="form-control" style={{ marginTop: '50px', marginBottom: '0', fontSize: '20px', fontWeight: 'bold', textAlign: 'center', width: '50%' }} value="Rayu Ma Masakit" />
    <select className="form-select text-muted" style={{ textAlign: 'center', width: '50%' }} aria-label="Default select example">
      <option value="Full-Stack Developer">Full-Stack Developer</option>
      <option value="Front-End Developer">Front-End Developer</option>
      <option value="Back-End Developer">Back-End Developer</option>
      <option value="DevOps Engineer">DevOps Engineer</option>
      <option value="Quality Assurance Engineer">Quality Assurance Engineer</option>
      <option value="Project Manager">Project Manager</option>
      <option value="Business Analyst">Business Analyst</option>
      <option value="Designer">Designer</option>
      <option value="Other">Human Resources</option>
    </select>
  </div>
);

const ProfileInfoGroup = ({ label, value, onChange }) => (
  <div className="info-group" style={{ marginBottom: '2.2rem' }}>
    <label style={{ fontSize: '1.2rem', color: '#EE9337', fontWeight: 'bold', display: 'block' }}>{label}</label>
    <input 
      type="text" 
      value={value} 
      onChange={onChange} 
      style={{ fontSize: '1rem', color: 'black', fontWeight: 'bold', width: '50%', border: '1px solid #ccc', padding: '0.3rem' }}
    />
  </div>
);

const ProfileInfo = () => (
  <div className="profile-container" style={{ maxWidth: '770px' }}>
    <div className="profile-header" style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '0.1rem'}}>
      <h2 className="profile-title">
        Profile <span className="profile-id" style={{ fontSize: '1rem', marginLeft: '1.5rem', color: '#A5A5A5'}}>#RAYU-0604</span>
      </h2>
      <span>
        <span>
          <img src={confirmicon} className='edit-icon' alt="edit icon" width={IconSize} height={IconSize} />
          <span onClick={profile} className="edit-link" style={{color: '#ee9337', textDecoration: 'none', cursor: 'pointer'}}>Confirm</span>
        </span>
        <span style={{ marginLeft: '1rem' }}>
          <img src={cancelicon} className='edit-icon' alt="edit icon" width={IconSize} height={IconSize} />
          <span onClick={profile} className="edit-link" style={{color: '#ee9337', textDecoration: 'none', cursor: 'pointer'}}>Cancel</span>
        </span>
      </span>
    </div>

    <div className="profile-info" style={{ gap: '2rem', marginTop: '1rem' }}>
      <ProfileInfoGroup label="USERNAME" value="Rayu" />
      <ProfileInfoGroup label="DEPARTMENT" value="Educational and Technological Services" />
      <ProfileInfoGroup label="EMAIL" value="rmmasakit@techfactors.com" />
      <ProfileInfoGroup label="PASSWORD" value="*************" />
      <ProfileInfoGroup label="CONTACT NUMBER" value="+63-977-564-0805" />
    </div>
  </div>
);

function Profile() {
  return (
    <ProfileContainer sidebar={<ProfileSidebar />} main={<ProfileInfo />} />
  );
}

export default Profile;
