import ProdItem from "./productItem";
import "./AvailableItem.css"

const productsArr = [
  {

    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 1,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 1,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    },
    {

      title: 'Blue Color',
      
      price: 100,
      
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

      quantity:1
      
      }
];

const AvailableItems = () => {
  const productList = productsArr.map((product,index) => (
    <ProdItem
      key={product.id}
      title={product.title}
      price={product.price}
      imageUrl={product.imageUrl}
      quantity={product.quantity}
      showSecondInRow={index % 2 !== 0}
    />
  ));
  return (
    <section>
      <ul className="product-list">{productList}</ul>
    </section>
  );
};

export default AvailableItems;
