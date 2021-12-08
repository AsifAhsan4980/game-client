import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated ,userInfo} from '../../utils/auth';

const AdminRoute = ({ children, ...rest }) => { 
    const {role}=userInfo();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isAuthenticated() && role==='admin' || role==='superadmin'? (
                    children 
                ) : (
                    <Navigate end
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default AdminRoute;