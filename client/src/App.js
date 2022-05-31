import { useQuery, gql } from "@apollo/client";
import "./styles.css";

export default function App() {
  const {
    data: { countries } = [],
    loading,
    error,
  } = useQuery(
    gql`
      query Countries {
        countries {
          code
          name
        }
      }
    `,
  );

  return (
    <div className="App">
      <ul>
        {countries?.map(el => (
          <li key={el.code}>
            {el.code} {el.name}
          </li>
        ))}
      </ul>
      <hr />
      {/* <input type="text" name="name" onChange={update} /> */}
      <button />
    </div>
  );
}
