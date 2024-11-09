import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();


    const handleGoogleSignIn =() =>{
        
      signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result.user);
            setUser(result.user)
          })
          .catch((error) => {
           console.log('ERROR',error);
           setUser(null)
          });
        

    }
    const handelGithubSignIn =()=>{
        signInWithPopup(auth, GithubProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user)
        }) 
        .catch(error => console.log(error))
    }
    const handelSignOut =() =>{
        signOut(auth)
        .then(()=>{
            console.log("Sign Out done");
            setUser(null)
        })
        .catch(error => console.log(error))
    }

    
      
    return (
        <div>
           
           
            {
                user? <button onClick={handelSignOut}>Sign Out</button>
                :
               <div>
                 <button onClick={handleGoogleSignIn}>Login with Google</button>
                 <button onClick={handelGithubSignIn}>Login With github</button>
               </div>
            }
            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                        {/* <p>{user.emailVerified}</p> */}
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;