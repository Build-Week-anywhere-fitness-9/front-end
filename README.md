# front-end

Product Vision Document: https://abounding-roarer-17c.notion.site/Product-Vision-Document-23d2485c484b4d8eb3d6bdf238557820

For any component that uses authorization:
    import { useAuth } from './PrivateRoute';

    function AppThatNeedsAuth (props) {

        const auth = useAuth();

        return (
            <>
                {/* whatever code */}

                {auth.user ? {
                    /* what to display if user is signed in */
                } : (
                    <Link to='/signin'> Sign In </Link>
                )}

            </>
        )
    }