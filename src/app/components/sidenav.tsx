import Image from 'next/image';
import mainStackLogo from '../../../public/mainstack-logo.png'

export default function SideNav() {
    return <div className="w-12 md:w-12 border-2 shadow-lg rounded-full h-56 flex justify-center">
            <ul className="list-none flex-none fixed">
                <li className='py-2'>
                    <Image
                        alt="mainStackLogo"
                        src={mainStackLogo}
                    />
                </li>
                <li className='py-2'>
                    <Image
                        alt="mainStackLogo"
                        src={mainStackLogo}
                    /></li>
                <li className='py-2'>
                    <Image
                        alt="mainStackLogo"
                        src={mainStackLogo}
                    /></li>
                <li className='py-2'>
                    <Image
                        alt="mainStackLogo"
                        src={mainStackLogo}
                    /></li>
            </ul>
        {/* </nav> */}

    </div>;
}