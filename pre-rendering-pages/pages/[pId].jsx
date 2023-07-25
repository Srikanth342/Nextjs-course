const { Fragment } = require("react");
import fs from "fs/promises";
import path from "path";

const ProductDetails = (props) => {
  const { loadedProduct } = props;
  return (
    <Fragment>
      <h1>{loadedProduct?.title}</h1>
      <p>{loadedProduct?.description}</p>
    </Fragment>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
};

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.pId;
  const data = await getData();
  const product = data.products.find((product) => product.id === productId);
  if (!product) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();
  const ids = data.products.map((item) => ({ params: { pId: item.id } }));
  return {
    paths: ids,
    fallback: true,
  };
}

export default ProductDetails;
