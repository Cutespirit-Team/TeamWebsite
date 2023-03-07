import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from '../assets/icon.png';

const Home = () => {
  return (
    <div className="container mx-auto pt-8 pl-5 pr-5 text-white transition-colors duration-100">
      <img src={ icon } width="5%" alt="" />
      <h1 className="text-4xl text-white">歡迎來到靈萌團隊官網</h1>
      <p>一群由台灣學生組成的團隊</p>
      <p>共同為了未來與夢想而打拼，為台灣的資訊安全而奮鬥。</p>

      <hr className='border-gray-600 mt-3 mb-3' />

      <div className="text-center p-4 mb-4 text-xl text-red-800 rounded-lg bg-red-100 dark:bg-gray-900 dark:text-red-400" role="alert">
        <FontAwesomeIcon icon={['fas', 'triangle-exclamation']} className="pr-2"/>
        還沒做好拉w，預計要四月。
      </div>
    </div>
  )
}

export default Home;
