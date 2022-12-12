import { getSessionData } from "@pangeacyber/react-auth";

const Profile = () => {
  const sessionData = getSessionData();
  console.log(sessionData.profile);

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div>Identity: {sessionData.identity}</div>
      <div>First Name: {sessionData.profile.first_name}</div>
      <div>Last Name: {sessionData.profile.last_name}</div>
      <div>Email: {sessionData.email}</div>
    </div>
  );
}

export default Profile;