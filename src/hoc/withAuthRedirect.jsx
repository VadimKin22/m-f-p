import React from 'react';
import { Redirect } from 'react-router-dom';
export const withAuthRedirect = (Component) => {  // это просто функция, которая возвращает компоненту и её пропсы дальше, если пользователь залогинен, 
                                       //если нет -  выполняет редирект. данная функция вставляется в коннект вместо компоненты, компонента вставляется в её аргумент
    const RedirectComponent =(props)=> {
               
                   
            if (!props.isAuth) return <Redirect to={"/login"} />
            return <Component {...props} />
        
    }
    return RedirectComponent
}

