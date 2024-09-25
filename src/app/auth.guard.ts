

export const CanActivate = ()=>{
    if(sessionStorage.getItem('admin-logged')){
        return true;
    } else {
        return false;
    }
}
export const CanActivateChild = ()=>{
    return CanActivate();
}