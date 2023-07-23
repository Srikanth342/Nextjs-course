import { useRouter } from "next/router";
const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log("router", router.query);
  return (
    <div>
      <h1>The Project Page for a Specific Page for a Selected Client</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
