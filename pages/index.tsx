import { randUser } from "@ngneat/falso";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import {
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface Person {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  img: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
  phone: string;
}

export default function Home() {
  const [people, setPeople] = useState<Person[]>([]);
  const [usersList, setUsersList] = useState<string[]>([]);

  useEffect(() => {
    setPeople(randUser({ length: 1000 }));
  }, []);

  return (
    <div style={{ fontFamily: "Arial" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "20px" }}>Name</TableCell>
              <TableCell sx={{ fontSize: "20px" }} align="center">
                Email
              </TableCell>
              <TableCell sx={{ fontSize: "20px" }} align="center">
                Id
              </TableCell>
              <TableCell sx={{ fontSize: "20px" }} align="center">
                Number
              </TableCell>
              <TableCell sx={{ fontSize: "20px" }} align="center">
                CheckBox
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {people.map((person) => (
              <TableRow
                key={person.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {person.firstName}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {person.email}
                </TableCell>
                <TableCell align="center">{person.id}</TableCell>
                <TableCell align="center">{person.phone}</TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    id={person.id}
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "rgb(75, 180, 128)",
                          },
                        }}
                        checked={usersList.includes(person.id)}
                      />
                    }
                    label="Checkbox"
                    onChange={() => {
                      if (usersList.includes(person.id)) {
                        const updatedPlayerList = usersList.filter(
                          (playerId) => playerId !== person.id
                        );

                        setUsersList(updatedPlayerList);
                      } else {
                        setUsersList([...usersList, person.id]);
                      }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
