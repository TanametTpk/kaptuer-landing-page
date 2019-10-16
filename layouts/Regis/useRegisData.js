import { useState } from 'react'

function useUsername() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let user = {
    username: {
      value: username,
      setter: (val) => setUsername(val)
    },
    password: {
      value: password,
      setter: (val) => setPassword(val)
    },
    
  }

  const handleChange = (e) => {
    let { name, value } = e.target
    user[name].setter(value)
  }

  return [{username: user.username.value, password: user.password.value}, handleChange]
}


export default useUsername