import './App.css'

import {
  useQuery,
  gql
} from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
    }
  }
`;

function Books() {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.books.map(({ title, author }) => (
    <div key={title}>
      <p>
        {author}: {title}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <Books />
    </div>
  )
}

export default App
