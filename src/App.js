import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddTaskIcon from "@mui/icons-material/AddTask";
// import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const addData = () => {
    setData([
      ...data,
      {
        name,
        email,
      },
    ]);
    setName("");
    setEmail("");
  };
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
     setData([...arr]);
  }
  return (
    <div className="app">
      <Header />
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddTaskIcon />
          </Button>
        </Stack>
      </div>

      <div className="data-store">
        <div className="data-div">
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Remove</h3>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data-div">
              <h3>{element.name}</h3>
              <h3>{element.email}</h3>
              <Button onClick={()=> removeItem(index)} variant="outlined" color="error">
                <DeleteIcon />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
