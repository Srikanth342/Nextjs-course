import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();
  console.log("pathName", router.pathname);
  console.log("query", router.query);
  return <h1>The Portfolio Project Page</h1>;
};
export default PortfolioProjectPage;
