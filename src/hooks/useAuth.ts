import {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';


export function useAuth() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const value = useContext(AuthContext);

    return value;
}