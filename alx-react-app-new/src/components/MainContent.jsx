// src/components/MainContent.jsx
import UserProfile from './UserProfile';

function MainContent() {
  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#e8f0fe',
        minHeight: '60vh',
      }}
    >
      <h2 style={{ textAlign: 'center', color: 'navy' }}>
        Welcome to My Favorite Cities App
      </h2>

      <UserProfile name="Celine" age="29" bio="Loves coding and exploring new cities." />
      <UserProfile name="Jean" age="32" bio="Enjoys nature and good food." />
    </main>
  );
}

export default MainContent;
