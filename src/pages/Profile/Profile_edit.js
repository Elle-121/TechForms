import React from 'react';
import ProfileContainer from "./Profile_container";
import homeicon from '../../assets/PNGIcon.svg';
import editicon from '../../assets/EditIcon.svg';

const profileIconSize = 300;

const ProfileSidebar = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
    <img src={homeicon} alt="home icon" width={profileIconSize} height={profileIconSize} className="mb-2" />
    <p style={{ marginTop: '50px', marginBottom: '0', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Rayu Ma Masakit</p>
    <p className="text-muted" style={{ textAlign: 'center' }}>Full-Stack Developer</p>
  </div>
);

const ProfileInfoGroup = ({ label, value }) => (
  <div className="info-group" style={{ marginBottom: '3rem' }}>
    <label style={{ fontSize: '1.2rem', color: '#EE9337', fontWeight: 'bold' }}>{label}</label>
    <p style={{ fontSize: '1rem', color: 'black', fontWeight: 'bold' }}>{value}</p>
  </div>
);

const ProfileInfo = () => (
  <div className="profile-container" style={{ maxWidth: '770px' }}>
    <div className="profile-header" style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '0.1rem'}}>
      <h2 className="profile-title">
        Profile <span className="profile-id" style={{ fontSize: '1rem', marginLeft: '1.5rem', color: '#A5A5A5'}}>#RAYU-0604</span>
      </h2>
      <span><img src={editicon} className='edit-icon'alt="edit icon" width={20} height={20} /><a href="#Profile" className="edit-link" style={{color: '#ee9337', textDecoration: 'none'}}>Edit</a></span>
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

