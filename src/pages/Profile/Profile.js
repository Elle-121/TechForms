import { useState } from 'react';
import MainContainer from "../../components/MainContainer";
import Layout from '../../pages/Profile/Profile_layout';
import homeicon from '../../assets/PNGIcon.svg';
import editicon from '../../assets/EditIcon.svg';
import confirmicon from '../../assets/ConfirmIcon.svg';
import closeicon from '../../assets/CloseIcon.svg';
import viewicon from '../../assets/ViewIcon.svg';

const profileIconSize = 300;
const smallIconSize = 20;

const initialUserProfile = {
  username: "Rayu Ma Masakit",
  role: "Employee",
  department: "Educational and Technological Services",
  email: "rmmasakit@techfactors.com",
  contactNumber: "+639775640805",
  password: "bananabread"
};

const ProfileSidebar = ({ username, role, imgSrc, onImgChange, isEditing }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
    {isEditing && (
      <input type="file" accept="image/*" onChange={onImgChange} style={{ display: 'none' }} id="profile-img-input" />
    )}
    <label htmlFor="profile-img-input" style={{ pointerEvents: isEditing ? undefined : 'none' }}>
      <img src={imgSrc || homeicon} alt="home icon" width={profileIconSize} height={profileIconSize} className="mb-2" style={{ cursor: isEditing ? 'pointer' : 'default' }} />
    </label>
    <p style={{ marginTop: '50px', marginBottom: '0', fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>{username}</p>
    <p className="text-muted" style={{ textAlign: 'center' }}>{role}</p>
  </div>
);

const ViewForm = ({ value, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ position: 'relative', width: '50%' }}>
      <input
        type={isPassword && !showPassword ? "password" : "text"}
        value={value}
        readOnly
        style={{
          fontSize: '1rem',
          color: 'black',
          fontWeight: 'bold',
          width: '100%',
          border: '1px solid transparent',
          padding: '0.3rem',
          backgroundColor: 'transparent'
        }}
      />
      {isPassword && (
        <img
          src={viewicon}
          alt="view password"
          onClick={() => setShowPassword(prev => !prev)}
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '20px',
            height: '20px',
            cursor: 'pointer'
          }}
        />
      )}
    </div>
  );
};

const EditForm = ({ value, onChange, isPassword, confirmValue, onConfirmChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <>
      <div style={{ position: 'relative', width: '50%', marginBottom: isPassword ? '1rem' : '0' }}>
        <input
          type={isPassword && !showPassword ? "password" : "text"}
          value={value}
          onChange={onChange}
          style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            width: '100%',
            border: '1px solid #ccc',
            padding: '0.3rem'
          }}
        />
        {isPassword && (
          <img
            src={viewicon}
            alt="toggle password"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '20px',
              cursor: 'pointer'
            }}
          />
        )}
      </div>

      {isPassword && (
        <div style={{ position: 'relative', width: '50%' }}>
          <input
            type={!showConfirm ? "password" : "text"}
            placeholder="Confirm Password"
            value={confirmValue}
            onChange={onConfirmChange}
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              width: '100%',
              border: '1px solid #ccc',
              padding: '0.3rem'
            }}
          />
          <img
            src={viewicon}
            alt="toggle confirm password"
            onClick={() => setShowConfirm(!showConfirm)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '20px',
              cursor: 'pointer'
            }}
          />
        </div>
      )}
    </>
  );
};

const ProfileInfoGroup = ({ label, value, isPassword, onChange, isEditing, confirmValue, onConfirmChange }) => (
  <div className="info-group" style={{ marginBottom: '3rem' }}>
    <label style={{ fontSize: '1.2rem', color: '#EE9337', fontWeight: 'bold' }}>{label}</label>
    {isEditing
      ? <EditForm value={value} onChange={onChange} isPassword={isPassword} confirmValue={confirmValue} onConfirmChange={onConfirmChange} />
      : <ViewForm value={value} isPassword={isPassword} />
    }
  </div>
);

const ProfileInfo = ({ userProfile, setUserProfile }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(userProfile);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleChange = (key) => (e) => {
    setTempProfile(prev => ({ ...prev, [key]: e.target.value }));
  };

  const isValidContactNumber = (contactNumber) => {
    const contactNumberPattern = /^(\+63|0)9\d{9}$/;
    return contactNumberPattern.test(contactNumber);
  };

  const handleConfirm = () => {
    if (!isValidContactNumber(tempProfile.contactNumber)) {
      setError("Invalid contact number format");
      return;
    }

    if (tempProfile.password === userProfile.password) {
      setUserProfile(tempProfile);
      setIsEditing(false);
      setConfirmPassword('');
      setError('');
    } else {
      if (tempProfile.password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      setUserProfile(tempProfile);
      setIsEditing(false);
      setConfirmPassword('');
      setError('');
    }
  };

  const handleCancel = () => {
    setTempProfile(userProfile);
    setIsEditing(false);
    setConfirmPassword('');
    setError('');
  };

  return (
    <div className="profile-container" style={{ maxWidth: '770px' }}>
      <div className="profile-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '0.1rem' }}>
        <h2 className="profile-title">Profile</h2>
        <span style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {isEditing ? (
            <>
              <span onClick={handleConfirm} style={{ cursor: 'pointer' }}>
                <img src={confirmicon} alt="confirm" width={smallIconSize} height={smallIconSize} />
                <span style={{ color: '#ee9337', marginLeft: '0.5rem' }}>Confirm</span>
              </span>
              <span onClick={handleCancel} style={{ cursor: 'pointer' }}>
                <img src={closeicon} alt="cancel" width={smallIconSize} height={smallIconSize} />
                <span style={{ color: '#ee9337', marginLeft: '0.5rem' }}>Cancel</span>
              </span>
            </>
          ) : (
            <span onClick={() => setIsEditing(true)} style={{ cursor: 'pointer' }}>
              <img src={editicon} alt="edit" width={smallIconSize} height={smallIconSize} />
              <span style={{ color: '#ee9337', marginLeft: '0.5rem' }}>Edit</span>
            </span>
          )}
        </span>
      </div>
      <div style={{ marginTop: '1rem' }}>
        <ProfileInfoGroup label="DEPARTMENT" value={tempProfile.department} isEditing={false} />
        <ProfileInfoGroup label="EMAIL" value={tempProfile.email} isEditing={false} />
        <ProfileInfoGroup label="CONTACT NUMBER" value={tempProfile.contactNumber} onChange={handleChange('contactNumber')} isEditing={isEditing} />
        <ProfileInfoGroup label="PASSWORD" value={tempProfile.password} onChange={handleChange('password')} isEditing={isEditing} isPassword confirmValue={confirmPassword} onConfirmChange={(e) => setConfirmPassword(e.target.value)} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};


function Profile() {
  const [userProfile, setUserProfile] = useState(initialUserProfile);

  return (
    <MainContainer>
      <Layout
        sidebar={<ProfileSidebar username={userProfile.username} role={userProfile.role} />}
        main={<ProfileInfo userProfile={userProfile} setUserProfile={setUserProfile} />}
      />
    </MainContainer>
  );
}

export default Profile;

