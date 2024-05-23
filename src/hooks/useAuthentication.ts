import { useSelector } from "react-redux";
import { IStoreState } from "../stores/types/IStoreState";
import { IAuthState } from "../stores/types/IAuthState";


const useAuthentication = () => useSelector<IStoreState, IAuthState>(
    state => state.authentication
);


export default useAuthentication;