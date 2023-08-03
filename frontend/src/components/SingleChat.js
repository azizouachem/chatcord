import React from 'react';
import { ChatState } from '../Context/ChatProvider';
import { Box } from '@chakra-ui/react';
const SingleChat = ({fetchAgain,setFetchAgain}) => {
  const{user,selectedChat,setSelectedChat}=ChatState();
  return (
    <Box display='flex' allignItems='center' justifyContent='center' h='100%'>
    <div >
      choose a user to start chatting
    </div>
    </Box>
  );
};

export default SingleChat;
