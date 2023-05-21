import {
  TableContainer,
  Thead,
  Table,
  Tr,
  Th,
  Td,
  Tbody,
  IconButton,
  Heading
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axiosClient from "../../context/axiosClient";
import LoadingSpinner from "../../components/ui/loading-spinner";


const Cars = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const fetchUsers = async ()=>{
      const { data } = await axiosClient.get('http://127.0.0.1:8000/api/users')
      setLoading(false)
      setUsers(data)
    }
    fetchUsers()
  },[])

  if (loading)  return  <LoadingSpinner />
  
  return (
    <TableContainer p={10}>
            <Heading fontSize={"2xl"} pb="5">
              Hi, Admin
            </Heading>
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>brand</Th>
                  <Th>model</Th>
                  <Th>gearbox</Th>
                  <Th>type</Th>
                  <Th>price</Th>
                  <Th>availability</Th>
                  <Th>operations</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>yes</Td>
                  <Td>
                    <IconButton
                      bg={""}
                      _hover={{ bg: "blue.400", color: "white" }}
                      mr={1}
                      aria-label="Edit"
                      icon={<EditIcon />}
                    />

                    <IconButton
                      bg={""}
                      _hover={{ bg: "red", color: "white" }}
                      ml={1}
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>2</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>yes</Td>
                  <Td>
                    <IconButton
                      bg={""}
                      _hover={{ bg: "blue.400", color: "white" }}
                      mr={1}
                      aria-label="Edit"
                      icon={<EditIcon />}
                    />

                    <IconButton
                      bg={""}
                      _hover={{ bg: "red", color: "white" }}
                      ml={1}
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>3</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>yes</Td>
                  <Td>
                    <IconButton
                      bg={""}
                      _hover={{ bg: "blue.400", color: "white" }}
                      mr={1}
                      aria-label="Edit"
                      icon={<EditIcon />}
                    />

                    <IconButton
                      bg={""}
                      _hover={{ bg: "red", color: "white" }}
                      ml={1}
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>4</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>yes</Td>
                  <Td>
                    <IconButton
                      bg={""}
                      _hover={{ bg: "blue.400", color: "white" }}
                      mr={1}
                      aria-label="Edit"
                      icon={<EditIcon />}
                    />

                    <IconButton
                      bg={""}
                      _hover={{ bg: "red", color: "white" }}
                      ml={1}
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>5</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$100</Td>
                  <Td>yes</Td>
                  <Td>
                    <IconButton
                      bg={""}
                      _hover={{ bg: "blue.400", color: "white" }}
                      mr={1}
                      aria-label="Edit"
                      icon={<EditIcon />}
                    />

                    <IconButton
                      bg={""}
                      _hover={{ bg: "red", color: "white" }}
                      ml={1}
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                    />
                  </Td>
                </Tr>
                <Tr>
                  <Td>6</Td>
                  <Td>Cleo</Td>
                  <Td>2017</Td>
                  <Td>automatic</Td>
                  <Td>diesel</Td>
                  <Td>$150</Td>
                  <Td>yes</Td>
                  <Td>
                    <IconButton
                      bg={""}
                      _hover={{ bg: "blue.400", color: "white" }}
                      mr={1}
                      aria-label="Edit"
                      icon={<EditIcon />}
                    />

                    <IconButton
                      bg={""}
                      _hover={{ bg: "red", color: "white" }}
                      ml={1}
                      aria-label="Delete"
                      icon={<DeleteIcon />}
                    />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
  )
}

export default Cars