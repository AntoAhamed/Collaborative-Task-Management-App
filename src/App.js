import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import CreateTeam from './Components/Create_Team';
import MyTeams from './Components/My_Teams';
import Team from './Components/Team';
import CreateTask from './Components/Create_Task';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Anto",
      email: "anto@gmail.com",
      password: "1234",
      bio: "I am a software engineer",
      teams: []
    },
    {
      id: 2,
      name: "Pranto",
      email: "pranto@gmail.com",
      password: "1234",
      bio: "I am a banker",
      teams: []
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
  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "a",
      tasks: [
        {
          id: 1,
          title: "title1 of team a",
          desc: "desc1 of tem a",
          priority: "low"
        },
        {
          id: 2,
          title: "title2 of team a",
          desc: "desc2 of tem a",
          priority: "medium"
        },
        {
          id: 3,
          title: "title3 of team a",
          desc: "desc3 of tem a",
          priority: "high"
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
          priority: "low"
        },
        {
          id: 2,
          title: "title2 of team b",
          desc: "desc2 of tem b",
          priority: "medium"
        },
        {
          id: 3,
          title: "title3 of team b",
          desc: "desc3 of tem b",
          priority: "high"
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
          priority: "low"
        },
        {
          id: 2,
          title: "title2 of team c",
          desc: "desc2 of tem c",
          priority: "medium"
        },
        {
          id: 3,
          title: "title3 of team c",
          desc: "desc3 of tem c",
          priority: "high"
        }
      ]
    }
  ])
  const [user, setUser] = useState({})

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar user={user} setUser={setUser} />}>
            <Route index element={<Login setUser={setUser} />} />
            <Route path="signup" element={<Signup />} />
            <Route path="profile" element={<Profile />} />
            <Route path="create_team" element={<CreateTeam />} />
            <Route path="my_teams" element={<MyTeams />} />
            <Route path="team" element={<Team />} />
            <Route path="create_task" element={<CreateTask />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
