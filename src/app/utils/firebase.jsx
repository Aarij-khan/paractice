// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCOllNdwlj903fOX6MfRo8om5AJ4Vm5x8U",
  authDomain: "fir-project-b4b78.firebaseapp.com",
  projectId: "fir-project-b4b78",
  storageBucket: "fir-project-b4b78.firebasestorage.app",
  messagingSenderId: "166483299834",
  appId: "1:166483299834:web:5441d96decfeb989e76843"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



// const [email,setemail] = useState("");
// const [password,setpassword] = useState("");
// const [isLoading,setIsLoading] = useState(false);
// function handleLogin() {
//     if (email != ""&& password != "") {
//       setIsLoading(true)
//       signInWithEmailAndPassword(auth, email, password)
//   .then(async(userCredential) => {
//     const uid = userCredential.user.uid;
    // await localStorage.setItem('uid', uid)
// 		console.log("TCL: handleLogin -> uid", uid)
//     router.push("Main");
//     setIsLoading(false);+
      
//     setemail("")
//     setpassword("")
//   })
//   .catch((error) => {
//      alert(error.message);
//      setIsLoading(false)
     
//   });
//     }
    
//   }
