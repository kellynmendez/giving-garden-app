import React from 'react'
import { Provider } from 'react-redux'
import H from '../components/DonationItem'
import store from '../redux/store'
import MyCart from '../components/MyCart'

const Basket = () => {
    return (
    <Provider store={store}>
      <meta charSet="utf-8"/>
          <div className="flex items-end py-10">
            <p className="font-serif font-heading text-5xl font-bold text-[#426B1F] py-5 px-20"> Basket</p>
          </div>
        <hr />
      <MyCart></MyCart>
    </Provider>

  )
}

export default Basket
