import shoesData from '../Data.json';

// Images
import birkenstockLowBend from '../images/birkenstockLowBend.png';
import arizonaSandel from '../images/birkenstock_Arizona.png'
import colehann_oxford from '../images/colehann_oxford.png';
import clarks_tilden_oxford from '../images/clarks_tilden_oxford.png';
import chuck_taylor_all_star_high_street_high_top_sneaker from '../images/chuck-taylor-all-star-high-street-high-top-sneaker.png';
import columbia_norton_hikingboot from '../images/columbia_norton_hikingboot.png';
import merrell_runningshoe from '../images/merrell_runningshoe.png';
import { useNavigate } from 'react-router-dom';



// Function to map the images to the API data
const images = {
  'birkenstock_Arizona.png': arizonaSandel,
  'birkenstockLowBend.png': birkenstockLowBend,
  'colehann_oxford.png': colehann_oxford,
  'clarks_tilden_oxford.png': clarks_tilden_oxford,
  'chuck-taylor-all-star-high-street-high-top-sneaker.png': chuck_taylor_all_star_high_street_high_top_sneaker,
  'columbia_norton_hikingboot.png': columbia_norton_hikingboot,
  'merrell_runningshoe.png': merrell_runningshoe
};




const Productlist = () => {

 const navigate = useNavigate();
  const goToProductPage = (id) => navigate(`/product/${id}`);

  return (

    // Maps the API data to the product list
    <div id='productlist'>
      <h2>Mens Shoes</h2>
      <div id='productcont' data-testid="scroll-box">
        {shoesData.product.filter(item => parseInt(item.productId) > 3499).map((item, index) => (
          <div className='scrollbox' key={index} style={{cursor:"pointer"}} onClick={() => goToProductPage(item.productId)}>
              <img src={images[item.image.split('/').pop()]} alt="" className='scrollimgs'/>
              <h3>{item.name}</h3>
              <h4>${item.price}</h4>
          </div>
    ))}
    </div>


    </div>
  )
}

export default Productlist