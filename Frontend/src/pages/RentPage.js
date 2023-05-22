import {
  Center,
  FormLabel,
  Input,
  HStack,
  Box,
  Button,
  Image,
  VStack,
  Text,
  Heading,
  Spacer,
  Stack,
  SimpleGrid,
  GridItem,
  Divider 
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/ui/loading-spinner";
import axiosClient from "../context/axiosClient";
import {useStateContext} from "../context/ContextProvider";

function Rent() {
  const navigate = useNavigate();

  const { user, token } = useStateContext()

  let {id} = useParams();
  const [car, setCar] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [rentalDate, setrentalDate] = useState('')
  const [returnDate, setreturnDate] = useState('')

  const toast = useToast();
  const toastMessage = (message, type = "error", title = "Error occured.") => {
    return toast({
      title: title,
      description: message,
      status: type,
      duration: 3000,
      isClosable: true,
    });
  };


  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/cars/${id}`)
      .then((response) => {
      setCar(response.data.data[0]);
      setLoading(false);
      });
  }, [id]);

  if (isLoading) return <LoadingSpinner />;

  async function rentACar(e) {
    e.preventDefault();

    if(!token){
      navigate('/login')
      return 
    }

    const start = new Date(rentalDate);
    const end = new Date(returnDate);

    const differenceInMilliseconds = Math.abs(end - start);
    const rentDuration = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    if (rentDuration <= 0) {
      toastMessage(
          `The number of days must be at least 1`,
          "error",
          "invalid number of days"
      ); 
    } else {
      const price = car.price * rentDuration
      const formData = {
        rental_date : rentalDate,
        return_date : returnDate,
        price,
        user_id : user.id, // that should be the current user
        car_id : car.id
      }
      console.log(formData)
      
      await axiosClient.post('http://127.0.0.1:8000/api/rents',formData)
      toastMessage(
          `The rental is done, you are renting for ${rentDuration} days`,
          "success",
          "rent created"
      ); 
      navigate('/profile')
    }
  }

  return (
    <Center h={"100vh"} m={["5%", "10%", "12%", "13%", "0"]}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        boxShadow="xl"
        h={"auto"}
        w={"80%"}
        borderRadius="15px"
        overflow={"hidden"}
      >
        <Box w={{ base: "100%", lg: "50%" }}>
          <Image
            src={`http://localhost:8000/images/${car.photo1}`}
            objectFit="cover"
            h={"full"}
          ></Image>
        </Box>
        <Box w={{ base: "100%", lg: "50%" }} p={"5%"} bg={"white"} h={"full"}>
          <VStack alignItems={"center"} spacing={"3"}>
            <Heading fontWeight={"500"}>{car.brand}</Heading>

            <FormLabel fontWeight="600" color="gray.600">
              Rental date
            </FormLabel>
            <Input
              type={"date"}
              value={rentalDate}
              onChange={(e) => setrentalDate(e.target.value)}
            />
            <FormLabel fontWeight="600" color="gray.600">
              Return date
            </FormLabel>
            <Input
              type={"date"}
              value={returnDate}
              onChange={(e) => setreturnDate(e.target.value)}
            />

            <Divider borderColor="gray.300" py={3} />
            <SimpleGrid w={"full"} columns={3} py={3} textAlign="center">
              <GridItem>
                <Heading fontWeight="500" color="gray.400" size="xs">
                  Gearbox
                </Heading>
                <Text fontWeight="600" color="gray.600">
                  {car.gearbox}
                </Text>
              </GridItem>
              <GridItem>
                <Heading fontWeight="500" color="gray.400" size="xs">
                  Type
                </Heading>
                <Text fontWeight="600" color="gray.600">
                  {car.fuel_type}
                </Text>
              </GridItem>
              <GridItem>
                <Heading fontWeight="500" color="gray.400" size="xs">
                  Available
                </Heading>
                <Text fontWeight="600" color="gray.600">
                  {car.available ? "yes" : "no"}
                </Text>
              </GridItem>
            </SimpleGrid>
            <Divider borderColor="gray.300" py={0} />

            <HStack w={"full"} justify={"space-between"}>
              <Text fontWeight="600" color="gray.600">
                Total
              </Text>
              <Spacer />
              <Text
                color="gray.600"
                fontSize="2xl"
                fontWeight={["bold", "extrabold"]}
              >
                {car.price}.00 MAD
              </Text>
              <Text ml={2} fontSize="xl" fontWeight="medium" color="gray.500">
                MAD
              </Text>
            </HStack>
            <Button onClick={rentACar} w={"full"}>
              Confirm rent
            </Button>
          </VStack>
        </Box>
      </Stack>
    </Center>
  );
}

export default Rent;
