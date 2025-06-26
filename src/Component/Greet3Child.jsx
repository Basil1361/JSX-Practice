function Greet3Parent (props) {

    if (props.isAdmin && props.user) {
        return (
            <p>Welcome Admin</p>
        )
    } else {
        return (
            <p>Welcome User</p>
        )
    }


}



export default Greet3Parent