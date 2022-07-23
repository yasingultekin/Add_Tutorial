import React, { useEffect, useState } from 'react'
import AddTutorial from '../components/AddTutorial'
import TutorialList from '../components/TutorialList'
import axios from 'axios'


const Home = () => {

  const [tutorials, setTutorials] = useState();

  const url = 'https://cw-axios-example.herokuapp.com/api/tutorials';

  const getTutorials = async () => {
    try {
      const {data} = await axios.get(url);
      setTutorials(data);
    } catch (error) {
        console.log(error);
    }
  }

useEffect(() => {
  getTutorials();
}, [])

const addTutorial = async (tutorial) => {
  try {
    await axios.post(url, tutorial);
  } catch (error) {
    console.log(error);
  }
  getTutorials();
}

console.log(tutorials);

  return (
    <>
    <AddTutorial addTutorial={addTutorial} />
    <TutorialList tutorials={tutorials} />
    </>
  )
}

export default Home