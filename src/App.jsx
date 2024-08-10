import { useState } from "react";
import "./App.css";

const zombiefighters = [
  {
    name: "Survivor",
    price: 12,
    strength: 6,
    agility: 4,
    img: "https://via.placeholder.com/150/92c952",
  },
  {
    name: "Scavenger",
    price: 10,
    strength: 5,
    agility: 5,
    img: "https://via.placeholder.com/150/771796",
  },
  {
    name: "Shadow",
    price: 18,
    strength: 7,
    agility: 8,
    img: "https://via.placeholder.com/150/24f355",
  },
  {
    name: "Tracker",
    price: 14,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/d32776",
  },
  {
    name: "Sharpshooter",
    price: 20,
    strength: 6,
    agility: 8,
    img: "https://via.placeholder.com/150/1ee8a4",
  },
  {
    name: "Medic",
    price: 15,
    strength: 5,
    agility: 7,
    img: "https://via.placeholder.com/150/66b7d2",
  },
  {
    name: "Engineer",
    price: 16,
    strength: 6,
    agility: 5,
    img: "https://via.placeholder.com/150/56acb2",
  },
  {
    name: "Brawler",
    price: 11,
    strength: 8,
    agility: 3,
    img: "https://via.placeholder.com/150/8985dc",
  },
  {
    name: "Infiltrator",
    price: 17,
    strength: 5,
    agility: 9,
    img: "https://via.placeholder.com/150/392537",
  },
  {
    name: "Leader",
    price: 22,
    strength: 7,
    agility: 6,
    img: "https://via.placeholder.com/150/602b9e",
  },
];

const App = () => {

  const [zombieFighters, setZombieFighters] = useState(zombiefighters)
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, settotalStrength] = useState(0)
  const [agility, setagility] = useState(0)

  const handleAddFighter = (fighter) => {
    if (money >= fighter.price) {
      setTeam([...team, fighter])
      setMoney(money - fighter.price)
      settotalStrength(totalStrength + fighter.strength)
      setagility(agility + fighter.agility)
    } else {
      setMoney(money)
      console.log("Not enough money")
    }
  };

  const handleRemoveFighter = (member, idx) => {
    const newTeam = team.filter(
      (teamMember) => team[idx].name !== teamMember.name
    );

    setTeam(newTeam)
    setMoney(money + member.price)
    settotalStrength(totalStrength - member.strength)
    setagility(agility - player.agility)
  };

  return (
    <>
   
    <h1>Zombie Fighters</h1>
   
    <ul>
    <p>Money: {money}</p>
  </ul>
 
 <ul>Team Strength: {totalStrength}</ul>
 <ul>Team Agility: {agility}</ul>
 <hr />
{team.length === 0 ? (
  
  <ul>Pick some team members </ul>
) : (
  <p>Fighters</p>
)}
        <ul>
          {zombieFighters.map((fighter, idx) => (
            <li key={idx}>
              <img src={fighter.img} alt="" />
              <li>{fighter.name} </li>
              <li>Price: {fighter.price} </li>
              <li>Strength: {fighter.strength} </li>
              <li>Agility: {fighter.agility} </li>
              <button onClick={() => handleAddFighter(fighter)} type="submit">Add</button>
            </li>
          ))}
        </ul>
        
      
      <hr />
      
  <ul>
  {team.map((member, idx) => (
    <li key={idx}>
    <img src={member.img} alt="" />
    <li>{member.name} </li>
    <li>Price: {member.price} </li>
    <li>Strength: {member.strength} </li>
    <li>Agility: {member.agility} </li>
    <button onClick={() => handleRemoveFighter(member, idx)} type="submit">Remove</button>
    </li>
        ))}
 </ul>
    </>
  );
};

export default App;