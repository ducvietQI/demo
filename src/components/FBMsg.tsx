import { FacebookProvider, MessageUs } from "react-facebook";

const FBMsg = () => {
  return (
    <FacebookProvider appId="930256032483730">
      <MessageUs messengerAppId="930256032483730" pageId="100086474307081" />
    </FacebookProvider>
  );
};

export default FBMsg;
