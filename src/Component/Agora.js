import React, {useState} from 'react';
import AgoraUIKit from 'agora-react-uikit';

const Agora = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '5682a290fd384242a78369cd7a88ebee',
    channel: 'test', // your agora channel
    token: '007eJxTYJCtke1f5bJH8RG7RgurVYf4Nsdd7+a6Vc5L+F647d+r6FkKDKZmFkaJRpYGaSnGFiZGJkaJ5hbGZpbJKeaJFhapSamp2646pzYEMjKcjGhmYIRCEJ+FoSS1uISBAQAZPx+f' // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default Agora;