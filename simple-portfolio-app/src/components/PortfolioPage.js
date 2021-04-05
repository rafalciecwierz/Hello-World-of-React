import { Link } from "react-router-dom";


const PortfolioPage = () => (
    <div>
        <h2>My work</h2>
        <p>Check the following things that I've done</p>
        <Link to="/portfolio/1">Item One</Link>
        <br/>
        <Link to="/portfolio/2">Item Two</Link>
    </div>
)

export default PortfolioPage;