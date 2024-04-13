import './home.scss';
import BestSeller from '../bestSeller/BestSeller';
import Under from '../under/Under';

const Home = () => {
  return (
    <div>
        <Under/>
        <BestSeller />
    </div>
  )
}

export default Home