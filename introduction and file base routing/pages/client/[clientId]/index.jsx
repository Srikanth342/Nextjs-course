import { useRouter } from "next/router";
const ClientProjectsPage = () => {
  const router = useRouter();
  console.log("router", router.query);
  const handleLoadProject = () => {
    router.push(`/client/${router.query.clientId}/projecta`)
  };
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={handleLoadProject}>Load Project A</button>
    </div>
  );
};
export default ClientProjectsPage;
