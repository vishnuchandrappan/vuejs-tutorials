import Stocks from './pages/Stocks.vue';
import Portfolio from './pages/Portfolio.vue';
import Home from './pages/Home.vue';

export const routes = [
    {
        path : '',
        component : Home
    },
    {
        path : '/stocks',
        component : Stocks
    },
    {
        path : '/portfolio',
        component : Portfolio
    }
];
