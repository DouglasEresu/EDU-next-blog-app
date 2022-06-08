import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div className={headerStyles.title}>
        <h1><span>EDU NEXT</span>BLOGS APP</h1>
        <p className={headerStyles.description}>
            Read through our blogs here
        </p>
        
    </div>
  )
}

export default Header