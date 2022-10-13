import { FaHome } from 'react-icons/fa'
import '../styles/SideBars.scss'


type IconProps = {
  text: string,
  icon?: JSX.Element,
  active?: string
}

const SideBarOptions: React.FC<IconProps> = ({ icon, text, active }) => {
  return(
    <div className={`sidebar-option ${active && "sidebar-option--active"}`}>
      <span>{icon}</span>
      <h1>{text}</h1>
    </div>
  )
}

export const SideBar: React.FC<any> = ({}) => {
  return (
    <div className="sidebar">
      <select>
        <option>Switch Organization</option>
      </select>
     <SideBarOptions text='Dashboard' icon={<FaHome />} />
     <SideBarOptions text='reel' icon={<FaHome />} />
     <SideBarOptions text='native' icon={<FaHome />} />
    </div>
  )
}

