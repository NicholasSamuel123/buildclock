
import {
    Activity,
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    Bell,
    CalendarDays,
    CheckCircle2,
    ChevronDown,
    Clock3,
    Construction,
    CreditCard,
    Download,
    HardHat,
    LayoutDashboard,
    MapPin,
    MoreHorizontal,
    Plus,
    Settings,
    ShieldCheck,
    Users,
    Wallet,
    Wrench,
} from "lucide-react";

const navigation = [
    { name: "Overview", icon: LayoutDashboard, active: true },
    { name: "Employees", icon: Users },
    { name: "Time tracking", icon: Clock3 },
    { name: "Schedule", icon: CalendarDays },
    { name: "Job sites", icon: Construction },
    { name: "Payroll", icon: Wallet },
];

const projects = [
    {
        name: "Riverside Apartments",
        location: "Norfolk, VA",
        progress: 78,
        workers: 8,
        status: "On track",
        color: "blue",
    },
    {
        name: "Downtown Office Build",
        location: "Virginia Beach, VA",
        progress: 52,
        workers: 6,
        status: "In progress",
        color: "orange",
    },
    {
        name: "Westside Renovation",
        location: "Chesapeake, VA",
        progress: 34,
        workers: 5,
        status: "In progress",
        color: "green",
    },
];

const employees = [
    {
        initials: "MJ",
        name: "Michael Johnson",
        role: "Site Supervisor",
        site: "Riverside Apartments",
        hours: "8.0 hrs",
        status: "Clocked in",
    },
    {
        initials: "DW",
        name: "David Williams",
        role: "Electrician",
        site: "Downtown Office Build",
        hours: "7.5 hrs",
        status: "Clocked in",
    },
    {
        initials: "RB",
        name: "Robert Brown",
        role: "Carpenter",
        site: "Westside Renovation",
        hours: "8.0 hrs",
        status: "Clocked out",
    },
    {
        initials: "JT",
        name: "James Taylor",
        role: "General Laborer",
        site: "Riverside Apartments",
        hours: "6.5 hrs",
        status: "Clocked in",
    },
];

const metrics = [
    {
        label: "Total employees",
        value: "24",
        change: "+3 this month",
        icon: Users,
        trend: "up",
    },
    {
        label: "Hours this week",
        value: "186.5",
        change: "+12.5% vs last week",
        icon: Clock3,
        trend: "up",
    },
    {
        label: "Active job sites",
        value: "04",
        change: "Across 3 locations",
        icon: Construction,
        trend: "neutral",
    },
    {
        label: "Estimated payroll",
        value: "$8,420",
        change: "This pay period",
        icon: Wallet,
        trend: "neutral",
    },
];

export default function Home() {
    return (
        <main className="app-shell">
            <aside className="sidebar">
                <div className="brand">
                    <div className="brand-icon">
                        <HardHat size={23} />
                    </div>
                    <div>
                        <h1>BuildClock</h1>
                        <span>CONSTRUCTION MANAGEMENT</span>
                    </div>
                </div>

                <div className="workspace-label">WORKSPACE</div>

                <nav className="sidebar-nav">
                    {navigation.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                href="#"
                                key={item.name}
                                className={`nav-item ${item.active ? "active" : ""}`}
                            >
                                <Icon size={19} />
                                <span>{item.name}</span>
                                {item.name === "Time tracking" && (
                                    <span className="nav-count">4</span>
                                )}
                            </a>
                        );
                    })}
                </nav>

                <div className="sidebar-divider" />

                <div className="workspace-label">MANAGEMENT</div>

                <nav className="sidebar-nav">
                    <a href="#" className="nav-item">
                        <Activity size={19} />
                        <span>Reports</span>
                    </a>
                    <a href="#" className="nav-item">
                        <ShieldCheck size={19} />
                        <span>Approvals</span>
                    </a>
                    <a href="#" className="nav-item">
                        <Settings size={19} />
                        <span>Settings</span>
                    </a>
                </nav>

                <div className="sidebar-bottom">
                    <div className="help-card">
                        <div className="help-icon">
                            <Wrench size={19} />
                        </div>
                        <strong>Need a hand?</strong>
                        <p>Get help managing your workspace.</p>
                        <a href="#">Contact support <ArrowRight size={14} /></a>
                    </div>

                    <div className="profile">
                        <div className="avatar owner-avatar">JD</div>
                        <div className="profile-info">
                            <strong>John Davis</strong>
                            <span>Company Owner</span>
                        </div>
                        <MoreHorizontal size={20} />
                    </div>
                </div>
            </aside>

            <section className="main-area">
                <header className="topbar">
                    <div className="breadcrumb">
                        Workspace <span>/</span> <strong>Overview</strong>
                    </div>

                    <div className="topbar-actions">
                        <span className="today-label">
                            <CalendarDays size={16} />
                            Tuesday, November 17, 2026
                        </span>
                        <button className="icon-button" aria-label="Notifications">
                            <Bell size={19} />
                            <span className="notification-dot" />
                        </button>
                        <div className="topbar-profile">
                            <div className="avatar owner-avatar">JD</div>
                            <ChevronDown size={15} />
                        </div>
                    </div>
                </header>

                <div className="dashboard-content">
                    <section className="welcome-section">
                        <div>
                            <div className="eyebrow">
                                <span className="eyebrow-dot" />
                                YOUR WORKSPACE AT A GLANCE
                            </div>
                            <h2>Good morning, John.</h2>
                            <p>
                                Here's what's happening across your construction sites today.
                            </p>
                        </div>

                        <button className="primary-button">
                            <Plus size={18} />
                            Add new entry
                        </button>
                    </section>

                    <section className="metrics-grid">
                        {metrics.map((metric) => {
                            const Icon = metric.icon;

                            return (
                                <article className="metric-card" key={metric.label}>
                                    <div className="metric-top">
                                        <span>{metric.label}</span>
                                        <div className="metric-icon">
                                            <Icon size={19} />
                                        </div>
                                    </div>

                                    <div className="metric-value">{metric.value}</div>

                                    <div className="metric-change">
                                        {metric.trend === "up" ? (
                                            <ArrowUpRight size={15} />
                                        ) : (
                                            <Activity size={15} />
                                        )}
                                        <span>{metric.change}</span>
                                    </div>
                                </article>
                            );
                        })}
                    </section>

                    <div className="dashboard-grid">
                        <section className="panel projects-panel">
                            <div className="panel-header">
                                <div>
                                    <div className="panel-kicker">PROJECT OVERVIEW</div>
                                    <h3>Active job sites</h3>
                                    <p>Track progress across your current projects.</p>
                                </div>
                                <button className="text-button">
                                    View all <ArrowRight size={15} />
                                </button>
                            </div>

                            <div className="project-list">
                                {projects.map((project) => (
                                    <article className="project-item" key={project.name}>
                                        <div className="project-heading">
                                            <div className="project-title">
                                                <div className={`project-marker ${project.color}`}>
                                                    <Construction size={18} />
                                                </div>
                                                <div>
                                                    <h4>{project.name}</h4>
                                                    <span className="project-location">
                                                        <MapPin size={13} />
                                                        {project.location}
                                                    </span>
                                                </div>
                                            </div>

                                            <span className={`status-pill ${project.color}`}>
                                                {project.status}
                                            </span>
                                        </div>

                                        <div className="progress-heading">
                                            <span>Project progress</span>
                                            <strong>{project.progress}%</strong>
                                        </div>

                                        <div className="progress-track">
                                            <div
                                                className={`progress-fill ${project.color}`}
                                                style={{ width: `${project.progress}%` }}
                                            />
                                        </div>

                                        <div className="project-footer">
                                            <span>
                                                <Users size={14} />
                                                {project.workers} workers assigned
                                            </span>
                                            <span>View details <ArrowRight size={13} /></span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </section>

                        <section className="panel payroll-panel">
                            <div className="panel-header">
                                <div>
                                    <div className="panel-kicker">FINANCIAL SNAPSHOT</div>
                                    <h3>Payroll overview</h3>
                                    <p>Estimated labor costs for this period.</p>
                                </div>
                                <button className="more-button" aria-label="More payroll options">
                                    <MoreHorizontal size={20} />
                                </button>
                            </div>

                            <div className="payroll-total">
                                <span>Estimated total</span>
                                <strong>$8,420.00</strong>
                                <span className="payroll-period">
                                    <CalendarDays size={14} />
                                    November 16 � November 22
                                </span>
                            </div>

                            <div className="payroll-breakdown">
                                <div>
                                    <span>Regular hours</span>
                                    <strong>172.5 hrs</strong>
                                </div>
                                <div>
                                    <span>Overtime hours</span>
                                    <strong>14.0 hrs</strong>
                                </div>
                                <div>
                                    <span>Employees</span>
                                    <strong>24</strong>
                                </div>
                            </div>

                            <div className="payroll-note">
                                <CreditCard size={17} />
                                <span>Payroll figures are estimates, not finalized payments.</span>
                            </div>

                            <button className="secondary-button">
                                View payroll details <ArrowRight size={16} />
                            </button>
                        </section>
                    </div>

                    <section className="panel activity-panel">
                        <div className="panel-header activity-header">
                            <div>
                                <div className="panel-kicker">LIVE WORKFORCE</div>
                                <h3>Employee activity</h3>
                                <p>Recent time tracking activity from your team.</p>
                            </div>

                            <div className="activity-actions">
                                <button className="secondary-button compact-button">
                                    <Download size={15} />
                                    Export
                                </button>
                                <button className="text-button">
                                    View all <ArrowRight size={15} />
                                </button>
                            </div>
                        </div>

                        <div className="employee-table-wrap">
                            <table className="employee-table">
                                <thead>
                                    <tr>
                                        <th>EMPLOYEE</th>
                                        <th>JOB SITE</th>
                                        <th>HOURS TODAY</th>
                                        <th>STATUS</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {employees.map((employee) => (
                                        <tr key={employee.name}>
                                            <td>
                                                <div className="employee-info">
                                                    <div className="avatar employee-avatar">
                                                        {employee.initials}
                                                    </div>
                                                    <div>
                                                        <strong>{employee.name}</strong>
                                                        <span>{employee.role}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{employee.site}</td>
                                            <td className="hours-cell">{employee.hours}</td>
                                            <td>
                                                <span
                                                    className={`employee-status ${employee.status === "Clocked in" ? "online" : "offline"
                                                        }`}
                                                >
                                                    <span />
                                                    {employee.status}
                                                </span>
                                            </td>
                                            <td>
                                                <button
                                                    className="table-more"
                                                    aria-label={`Options for ${employee.name}`}
                                                >
                                                    <MoreHorizontal size={19} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="table-footer">
                            <span>Showing 4 of 24 employees</span>
                            <button className="text-button">
                                See all employees <ArrowRight size={15} />
                            </button>
                        </div>
                    </section>

                    <footer className="dashboard-footer">
                        <span>BUILDClock <span className="footer-version">V1.0</span></span>
                        <span>Built for the people who build our world.</span>
                        <span className="footer-status">
                            <CheckCircle2 size={14} /> All systems operational
                        </span>
                    </footer>
                </div>
            </section>
        </main>
    );
}
