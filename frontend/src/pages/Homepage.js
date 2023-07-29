import React from "react";
import {Box, Container,Text,Tab,TabList,TabPanel,TabPanels,Tabs}from "@chakra-ui/react";
import Login from "../components/authentification/Login.js";
import Signup from "../components/authentification/Signup";
import { useEffect } from "react";
import { useHistory } from "react-router";
function Homepage() {
    const history = useHistory();

    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("userInfo"));
  
      if (user) history.push("/chats");
    }, [history])
    return (
        <Container maxW='xl' centerContent>
            <Box
                d="flex"
                justifyContent="center"
                p={3}
                bg="white"
                w="100%"
                m="40px 0 15px 0"
                borderRadius="1g"
                borderWidth="0px">
                <Text fontSize="4xl" fontFamily="Work sans"> CHATCORD</Text>
            </Box>
            <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
                <Tabs size='md' variant='enclosed'>
                    <TabList mb='1em'>
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Signup</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>



    );

}
export default Homepage;