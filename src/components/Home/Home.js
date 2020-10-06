import React from 'react';
import Event from '../Event/Event';

const Home = () => {
  const fakeData = [
    {
      id : 1,
      name: 'Animal Shelter',
      image: 'animalShelter.png'
    },
    {
      id : 2,
      name: 'Baby Sit',
      image: 'babySit.png'
    },
    {
      id : 3,
      name: 'Bird House',
      image: 'birdHouse.png'
    },
    {
      id : 4,
      name: 'Child Support',
      image: 'childSupport.png'
    },
    {
      id : 5,
      name: 'Clean Water',
      image: 'cleanWater.png'
    },
    {
      id : 6,
      name: 'Clearn Park',
      image: 'clearnPark.png'
    },
    {
      id: 7,
      name: 'Cloth Swap',
      image: 'clothSwap.png'
    },
    {
      id : 8,
      name: 'Driver Safety',
      image: 'driveSafety.png'
    },
    {
      id : 9,
      name: 'Extra volunteer',
      image: 'extraVolunteer.png'
    },
    {
      id : 10,
      name: 'Food Charity',
      image: 'foodCharity.png'
    },
    {
      id : 11,
      name: 'Good Education',
      image: 'goodEducation.png'
    },
    {
      id : 12,
      name: 'IT Help',
      image: 'ITHelp.png'
    },
    {
      id : 13,
      name: 'Library Books',
      image: 'libraryBooks.png'
    },
    {
      id : 14,
      name: 'Music Lessons',
      image: 'musicLessons.png'
    },
    {
      id : 15,
      name: 'New Books',
      image: 'newBooks.png'
    },
    {
      id : 16,
      name: 'Refuse Shelter',
      image: 'refuseShelter.png'
    },
    {
      id : 17,
      name: 'River Clean',
      image: 'riverClean.png'
    },
    {
      id : 18,
      name: 'School Suffiles',
      image: 'schoolSuffiles.png'
    },
    {
      id : 19,
      name: 'Study Group',
      image: 'studyGroup.png'
    },
    {
      id : 20,
      name: 'Stuffed Animals',
      image: 'stuffedAnimals.png'
    },
    {
      id : 21,
      name: 'Vote Register',
      image: 'voteRegister.png'
    },
   
  ]
  return (
    <div className="row">
      
      {
        fakeData.map(item =><Event item={item} key={item.id} ></Event>)
      }
    </div>
  );
};

export default Home;