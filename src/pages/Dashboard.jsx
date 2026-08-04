import {
  FiAlertTriangle,
  FiArrowUpRight,
  FiClock,
  FiMapPin,
  FiMoreHorizontal,
  FiVideo,
} from 'react-icons/fi'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import './Dashboard.css'

const metrics = [
  { label: 'Active cameras', value: '24', detail: '22 online · 2 in service', icon: FiVideo, tone: 'light' },
  { label: 'Vehicles detected', value: '12,486', detail: '8.2% above daily baseline', icon: FiArrowUpRight, tone: 'dark' },
  { label: 'Network velocity', value: '38 km/h', detail: 'Within target operating range', icon: FiClock, tone: 'light' },
  { label: 'Open incidents', value: '3', detail: 'One needs operator review', icon: FiAlertTriangle, tone: 'lime' },
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
          <section className="dashboard-hero">
            <div className="hero-copy-wrap">
              <p className="eyebrow">Traffic intelligence · Live</p>
              <h2>Make every intersection <mark>flow better.</mark></h2>
              <p className="hero-copy">A single operational view for live camera coverage, traffic movement, and the events that need attention.</p>
              <button className="primary-button" type="button">Open traffic map <FiArrowUpRight /></button>
            </div>
            <div className="traffic-orbit" aria-hidden="true">
              <span className="orbit-road road-one" /><span className="orbit-road road-two" /><span className="orbit-road road-three" />
              <span className="orbit-node node-one" /><span className="orbit-node node-two" /><span className="orbit-node node-three" />
              <span className="orbit-core"><FiMapPin /></span>
            </div>
          </section>

          <section className="metric-grid" aria-label="Network statistics">
            {metrics.map(({ label, value, detail, icon: Icon, tone }) => (
              <article className={`metric-card ${tone}`} key={label}>
                <div className="metric-top"><span className="metric-icon"><Icon /></span><button aria-label={`Options for ${label}`} type="button"><FiMoreHorizontal /></button></div>
                <p>{label}</p><h3>{value}</h3><small>{detail}</small>
              </article>
            ))}
          </section>

          <section className="content-grid">
            <div className="panel cameras-panel">
              <div className="panel-heading"><div><p className="eyebrow"><mark>Live network</mark></p><h2>Priority camera feeds</h2></div><button className="text-button" type="button">View all <FiArrowUpRight /></button></div>
              <div className="camera-grid">
                {cameras.map((camera, index) => (
                  <article className="camera-card" key={camera.name}>
                    <div className={`camera-visual visual-${index + 1}`}>
                      <div className="feed-meta"><span className="live-pill"><i /> {camera.status}</span><span className="camera-id">CAM {String(index + 3).padStart(2, '0')}</span></div>
                      <span className="feed-location"><FiMapPin /> {camera.location}</span>
                    </div>
                    <div className="camera-info"><div><h3>{camera.name}</h3><p>AI tracking active</p></div><span className={`congestion ${camera.tone}`}>{camera.congestion}</span></div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="panel incidents-panel">
              <div className="panel-heading"><div><p className="eyebrow"><mark>Operator queue</mark></p><h2>Recent incidents</h2></div><button className="text-button" type="button">Open queue</button></div>
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