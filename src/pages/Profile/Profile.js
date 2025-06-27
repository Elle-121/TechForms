import ProfileContainer from "../../pages/Profile/Profile_container";

const sidebar_content = (
  <div>
    <h3>Sidebar</h3>
    <p>Navigation or menu goes here</p>
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
