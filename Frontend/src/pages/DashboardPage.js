import {
  Box,
  Container,
  HStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import {useStateContext} from "../context/ContextProvider";
import { Outlet, useNavigate } from "react-router-dom";

function Dashboard() {

  const { token } = useStateContext()

  const navigate = useNavigate()

  return (
    <Container h="100vh" maxW="100vw" p={0}>
      <HStack h={"full"} spacing="0">
        <Box bg={"gray.600"} px="5" py={"40vh"} h={"full"} w="200px" position="sticky" top="0">
          <List color={"white"} align="center">
            <ListItem
              transition="all 0.2s"
              borderRadius="md"
              p={2}
              cursor="pointer"
              _hover={{ bg: "gray.500" }}
              onClick={()=>navigate('/dashboard')}
            >
              Users
            </ListItem>
            <ListItem
              transition="all 0.2s"
              borderRadius="md"
                 cursor="pointer"
              my={4}
              p={2}
              _hover={{ bg: "gray.500" }}
              onClick={()=>navigate('/dashboard/cars')}
              
            >
              Cars
            </ListItem>
            <ListItem
              transition="all 0.2s"
              borderRadius="md"
              p={2}
                 cursor="pointer"
              _hover={{ bg: "gray.500" }}
              onClick={()=>navigate('/dashboard/rents')}
            >
              Rents
            </ListItem>
          </List>
        </Box>
        <Box h={"full"} w={'full'}>
          <Outlet />
        </Box>
      </HStack>
    </Container>
  );
}
export default Dashboard;
