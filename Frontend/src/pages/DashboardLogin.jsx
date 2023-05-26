import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function DashboardLogin() {
  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <Box
      width="300px"
      margin="auto"
      mt="100px"
      bg="white"
      boxShadow="lg"
      rounded="md"
      p={6}
    >
      <form onSubmit={handleLogin}>
        <FormControl isRequired>
          <FormLabel>Admin username</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            focusBorderColor="blue.400"
          />
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            focusBorderColor="blue.400"
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          width="full"
          mt={6}
          _hover={{ bg: "blue.600" }}
        >
          Login
        </Button>
      </form>
    </Box>
  );
}

export default DashboardLogin;
