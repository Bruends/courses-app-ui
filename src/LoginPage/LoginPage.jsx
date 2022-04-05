
function LoginPage(){
    return (
        <form onSubmit={(event) => { event.preventDefault(); }}>
            <input type="text"/>
            <input type="password"/>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginPage;