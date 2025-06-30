import React, { useState } from "react";
import ProfileContainer from "./Profile_container";
import homeicon from '../../assets/PNGIcon.svg';
import confirmicon from '../../assets/ConfirmIcon.svg';
import cancelicon from '../../assets/CloseIcon.svg';

const profile = () => {
    window.location.href = "/profile";
  }

const profileIconSize = 300;
const IconSize = 25;

const DummyUsername = "Rayu Ma Masakit";
const DummyRole = "Employee";
const DummyDepartment = "Educational and Technological Services";

const ProfileSidebar = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
    <img src={homeicon} alt="home icon" width={profileIconSize} height={profileIconSize} className="mb-2" />
    <p style={{ marginTop: '50px', marginBottom: '0', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>{DummyUsername}</p>
    <p style={{ textAlign: 'center' }}>{DummyRole}</p>
  </div>
);

const ProfileInfoGroupStatic = ({ label, value }) => (
  <div className="info-group" style={{ marginBottom: '3rem' }}>
    <label style={{ fontSize: '1.2rem', color: '#EE9337', fontWeight: 'bold' }}>{label}</label>
    <p style={{ fontSize: '1rem', color: 'black', fontWeight: 'bold' }}>{value}</p>
  </div>
);

const ProfileInfoGroupEdit = ({ label, value, onChange }) => (
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

function Profile() {
  const [DummyEmail, setDummyEmail] = useState("rmmasakit@techfactors.com");
  const [DummyPassword, setDummyPassword] = useState("*************");
  const [DummyContactNumber, setDummyContactNumber] = useState("+63-977-564-0805");

  return (
    <ProfileContainer sidebar={<ProfileSidebar />} main={
      <div className="profile-container" style={{ maxWidth: '770px' }}>
        <div className="profile-header" style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '0.1rem'}}>
          <h2 className="profile-title">
            Profile
          </h2>
          <span>
            <span>
              <img src={confirmicon} className='confirm-icon' alt="confirm icon" width={IconSize} height={IconSize} />
              <span onClick={profile} className="edit-link" style={{color: '#ee9337', textDecoration: 'none', cursor: 'pointer'}}>Confirm</span>
            </span>
            <span style={{ marginLeft: '1rem' }}>
              <img src={cancelicon} className='cancel-icon' alt="cancel icon" width={IconSize} height={IconSize} />
              <span onClick={profile} className="edit-link" style={{color: '#ee9337', textDecoration: 'none', cursor: 'pointer'}}>Cancel</span>
            </span>
          </span>
        </div>

        <div className="profile-info" style={{ gap: '2rem', marginTop: '1rem' }}>
          <ProfileInfoGroupStatic label="DEPARTMENT" value={DummyDepartment} />
          <ProfileInfoGroupEdit label="EMAIL" value={DummyEmail} onChange={(e) => setDummyEmail(e.target.value)} />
          <ProfileInfoGroupEdit label="PASSWORD" value={DummyPassword} onChange={(e) => setDummyPassword(e.target.value)} />
          <ProfileInfoGroupEdit label="CONTACT NUMBER" value={DummyContactNumber} onChange={(e) => setDummyContactNumber(e.target.value)} />
        </div>
      </div>
    } />
  );
}

export default Profile;

