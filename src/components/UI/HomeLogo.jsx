import { Link } from 'react-router';
import { logo } from '../details';

const HomeLogo = () => {
  return (
    <Link to={'/'} className="cursor-pointer">
      <img src={logo} alt="Learnverrse's Logo" className="h-7 object-contain" />
    </Link>
  );
};

export default HomeLogo;
