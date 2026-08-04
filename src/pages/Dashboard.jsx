import { FiAlertTriangle, FiArrowUpRight, FiClock, FiVideo } from 'react-icons/fi'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import './Dashboard.css'

const metrics = [
  { label: 'Active cameras', value: '24', detail: '2 under maintenance', icon: FiVideo, accent: 'blue' },
  { label: 'Vehicles detected', value: '12,486', detail: '+8.2% from yesterday', icon: FiArrowUpRight, accent: 'violet' },
  { label: 'Average speed', value: '38 km/h', detail: 'Normal city flow', icon: FiClock, accent: 'teal' },
  { label: 'Open incidents', value: '3', detail: '1 requires attention', icon: FiAlertTriangle, accent: 'orange' },
]

const cameras = [
  { name: 'Central Avenue', location: 'Intersection 12', status: 'Live', congestion: 'Moderate', tone: 'orange' },
  { name: 'Riverside Drive', location: 'Bridge approach', status: 'Live', congestion: 'Low', tone: 'green' },
  { name: 'Market Street', location: 'North corridor', status: 'Live', congestion: 'High', tone: 'red' },
]

const incidents = [
  { title: 'Slow-moving traffic', place: 'Market Street · Camera 08', time: '6 min ago', severity: 'Medium' },
  { title: 'Vehicle stopped', place: 'Central Avenue · Camera 03', time: '14 min ago', severity: 'High' },
  { title: 'Lane obstruction cleared', place: 'Riverside Drive · Camera 16', time: '28 min ago', severity: 'Resolved' },
]

function Dashboard() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="main-content">
        <Navbar />
        <div className="dashboard-content">
          <section className="intro">
            <div><h2>Good morning, Alex</h2><p>Here is your city traffic network at a glance.</p></div>
            <button className="primary-button" type="button"><FiVideo /> View live map</button>
          </section>

          <section className="metric-grid" aria-label="Network statistics">
            {metrics.map(({ label, value, detail, icon: Icon, accent }) => (
              <article className="metric-card" key={label}>
                <span className={`metric-icon ${accent}`}><Icon /></span>
                <p>{label}</p><h3>{value}</h3><small>{detail}</small>
              </article>
            ))}
          </section>

          <section className="content-grid">
            <div className="panel cameras-panel">
              <div className="panel-heading"><div><p className="eyebrow">Live network</p><h2>Camera feeds</h2></div><button className="text-button" type="button">View all</button></div>
              <div className="camera-grid">
                {cameras.map((camera, index) => (
                  <article className="camera-card" key={camera.name}>
                    <div className={`camera-visual visual-${index + 1}`}><span className="live-pill"><i /> {camera.status}</span><span className="camera-id">CAM {String(index + 3).padStart(2, '0')}</span></div>
                    <div className="camera-info"><div><h3>{camera.name}</h3><p>{camera.location}</p></div><span className={`congestion ${camera.tone}`}>{camera.congestion}</span></div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="panel incidents-panel">
              <div className="panel-heading"><div><p className="eyebrow">Needs attention</p><h2>Recent incidents</h2></div><button className="text-button" type="button">See all</button></div>
              <div className="incident-list">
                {incidents.map((incident) => (
                  <article className="incident" key={incident.title}>
                    <span className={`incident-dot ${incident.severity.toLowerCase()}`} />
                    <div><h3>{incident.title}</h3><p>{incident.place}</p><small>{incident.time}</small></div>
                    <span className={`severity ${incident.severity.toLowerCase()}`}>{incident.severity}</span>
                  </article>
                ))}
              </div>
            </aside>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Dashboard