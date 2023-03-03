import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../stepperform";

export const UserDetailsList = () => {
  const { user } = useContext(UserContext);
  const data = { ...user?.userDetails, ...user?.addressDetails };
  const userDetails = Object.entries(data);

  return (
    <TableContainer component={Card}>
      <Table aria-label="simple table" border={1}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography textTransform="capitalize">Name</Typography>
            </TableCell>

            <TableCell>
              <Typography textTransform="capitalize">Value</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userDetails.map(([key, val]) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                <Typography textTransform="capitalize">{key}</Typography>
              </TableCell>
              <TableCell>
                <Typography textTransform="capitalize">{val}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
