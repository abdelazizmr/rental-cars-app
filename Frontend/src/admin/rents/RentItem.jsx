import { Tr, Td, IconButton, Image } from "@chakra-ui/react";
import { DownloadIcon } from "@chakra-ui/icons";
import axiosClient from "../../context/axiosClient"




const RentItem = ({ rent }) => {



 const downloadRent = async (id) => {
   try {
     const response = await axiosClient({
       url: `/rents/${id}/download-rent`,
       method: "GET",
       responseType: "arraybuffer", // Set the response type to 'arraybuffer'
     });

     // Create a Blob from the response data
     const blob = new Blob([response.data], { type: "application/pdf" });

     // Create a temporary <a> element and click it to trigger the file download
     const link = document.createElement("a");
     link.href = window.URL.createObjectURL(blob);
     link.setAttribute("download", "rent_facture.pdf");
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   } catch (error) {
     console.error(error);
   }
 };


  return (
    <Tr>
      <Td>{rent.id}</Td>
      <Td>
        <Image
          className="first"
          objectFit="cover"
          h={"50px"}
          w={"80px"}
          src={`http://localhost:8000/images/${rent.photo}`}
          loading="lazy"
          borderRadius="10px"
        ></Image>
      </Td>
      <Td>{rent.brand}</Td>
      <Td>{rent.price}</Td>
      <Td>{rent.firstname}</Td>
      <Td>{rent.telephone}</Td>
      <Td>{rent.rental_date}</Td>
      <Td>{rent.return_date}</Td>
      <Td className="text-bold">{rent.total} MAD</Td>

      <Td>
        <IconButton
          bg={""}
          _hover={{ bg: "red", color: "white" }}
          ml={1}
          aria-label="download"
          icon={<DownloadIcon />}
          onClick={() => downloadRent(rent.id)}
        />
      </Td>
    </Tr>
  );
};

export default RentItem;
