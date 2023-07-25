import { Fragment } from "react";

const userProfilePage = (props) => {
  const { userName } = props;
  return (
    <Fragment>
      <h1>{userName}</h1>
    </Fragment>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      userName: "srikanth",
    },
  };
}

export default userProfilePage;
