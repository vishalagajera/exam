import Cookies from "js-cookie"
import { useEffect, useState } from "react"

import Check from "../Auth/check";

const Home = ({ setModell }) => {
  Check()
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await fetch("http://localhost:5500/users", {
        headers: {
          authorization: Cookies.get("token")
        }
      } , [])
      const data = await users.json();
      setData(data);
      if (data.unauthorized && !Cookies.get("logedwithgoogle")) {
        setModell(true)
      }
    }
    fetchUsers()
  }, [null])

console.log(data);


  return (
    <>
      <div className="home--">
            
      </div>
    </>
  )
}
export default Home