/**
 * Een simpele profiel kaart component
 */
function ProfileCard({ name, age, bio }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      {age && <p>Leeftijd: {age}</p>}
      {bio && <p className="bio">{bio}</p>}
      {!bio && <p>Geen bio beschikbaar</p>}
    </div>
  );
}

export default ProfileCard;
