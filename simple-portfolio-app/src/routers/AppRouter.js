import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PortfolioPage from '../components/PortfolioPage';
import ContactPage from '../components/ContactPage';
import MyWorkPage from '../components/MyWorkPage';


import Home from '../components/Home'


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage} exact={true} />
                <Route path="/portfolio/:id" component={MyWorkPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;