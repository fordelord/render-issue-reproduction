import Head from "next/head";
import {
  randAccessory,
  randEmail,
  randFullName,
  randIban,
} from "@ngneat/falso";
import { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel } from "@mui/material";

type arrayObjects = {
  street: string;
  city: string;
  zipCode: string;
  county: string;
  country: string;
};

export default function Home() {
  const [emails, setEmails] = useState<string[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [ids, setIds] = useState<string[]>([]);
  const [animals, setAnimals] = useState<string[]>([]);
  const [usersList, setUsersList] = useState<string[]>([]);

  useEffect(() => {
    setEmails(randEmail({ length: 1000 }));
    setNames(randFullName({ length: 1000 }));
    setIds(randIban({ length: 1000 }));
    setAnimals(randAccessory({ length: 1000 }));
  }, []);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className=""
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ul style={{ listStyle: "none" }} className="">
          {emails.map((email, index) => {
            return <li key={index}>{email}</li>;
          })}
        </ul>
        <ul style={{ listStyle: "none" }} className="">
          {names.map((name, index) => {
            return <li key={index}>{name}</li>;
          })}
        </ul>
        <ul style={{ listStyle: "none" }} className="">
          {ids.map((id, index) => {
            return (
              <li key={index} className="">
                {id}
              </li>
            );
          })}
        </ul>
        <ul className="" style={{ listStyle: "none" }}>
          {animals.map((animal, index) => {
            return (
              <li
                key={index}
                className=""
                style={{ height: "24.5px", marginRight: 0 }}
              >
                {animal}
                <FormControlLabel
                  id={animal}
                  control={<Checkbox checked={usersList.includes(animal)} />}
                  label="Compare"
                  onChange={() => {
                    if (usersList.includes(animal)) {
                      const updatedPlayerList = usersList.filter(
                        (playerId) => playerId !== animal
                      );

                      setUsersList(updatedPlayerList);
                    } else {
                      setUsersList([...usersList, animal]);
                    }
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
