import {
  FiActivity,
  FiBarChart2,
  FiCamera,
  FiGrid,
  FiMap,
  FiSettings,
  FiUsers,
} from 'react-icons/fi'
import { FaTrafficLight } from 'react-icons/fa'
import './Sidebar.css'

const navigation = [
  { label: 'Overview', icon: FiGrid, active: true },
  { label: 'Live Cameras', icon: FiCamera },
  { label: 'Traffic Map', icon: FiMap },
  { label: 'Analytics', icon: FiBarChart2 },
  { label: 'Incidents', icon: FiActivity, badge: '3' },
  { label: 'Teams', icon: FiUsers },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <a className="brand" href="/" aria-label="VisionFlow AI home">
        <span className="brand-mark"><FaTrafficLight /></span>
        <span>Vision<span>Flow</span></span>
      </a>

      <nav className="sidebar-nav" aria-label="Main navigation">
        <p className="nav-label">Monitoring</p>
        {navigation.map(({ label, icon: Icon, active, badge }) => (
          <a className={`nav-link ${active ? 'active' : ''}`} href="/" key={label}>
            <Icon />
            <span>{label}</span>
            {badge && <strong>{badge}</strong>}
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <a className="nav-link" href="/"><FiSettings /><span>Settings</span></a>
        <div className="user-card">
          <div className="avatar">AC</div>
          <div><b>Alex Carter</b><small>Traffic operator</small></div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar