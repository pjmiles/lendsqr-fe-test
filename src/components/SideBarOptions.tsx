import { FaHome } from 'react-icons/fa'
import '../styles/SideBars.scss'


type IconProps = {
  text?: string,
  icon?: JSX.Element,
  active?: string
}

const SideBarOptions: React.FC<IconProps> = ({ icon, text, active }) => {
  return(
    <div key={text} className={`sidebar-option ${active && "sidebar-option--active"}`}>
      <span>{icon}</span>
      <h1>{text}</h1>
    </div>
  )
}

export const SideBar: React.FC<any> = () => {
  return (
    <div className="sidebar">
      <select>
        <option><SideBarOptions text='Switch Organization' icon={<FaHome />} /></option>
      </select>
     <div className="side-section"><SideBarOptions text='Dashboard' icon={<FaHome />} /></div>
     
     <div className='wrap customers'>
     <p className='side-heading'>customers</p>
     <SideBarOptions text='Users' icon={<FaHome />} />
     <SideBarOptions text='Guarantors' icon={<FaHome />} />
     <SideBarOptions text='Loans' icon={<FaHome />} />
     <SideBarOptions text='Decision Models' icon={<FaHome />} />
     <SideBarOptions text='Savings' icon={<FaHome />} />
     <SideBarOptions text='Loan Requests' icon={<FaHome />} />
     <SideBarOptions text='Whitelist' icon={<FaHome />} />
     <SideBarOptions text='Karma' icon={<FaHome />} />
     </div>

     <div className='wrap businesses'>
     <p className='side-heading'>businesses</p>
     <SideBarOptions text='Organization' icon={<FaHome />} />
     <SideBarOptions text='Loan Products' icon={<FaHome />} />
     <SideBarOptions text='Savings Products' icon={<FaHome />} />
     <SideBarOptions text='Fees and Charges' icon={<FaHome />} />
     <SideBarOptions text='Transactions' icon={<FaHome />} />
     <SideBarOptions text='Services' icon={<FaHome />} />
     <SideBarOptions text='Services Account' icon={<FaHome />} />
     <SideBarOptions text='Settlements' icon={<FaHome />} />
     <SideBarOptions text='Reports' icon={<FaHome />} />
     </div>

     <div className='wrap settings'>
     <p className='side-heading'>settings</p>
     <SideBarOptions text='Preferences' icon={<FaHome />} />
     <SideBarOptions text='Fees and Pricing' icon={<FaHome />} />
     <SideBarOptions text='Audit Logs' icon={<FaHome />} />
     <SideBarOptions text='Systems Messages' icon={<FaHome />} />
     
     </div>

    <SideBarOptions icon={<FaHome />} />
    <div className='logout'>
      <button>Logout</button>
    </div>
    </div>
  )
}

