import Button from "../../components/Button";

interface IItemProduct {
  title: string;
  price: number;
  titlePosition: "right" | "left";
  imgUrl: string;
}

const ItemProduct: React.FC<IItemProduct> = ({
  title,
  price,
  titlePosition,
  imgUrl,
}) => {
  // const TPosition = titlePosition === "right"
  return (
    <div className="item-product">
      <div className={`item-product_title-container ${titlePosition}`}>
        <h2>{title}</h2>
        <p>{price}</p>
        <Button />
      </div>
      <img className="item-product_img" src={imgUrl} alt={title} />
    </div>
  );
};

export default ItemProduct;
