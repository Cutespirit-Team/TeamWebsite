import SITE_CFG from '../config/sitecfg.json'
const Footer = () => {
  return (
    <div>
      <hr />
      <p className='text-center'>
        {SITE_CFG.Copyright}
      </p>
    </div>
  )
}

export default Footer;
