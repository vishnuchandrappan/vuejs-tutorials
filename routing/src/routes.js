import User from './components/User.vue';
import UserDetail from './components/UserDetail.vue';
import Home from './components/Home.vue';

export const routes = [
    {
        path : '',
        component : Home
    },
    {
        path : '/user',
        component : User
    },
    {
        path : '/user/:id',
        component : UserDetail
    }
];
