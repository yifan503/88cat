import {useCookies} from 'react-cookie'

export const LoginUser = () =>{
    const [cookies, setCookie] = useCookies(['username']);
    return cookies.username;
}

export const OnLogin = (user) =>{
    const [cookies, setCookie] = useCookies(['username']);
    return setCookie('username',user,{path:'/'});
}

export const LogOut = () =>{
    const [cookies, setCookie] = useCookies(['username']);
    return cookies.remove('username');
}

export const ShoppingCart = () =>{
    const [cookies, setCookie] = useCookies(['shoppingCart']);
    return cookies.shoppingCart;
}