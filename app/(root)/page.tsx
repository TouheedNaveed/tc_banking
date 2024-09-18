import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSidebar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import React from 'react'

const Home = () => {

  const loggedIn = { firstName: "Touheed", lastName: 'Naveed', email: 'braja7059@gmail.com' }
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500.35}
          />
        </header>
        RECENT transactions
      </div>
      <RightSideBar user={loggedIn} transactions={[]} banks={[{ currentBalance: 123.50 }, { currentBalance: 50.87 }]} />
    </section>
  )
}

export default Home
