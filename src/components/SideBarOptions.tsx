import { FaHome } from 'react-icons/fa'


type IconProps = {
  text: string,
  icon?: JSX.Element,
}

const SideBarOptions: React.FC<IconProps> = ({ icon, text }) => {
  return(
    <div>
      <h1>{text}</h1>
      <span>{icon}</span>
    </div>
  )
}

export const SideBar: React.FC<any> = () => {
  return (
    <div>
     <SideBarOptions
     text='home'
     icon={<FaHome />}
     />
    </div>
  )
}

