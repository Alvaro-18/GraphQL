import { gql, useQuery } from "@apollo/client"
import { NewUserForm } from "./components/NewUserForm";

export const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

type User = {
  id: string;
  name: string;
}

function App() {
  const {data, loading} = useQuery<{users: User[]}>(GET_USER)
  if (loading) {
    return <p>carregando....</p>
  }

  return(
    <div className="box">
      <ul className="list">
        {data?.users.map(user => <li key={user.id} className="listItem">{user.name}
        <button className="listItemButton">Deletar</button>
        </li>)}
      </ul>
      <NewUserForm/>
    </div>
  )
}

export default App
