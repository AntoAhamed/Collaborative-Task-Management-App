import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Features from './Components/Features';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Teams from './Components/Teams';
import Tasks from './Components/Tasks';
import CreateTask from './Components/Create_Task';
import Invitation from './Components/Invitation';
import Footer from './Components/Footer';

function App() {
  //to get users
  let initUsers;
  if (localStorage.getItem("users") === null) {
    initUsers = [];
  } else {
    initUsers = JSON.parse(localStorage.getItem("users"));
  }

  //to get teams
  let initTeams;
  if (localStorage.getItem("teams") === null) {
    initTeams = [];
  } else {
    initTeams = JSON.parse(localStorage.getItem("teams"));
  }

  //to get logged in user
  let initUserId;
  if (localStorage.getItem("userId") === null) {
    initUserId = '';
  } else {
    initUserId = JSON.parse(localStorage.getItem("userId"));
  }

  //for alert system
  const [alert, setAlert] = useState(false)
  const [alertMssg, setAlertMssg] = useState('This is an alert.')

  //for signup
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newBio, setNewBio] = useState('')

  const signup = (e) => {
    e.preventDefault();

    if (newName !== '' && newEmail !== '' && newPassword !== '' && newBio !== '') {
      let f = 0;

      for (let i = 0; i < users.length; i++) {
        if (users[i].email === newEmail) {
          f = 1;
          break;
        }
      }

      if (f === 0) {
        let id;
        if (users.length === 0) {
          id = 0;
        } else {
          id = users[users.length - 1].id;
        }

        const newUser = {
          id: id + 1,
          name: newName,
          email: newEmail,
          password: newPassword,
          bio: newBio,
          teams: []
        }

        setUsers([...users, newUser])
        setNewName('')
        setNewEmail('')
        setNewPassword('')
        setNewBio('')

        localStorage.setItem("users", JSON.stringify(users));

        setAlertMssg("Signup successful. Please go to login page for login.");
        alertSystem();
      } else {
        setAlertMssg("User already exists!");
        alertSystem();
      }
    } else {
      setAlertMssg("Empty field can't be submited!");
      alertSystem();
    }
  }

  //user
  const [userId, setUserId] = useState(initUserId)

  //for login
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = (e) => {
    e.preventDefault();

    if (email !== '' && password !== '') {
      let f = 0;

      for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
          setUserId(users[i].id);
          f = 1;
          break;
        }
      }

      setEmail('')
      setPassword('')

      if (f === 1) {
        setAlertMssg("Login successful");
        alertSystem();
      } else {
        setAlertMssg("User dose not exist!");
        alertSystem();
      }
    } else {
      setAlertMssg("Empty field can't be submited!");
      alertSystem();
    }
  }

  //add a new team
  const [newTeam, setNewTeam] = useState('')

  const create = (e) => {
    e.preventDefault();

    if (newTeam !== '') {
      let f = 0;

      for (let i = 0; i < teams.length; i++) {
        if (teams[i].name === newTeam) {
          f = 1;
          break;
        }
      }

      if (f === 0) {
        let userTeams = [];
        userTeams = users[userId - 1].teams;
        userTeams = [...userTeams, newTeam];
        users[userId - 1].teams = userTeams;

        let id;
        if (teams.length === 0) {
          id = 0;
        } else {
          id = teams[teams.length - 1].id;
        }

        const newTeamMember = {
          id: id + 1,
          name: newTeam,
          tasks: []
        }

        setTeams([...teams, newTeamMember]);

        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem("teams", JSON.stringify(teams));

        setNewTeam('');

        setAlertMssg("New team successfully created.");
        alertSystem();
      } else {
        setAlertMssg("Team already exists!");
        alertSystem();
      }
    } else {
      setAlertMssg("Empty field can't be submited!");
      alertSystem();
    }
  }

  /*const [users, setUsers] = useState([
    {
      id: 1,
      name: "Anto",
      email: "anto@gmail.com",
      password: "1234",
      bio: "I am a software engineer",
      teams: ["a", "b"]
    },
    {
      id: 2,
      name: "Pranto",
      email: "pranto@gmail.com",
      password: "1234",
      bio: "I am a banker",
      teams: ["a"]
    },
    {
      id: 3,
      name: "mr. x",
      email: "mr.x@gmail.com",
      password: "1234",
      bio: "I am a hacker",
      teams: []
    }
  ])
  // eslint-disable-next-line
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "a",
      tasks: [
        {
          id: 1,
          title: "title1 of team a",
          desc: "desc1 of tem a",
          date: "2023-09-06",
          priority: "low",
          status: "pending"
        },
        {
          id: 2,
          title: "title2 of team a",
          desc: "desc2 of tem a",
          date: "2023-09-07",
          priority: "medium",
          status: "pending"
        },
        {
          id: 3,
          title: "title3 of team a",
          desc: "desc3 of tem a",
          date: "2023-09-08",
          priority: "high",
          status: "pending"
        }
      ]
    },
    {
      id: 2,
      name: "b",
      tasks: [
        {
          id: 1,
          title: "title1 of team b",
          desc: "desc1 of tem b",
          date: "2023-09-06",
          priority: "low",
          status: "pending"
        },
        {
          id: 2,
          title: "title2 of team b",
          desc: "desc2 of tem b",
          date: "2023-09-06",
          priority: "medium",
          status: "pending"
        },
        {
          id: 3,
          title: "title3 of team b",
          desc: "desc3 of tem b",
          date: "2023-09-06",
          priority: "high",
          status: "pending"
        }
      ]
    },
    {
      id: 3,
      name: "c",
      tasks: [
        {
          id: 1,
          title: "title1 of team c",
          desc: "desc1 of tem c",
          date: "2023-09-06",
          priority: "low",
          status: "pending"
        },
        {
          id: 2,
          title: "title2 of team c",
          desc: "desc2 of tem c",
          date: "2023-09-06",
          priority: "medium",
          status: "pending"
        },
        {
          id: 3,
          title: "title3 of team c",
          desc: "desc3 of tem c",
          date: "2023-09-06",
          priority: "high",
          status: "pending"
        }
      ]
    }
  ])*/

  //to set users and teams which are stored in local storage
  const [users, setUsers] = useState(initUsers)
  const [teams, setTeams] = useState(initTeams)

  //to add new task
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [due, setDue] = useState('')
  const [prio, setPrio] = useState('')
  const [tea, setTea] = useState('')

  const addTask = (e) => {
    e.preventDefault();

    const now = new Date();

    console.log(title, desc, due, prio, tea)

    if (title !== '' && desc !== '' && due !== '' && prio !== '' && tea !== '') {
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].name === tea) {
          let id, tasks = teams[i].tasks;
          if (tasks.length === 0) {
            id = 0;
          } else {
            id = tasks[tasks.length - 1].id;
          }

          const newTask = {
            id: id + 1,
            title: title,
            desc: desc,
            date: due,
            currentDate: now.toLocaleDateString(),
            priority: prio,
            status: {
              status: "Pending",
              statusBy: userId,
              statusOn: now.toLocaleDateString()
            },
            creator: userId
          }

          tasks = [...tasks, newTask]
          teams[i].tasks = tasks
          setTitle('')
          setDesc('')
          setDue('')

          localStorage.setItem("teams", JSON.stringify(teams));

          setAlertMssg("Task added successfully.");
          alertSystem();
          break;
        }
      }
    } else {
      setAlertMssg("Empty field can't be submited!");
      alertSystem();
    }
  }

  //to clear user inputs from add task form
  const resetTask = (e) => {
    e.preventDefault();

    setTitle('')
    setDesc('')
    setDue('')

    setAlertMssg("Reseted successfully.");
    alertSystem();
  }

  //function to show alert when needed
  const alertSystem = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }

  //everytime when users, teams and userId will change, this 3 useEffect hooks will render and update their states
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users])

  useEffect(() => {
    localStorage.setItem("teams", JSON.stringify(teams));
  }, [teams])

  useEffect(() => {
    localStorage.setItem("userId", JSON.stringify(userId));
  }, [userId])

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar userId={userId} setUserId={setUserId} users={users} alert={alert} alertMssg={alertMssg} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="features" element={<Features />} />
            <Route path="signup" element={userId ? <Profile userId={userId} users={users} /> : <Signup newName={newName} setNewName={setNewName} newEmail={newEmail} setNewEmail={setNewEmail} newPassword={newPassword} setNewPassword={setNewPassword} newBio={newBio} setNewBio={setNewBio} signup={signup} />} />
            <Route path="login" element={userId ? <Profile userId={userId} users={users} /> : <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} login={login} />} />
            <Route path="profile" element={userId ? <Profile userId={userId} users={users} /> : <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} login={login} />} />
            <Route path="teams" element={userId ? <Teams newTeam={newTeam} setNewTeam={setNewTeam} create={create} teams={users[userId - 1]?.teams} /> : <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} login={login} />} />
            <Route path="tasks" element={userId ? <Tasks teamNames={users[userId - 1]?.teams} teams={teams} setTeams={setTeams} users={users} setUsers={setUsers} userId={userId} setAlertMssg={setAlertMssg} alertSystem={alertSystem} /> : <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} login={login} />} />
            <Route path="create_task" element={userId ? <CreateTask title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} due={due} setDue={setDue} prio={prio} setPrio={setPrio} tea={tea} setTea={setTea} teamNames={users[userId - 1]?.teams} teams={teams} addTask={addTask} resetTask={resetTask} /> : <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} login={login} />} />
            <Route path="invitation" element={userId ? <Invitation teamNames={users[userId - 1]?.teams} users={users} setUsers={setUsers} teams={teams} setAlertMssg={setAlertMssg} alertSystem={alertSystem} /> : <Login email={email} password={password} setEmail={setEmail} setPassword={setPassword} login={login} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
