import logo from '../RM.png';

export default function HeaderReima(){
    return(
<header>
  <img src={logo} alt="reimalogo" height="50px"/>
  <ul className="menu">
    <li>
      <a href="/">A propos </a>
    </li>
    <li>
      <a href="/">Travaux</a>
    </li>
    <li>
      <a href="/">Services</a>
    </li>
    <li>
      <a href="/">Contact</a>
    </li>        
  </ul>
</header>
    )
}