import Link from "next/link";

const ClientPage = () => {
  const clients = [
    { id: "sri", name: "srikanth" },
    { id: "arun", name: "Arun" },
  ];
  return (
    <div>
      <h1>Client page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{ pathname: "/client/[clientId]", query: { clientId: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ClientPage;
