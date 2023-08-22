"use client";


type Allprops = {
  Login: object;
  Bun: string;
};
function Login_Google(props: Allprops) {
  return (
    <button onClick={ props.Login} className={props.Bun}>
    Google
    </button>
  );
}

export default Login_Google;
