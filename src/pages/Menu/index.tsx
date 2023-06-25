import { Layout } from "../../components";
import ItemProduct from "./ItemProduct";
import IProduct1 from "../../assets/images/1-removebg-preview.png";
import IProduct2 from "../../assets/images/2-removebg-preview.png";
import IProduct3 from "../../assets/images/3-removebg-preview.png";
import IProduct4 from "../../assets/images/4-removebg-preview.png";

const Menu = () => {
  return (
    <Layout>
      <ItemProduct
        title="Ultimate Detox"
        imgUrl={IProduct1}
        price={342}
        titlePosition="right"
      />
      <ItemProduct
        title="Product 2"
        imgUrl={IProduct2}
        price={342}
        titlePosition="left"
      />
      <ItemProduct
        title="Product 3"
        imgUrl={IProduct3}
        price={342}
        titlePosition="right"
      />
      <ItemProduct
        title="Product 4"
        imgUrl={IProduct4}
        price={342}
        titlePosition="left"
      />
    </Layout>
  );
};

export default Menu;
