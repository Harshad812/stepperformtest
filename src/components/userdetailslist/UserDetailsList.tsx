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
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              key={key}
            >
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
