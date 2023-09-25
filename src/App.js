import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <ChatEngine
      height="100vh"
      projectID=""
      userName="yams"
      userSecret="1234"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
    ></ChatEngine>
  );
}

export default App;
