import shoppingCart from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'

import '../Style/NavAccount.css'

export default function NavAccount() {
  return (
    <div className='navAccount'>
      <img className='shoppingCart' src={shoppingCart} />
      <img className='avatar' src={avatar} />
    </div>
  )
}