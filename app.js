const Navbar = ({ isHidden }) => (
    <nav className={`navbar ${isHidden ? 'hidden' : ''}`}>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#testimonial">Testimonials</a></li>
        </ul>
    </nav>
);

const ProjectCard = ({ imgSrc, title, description }) => (
    <a href="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="project-card">
            <img src={imgSrc} alt={`${title} Thumbnail`} className="project-thumbnail" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </a>
);

const Testimonials = () => (
    <div className="testimonials" id="testimonial">
        <h2>What Others Say</h2>
        <p className="testimonial">"An excellent developer! Highly recommend!" - Sundar lal</p>
        <p className="testimonial">"Very professional and skilled. God bless!" - Harsh Singh</p>
        <p className="testimonial">"Very co-operative person with skills" - Matthew Hayden</p>
    </div>
);

const Home = () => {
    const [isHidden, setIsHidden] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsHidden(true); // Hide navbar on scroll
            } else {
                setIsHidden(false); // Show navbar when at the top
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="home">
            <Navbar isHidden={isHidden} />
            <header className="header">
                <h1>Welcome to My Portfolio</h1>
                <p>Showcasing My Projects and Skills</p>
            </header>
            <section className="projects" id="projects">
                <h2>Featured Projects</h2>
                <div className="project-list">
                    <ProjectCard imgSrc="/static/pthumb.jpeg" title="Budget Friendly Portfolio" description="A tight budget premium portfolio. Fully functional" />
                    <ProjectCard imgSrc="/static/ethumb.jpeg" title="Small E-commerce Store" description="A small e-commerce store to sell editing presets. Fully functional with payment gateway" />
                </div>
            </section>
            <Testimonials />
        </div>
    );
};

ReactDOM.render(<Home />, document.getElementById('root'));
