import { Button, Container, Input } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import setUserSlice from "../redux/slice/user";
import { addUserSlice, editUserSlice } from "../redux/slice/users";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types/index";
const MyForm = () => {
  //   const user = ([user, setUser] = useState({
  //     id: 0,
  //     name: "Mahesh",
  //     email: "",
  //     password: "Mahesh@123",
  //   }));

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    dispatch(setUserSlice({ ...user, [prop]: event.target.value }));
  };

  const handleSubmit = () => {
    // user.id ===0 ? dispatch(addUserSlice({...user,id:nanoid(8)})) : dispatch(editUserSlice);

    user.id === 0
      ? dispatch({ type: CREATE_USER, user: { ...user, id: nanoid(8) } })
      : dispatch({ UPDATE_USER_BY_ID, user});
    dispatch(
      setUserSlice({
        id: 0,
        name: "",
        email: "",
        password: "",
      })
    );
  };

  return (
    <>
      <Container>
        <Input value={user.id} fullWidth disabled></Input>
        <Input
          onChange={handleChange("name")}
          placeholder="Enter name"
          value={user.name}
          fullWidth
        ></Input>
        <Input
          onChange={handleChange("email")}
          placeholder="Enter email"
          value={user.email}
          fullWidth
        ></Input>
        <Input
          onChange={handleChange("password")}
          placeholder="Enter password"
          value={user.password}
          fullWidth
        ></Input>
        <Button onClick={() => handleSubmit()} fullWidth variant="contained">
          Submit
        </Button>
      </Container>
    </>
  );
};

export default MyForm;
