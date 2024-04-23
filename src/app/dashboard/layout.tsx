import SideNav from '@/app/components/sidenav';
import NavBar from '@/app/components/navbar';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (

<div className='container relative'>
    <div className="flex justify-center">
        <NavBar/>
      </div>
      <div className="flex h-auto flex-col md:flex-row my-20 px-5">
        <div className="flex item-center h-24">
            <SideNav />
        </div>
        <div className="flex-grow p-3 md:overflow-y-auto md:p-12">{children}</div>
    </div>
</div>
    
  );
}