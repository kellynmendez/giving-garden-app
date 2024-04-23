import React from 'react'
import { Provider } from 'react-redux'
// import H from '../components/DonationItem'
import store from '../redux/store'
import AddDonation from '../components/AddDonation'

const DonationPortal = () => {
  return (
    <Provider store={store}>
      <AddDonation></AddDonation>
    </Provider>

  )
}

export default DonationPortal