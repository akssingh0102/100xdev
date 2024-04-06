import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa; /* Light gray background */
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// export function CreateTodo(props) {
//   return (
//     <Container>
//       <FormContainer>
//         <Input type="text" placeholder="title" />
//         <Input type="text" placeholder="description" />
//         <Button type="button">Add Todo</Button>
//       </FormContainer>
//     </Container>
//   );
// }

export function CreateTodo(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveTodoToServer = async () => {
    const response = await axios.post("http://127.0.0.1:3000/todo", {
      title,
      description,
    });
    if (response.status == 201) {
      console.log("Todo added", response.data);
      props.setTodos([...props.todos , response.data.data])
    }
  };
  return (
    <>
      <input
        onChange={function (e) {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="title"
      />{" "}
      <br />
      <input
        onChange={function (e) {
          setDescription(e.target.value);
        }}
        type="text"
        placeholder="description"
      />{" "}
      <br />
      <button onClick={saveTodoToServer} type="button">
        Add Todo
      </button>
    </>
  );
}
