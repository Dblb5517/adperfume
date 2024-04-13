import Product from '../product/Product';
import './shop.scss';
import data from '../../data.js';

const Shop = () => {
  return (
    <div className='shop'>
      {
        data.map((item)=>{
          return <Product item={item} />
        })
      }
    </div>
  )
}

export default Shop;