import RoomMessages from './RoomMessages';

const App = () => {
  const roomId = "yQtOm94Odg12rgFC6e3M";

  return (
    <div>
      <h1>React Firebase Realtime Database Example</h1>
      <RoomMessages roomId={roomId} />
    </div>
  );
};

export default App;
