import instagramLogo from '../assets/instagram.png'

const Nav = () => {
  return (
    <nav>
      <button className='logo'>
        <img src={instagramLogo} alt="logo" />
      </button>

      <input type="text" className="search" placeholder="search" />

      <span className='nav-links'>
        <button>
            <i className='fas fa-home'></i>
        </button>
        <button>
            <i className='far fa-comment-alt'></i>
        </button>
        <button>
            <i className='far fa-compass'></i>
        </button>
        <button>
            <i className='far fa-heart'></i>
        </button>
      </span>
    </nav>
  )
}

export default Nav
