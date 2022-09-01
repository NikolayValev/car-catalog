import headerStyles from './Header.module.css'
 
const Header = () => {
  return (
    <div className={headerStyles.container}>
      <h1 className={headerStyles.title}>
        <span>Cars for everyone</span>
      </h1>
      <p className={headerStyles.description}>
        Browse a wide selection of vehicles.
      </p>
    </div>
  )
}

export default Header