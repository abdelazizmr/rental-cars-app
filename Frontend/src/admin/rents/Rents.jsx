import {
  TableContainer,
  Thead,
  Table,
  Tr,
  Th,
  Tbody,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon, UpDownIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axiosClient from "../../context/axiosClient";
import LoadingSpinner from "../../components/ui/loading-spinner";
import RentItem from "./RentItem";


const Rents = () => {

  const [rents, setrents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");


  useEffect(() => {
    const fetchrents = async () => {
      const { data } = await axiosClient.get("http://127.0.0.1:8000/api/rents");
      setLoading(false);
      setrents(data);
    };
    fetchrents();
  }, []);


  if (loading) return <LoadingSpinner />;

  return (
    <TableContainer p={10}>
      <Flex justify="end" py={2} mb={4}>
        <InputGroup w="300px">
          <Input
            type="text"
            value={search}
            placeholder="Search for rents"
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          />
          <InputRightElement pointerEvents="none">
            <SearchIcon color="gray.400" />
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>photo</Th>
            <Th>brand</Th>
            <Th>price</Th>
            <Th>firstname</Th>
            <Th>telephone</Th>
            <Th>rental date</Th>
            <Th>
              return date
              <IconButton
                ml={2}
                aria-label="order_price"
                icon={<UpDownIcon />}
                onClick={() => console.log("delete")}
              />
            </Th>
            <Th>
              total
              <IconButton
                ml={2}
                aria-label="order_price"
                icon={<UpDownIcon />}
                onClick={() => console.log("delete")}
              />
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {rents &&
            rents
              .filter(
                (rent) =>
                  rent.brand.toLowerCase().includes(search) ||
                  rent.firstname.toLowerCase().includes(search)
              )
              .map((rent) => (
                <RentItem
                  rent={rent}
                  key={rent.id}
                  rents={rents}
                  setrents={setrents}
                />
              ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Rents;
