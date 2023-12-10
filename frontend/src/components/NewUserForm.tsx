import { FormEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GET_USER } from "../App";
import { client } from "../lib/apollo";

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name){
      id
      name
    }
  }
`

export function NewUserForm(){
  const [name, setName] = useState("");

  const[createUser] = useMutation(CREATE_USER)

  async function handleCreateUser(event: FormEvent){
    event.preventDefault();

    if(!name){
      return;
    }
    await createUser({
      variables: {
        name,
      }, 
      /*refetchQueries:[GET_USER]
       pode ser feito assim também*/
      update: (cache, {data: {createUser}}) => {
        const {users} = client.readQuery({query: GET_USER})

        cache.writeQuery({
          query: GET_USER,
          data: {
            users: {
              ...users, 
              createUser,
            }
          }
        })
      } 
    })
  }

  return (
    <form onSubmit={handleCreateUser} className="form">
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Digite um nome" className="input"/>
      <button type="submit" className={(name === "")? "disable" : "submitButton"}>Enviar</button>
    </form>
  );
}