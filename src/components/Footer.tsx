import SITE_CFG from '../config/sitecfg.json'
const Footer = () => {
  return (
    <div className='pt-5 pb-1'>
      <hr />
      <p className='text-center text-white font-bold'>
        {SITE_CFG.Copyright} | <a href='https://github.com/Cutespirit-Team/TeamWebsite' className='text-cyan-400'>Github 本專案</a>
      </p>
    </div>
  )
}

export default Footer;
