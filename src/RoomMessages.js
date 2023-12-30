import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import firestore from './firebaseConfig';

const RoomMessages = ({ roomId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const messagesRef = collection(firestore, 'rooms', roomId, 'messages');
        const messagesSnapshot = await getDocs(messagesRef);

        setMessages(messagesSnapshot.docs.map(doc => doc.data()));
      } catch (error) {
        console.error("Error getting messages:", error);
      }
    };

    fetchMessages();
  }, [roomId]);

  return (
    <div>
      <h2>Messages in Room {roomId}</h2>
      <ul>
        {messages.map((message, index) => {
          const result = `${message.name} --> ${message.message}`
          return <li key={index}>{result}</li>
        })}
      </ul>
    </div>
  );
};

export default RoomMessages;
