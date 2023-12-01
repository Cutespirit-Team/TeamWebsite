import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import icon from '../assets/icon.png';

const Home = () => {
  return (
    <div className="container mx-auto pt-2 pl-5 pr-5 text-white transition-colors duration-100">
      <div className='flex gap-4 items-center'>
        <img src="https://www.bityo.tw/imgs/bityo_bg_circle.png" width="50px" alt="" />
        <FontAwesomeIcon icon={['fas', 'handshake-simple']} />
        <img src={icon} width="50px" alt=""/>
      </div>
      <h1 className="text-4xl text-white">歡迎來到靈萌團隊官網</h1>
      <p className='pt-6'>靈萌團隊是幣友科技旗下的一個團隊，一群由台灣學生組成的團隊</p>
      <p>共同為了未來與夢想而打拼，為台灣的資訊安全而奮鬥。</p>

      <hr className='border-gray-600 mt-10 mb-3' />

      <div className="text-center p-4 mb-4 text-xl text-red-800 rounded-lg bg-red-100 dark:bg-gray-900 dark:text-red-400" role="alert">
        <FontAwesomeIcon icon={['fas', 'triangle-exclamation']} className="pr-2"/>
        靈萌團隊目前也已與<a href="https://bityo.tw" className="underline-offset-4 underline text-bityo hover:text-bityo-hover">幣友科技</a>合併，並正式成為幣友科技的旗下團隊。
      </div>
    </div>
  )
}

export default Home;
