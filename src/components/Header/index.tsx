import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/logoIgnite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Logo do ignite" />
      <nav>
        <NavLink to="/">
          <Timer size={24}></Timer>
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24}></Scroll>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
