import Chat from './Components/Chat/Chat'
import Nav from './Components/Nav/Nav'
import SideBar from './Components/SideBar/SideBar'

const App = () => {
  return (
    <div className='h-screen w-screen overflow-hidden flex divide-x divide-content1 text-default-900'>
      <Nav />
      <div className="grid grid-cols-12 w-full">
        <SideBar />
        <Chat />
      </div>
    </div>
  )
}

export default App
