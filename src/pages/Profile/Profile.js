import { useState } from 'react';
import ProfileContainer from "../../pages/Profile/Profile_container";
import homeicon from '../../assets/PNGIcon.svg';
import editicon from '../../assets/EditIcon.svg';
import confirmicon from '../../assets/ConfirmIcon.svg';
import closeicon from '../../assets/CloseIcon.svg';

const profileIconSize = 300;
const smallIconSize = 20;

const initialUserProfile = {
  username: "Rayu Ma Masakit",
  role: "Employee",
  department: "Educational and Technological Services",
  email: "rmmasakit@techfactors.com",
  contactNumber: "+63-977-564-0805",
  password: "•••••••••••"
};

const ProfileSidebar = ({ username, role }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
    <img src={homeicon} alt="home icon" width={profileIconSize} height={profileIconSize} className="mb-2" />
    <p style={{ marginTop: '50px', marginBottom: '0', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>{username}</p>
    <p className="text-muted" style={{ textAlign: 'center' }}>{role}</p>
  </div>
);

const ViewForm = ({ value }) => (
  <p style={{ fontSize: '1rem', color: 'black', fontWeight: 'bold', padding: '0.3rem', border: '1px solid transparent' }}>{value}</p>
);

const EditForm = ({ value, onChange, isPassword, isConfirmPassword }) => (
  <>
    <input 
      type={isPassword ? "password" : "text"} 
      value={value} 
      onChange={onChange} 
      style={{ fontSize: '1rem', color: 'black', fontWeight: 'bold', width: '45%', border: '1px solid #ccc', padding: '0.3rem' }}
    />
    {isPassword && isConfirmPassword && <input 
      type="password" 
      placeholder="Confirm Password"
      style={{ fontSize: '1rem', color: 'black', fontWeight: 'bold', width: '45%', border: '1px solid #ccc', padding: '0.3rem', marginLeft: '0.5rem' }}
    />}
  </>
);

const ProfileInfoGroup = ({ label, value, isPassword, onChange, isEditing, isConfirmPassword }) => (
  <div className="info-group" style={{ marginBottom: '3rem' }}>
    <label style={{ fontSize: '1.2rem', color: '#EE9337', fontWeight: 'bold', display: 'block' }}>{label}</label>
    {isEditing 
      ? <EditForm value={value} onChange={onChange} isPassword={isPassword} isConfirmPassword={isConfirmPassword} /> 
      : <ViewForm value={value} />
    }
  </div>
);

const ProfileInfo = ({ userProfile, setUserProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(userProfile);
  const [originalProfile, setOriginalProfile] = useState(userProfile);

  const handleChange = (key) => (e) => {
    setTempProfile(prev => ({ ...prev, [key]: e.target.value }));
  };

  const handleConfirm = () => {
    if (tempProfile.password !== originalProfile.password && tempProfile.password !== tempProfile.confirmPassword) {
      alert("Password and confirm password do not match");
      setIsEditing(true);
      return;
    }
    setUserProfile(tempProfile);
    setIsEditing(false);
    setOriginalProfile(tempProfile);
  };

  const handleCancel = () => {
    setTempProfile(originalProfile);
    setIsEditing(false);
  };

  return (
    <div className="profile-container" style={{ maxWidth: '770px' }}>
      <div className="profile-header" style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '0.1rem'}}>
        <h2 className="profile-title">Profile</h2>
        <span style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {isEditing && (
            <span style={{ cursor: 'pointer' }}onClick={handleConfirm}>
              <img src={confirmicon} className='confirm-icon' alt="confirm icon" width={smallIconSize} height={smallIconSize} style={{ marginRight: '0.1rem' }} />
              <span className="confirm-link" style={{ color: '#ee9337', textDecoration: 'none', marginLeft: '0.5rem' }}>Confirm</span>
            </span>
          )}
          {isEditing && (
            <span style={{ cursor: 'pointer' }}onClick={handleCancel}>
              <img src={closeicon} className='cancel-icon' alt="cancel icon" width={smallIconSize} height={smallIconSize} style={{ marginRight: '0.1rem' }} />
              <span className="cancel-link" style={{ color: '#ee9337', textDecoration: 'none', marginLeft: '0.3rem' }}>Cancel</span>
            </span>
          )}
          {!isEditing && (
            <span style={{ cursor: 'pointer' }} onClick={() => setIsEditing(true)}>
              <img src={editicon} className='edit-icon' alt="edit icon" width={smallIconSize} height={smallIconSize} />
              <span className="edit-link" style={{ color: '#ee9337', textDecoration: 'none', marginLeft: '0.5rem' }}>Edit</span>
            </span>
          )}
        </span>
      </div>
      <div className="profile-info" style={{ gap: '2rem', marginTop: '1rem' }}>
        <ProfileInfoGroup label="DEPARTMENT" value={tempProfile.department} />
        <ProfileInfoGroup label="EMAIL" value={tempProfile.email} onChange={handleChange('email')} isEditing={isEditing} />
        <ProfileInfoGroup label="CONTACT NUMBER" value={tempProfile.contactNumber} onChange={handleChange('contactNumber')} isEditing={isEditing} />
        <ProfileInfoGroup label="PASSWORD" value={tempProfile.password} onChange={handleChange('password')} isPassword isEditing={isEditing} isConfirmPassword />
      </div>
    </div>
  );
};
function Profile() {
  const [userProfile, setUserProfile] = useState(initialUserProfile);
  return (
    <ProfileContainer 
      sidebar={<ProfileSidebar username={userProfile.username} role={userProfile.role} />} 
      main={<ProfileInfo userProfile={userProfile} setUserProfile={setUserProfile} />} 
    />
  );
}
export default Profile;

