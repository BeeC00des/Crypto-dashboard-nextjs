import Image from 'next/image'
import mainStackLogo from '../../../public/mainstack-logo.png'

export default function NavBar() {
  return <div className="w-full h-16 border-1 shadow-md rounded-full flex justify-between items-center fixed">
    <div className="px-3"> 
    <Image
          alt="mainStackLogo"
          src={mainStackLogo}
        />
    </div>
    <div className="py-2">
      <nav className="flex">
        <ul className="list-none flex " >
          <li className='px-4'>Home</li>
          <li className='px-4'>Analytics</li>
          <li className='px-4'>Revenue</li>
          <li className='px-4'>CRM</li>
          <li className='px-4'>Apps</li>
        </ul>
      </nav>
    </div>
    <div className="navLogo flex justify-center px-3">
      <div className="px-4">notify </div>
      <div className="px-4">Message</div>
    </div>
  </div>;
}