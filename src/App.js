
import { Design1, Design2, Footer, Header, Join, Journey, Nav } from './components'

const App = () => {
  return (
    <div>
      <div className='text-blue'>
        <Nav />
      </div>

      <div className='p-[30px]'>
        <Header />
      </div>

      <div className='p-[30px]'>
        <Journey />
      </div>

      <div className='p-[30px]'>
        <Design1 />
      </div>

      <div className='p-[30px]'>
        <Design2 />
      </div>

      <div className=''>
        <Join />
      </div>

      <div className='p-[30px]'>
        <Footer />
      </div>
    </div>
  )
}

export default App
