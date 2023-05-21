import { Box, Flex, Spacer, Button, Icon } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';

function DashboardNav({ onLogout }) {


  const handleLogout = () => {
    // Handle logout logic
    // onLogout();
  };

  return (
    <Flex alignItems="center" p={4}>
      <Box>
        <Link to="/dashboard" fontWeight="bold" fontSize="xl">
          Dashboard
        </Link>
      </Box>

      <Spacer />

      <Button
        color={"gray.600"}
        colorScheme={"blackAlpha"}
        variant="ghost"
        leftIcon={<MdLogout color="gray" />}
        onClick={() => handleLogout()}
      >
        Logout
      </Button>
    </Flex>
  );
}

export default DashboardNav;
