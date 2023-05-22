import {
  Tr,
  Td,
  IconButton,
  Image
} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const CarItem = ({ car, deleteCar }) => {

  return (
    <Tr>
      <Td>{car.id}</Td>
      <Td>
        <Image
          className="first"
          objectFit="cover"
          h={"60px"}
          w={"60px"}
          src={`http://localhost:8000/images/${car.photo1}`}
          loading="lazy"
          borderRadius="10px"
        ></Image>
      </Td>
      <Td>{car.brand}</Td>
      <Td>{car.model}</Td>
      <Td>{car.gearbox}</Td>
      <Td>{car.fuel_type}</Td>
      <Td>{car.price} MAD</Td>
      {car.available === 1 ? (
        <Td className="text-success text-center">True</Td>
      ) : (
        <Td className="text-danger text-center">False</Td>
      )}

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
          onClick={()=>deleteCar(car.id)}
        />
      </Td>
    </Tr>
  );
};

export default CarItem;
