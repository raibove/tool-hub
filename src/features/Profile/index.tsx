import { useAuth } from "@pangeacyber/react-auth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="profile">
      <h1>Profile</h1>
      <div>Identity: {user?.identity}</div>
      <div>Email: {user?.email}</div>
      <div>First Name: {user?.profile?.first_name}</div>
      <div>Last Name: {user?.profile?.last_name}</div>
      <div>Phone: {user?.profile?.phone}</div>
    </div>
  );
}

export default Profile;