import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'; 
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Learn from './pages/Learn/Learn';
import Subjects from './components/Subjects/Subjects';
import Front from './components/Front/Front';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';
import ContactPage from './pages/Contact Page/ContactPage';
import LoginPopUp from './components/LoginPopUp/LoginPopUp';
import Chatbot from './components/ChatBot/ChatBot';
import Dashboard from './components/DashBoard/DashBoard';
import Practice from './components/Practice/Practice';
import EscapeRoomGame from './assessments/EscapeRoomGame/EscapeRoomGame';
import TreasureHuntGame from './assessments/TreasureHuntGame/TreasureHuntGame';
import SecretCodeBreaker from './assessments/SecretCodeBreaker/SecretCodeBreaker';
import MysteryDetective from './assessments/MysteryDetective/MysteryDetective';
import ShapeExplorer from './assessments/ShapeExplorer/ShapeExplorer';
import AngleHunter from './assessments/AngleHunter/AngleHunter';
import PerpendicularQuest from './assessments/PerpendicularQuest/PerpendicularQuest';
import PolygonQuest from './assessments/PolygonQuest/PolygonQuest';
import QuadrilateralQuest from './assessments/QuadrilateralQuest/QuadrilateralQuest';
import RaceAgainstTime from './assessments/RaceAgainstTime/RaceAgainstTime';
import SpaceAdventure from './assessments/SpaceAdventure/SpaceAdventure';
import TriangleQuest from './assessments/TriangleQuest/TriangleQuest';
import QuizApp from './assessments/QuizApp/QuizApp';
// import FactCard from './components/FactCard/FactCard';
import Mystery from './assessments/Mystery/Mystery';
import MathsTest from './components/MathsTest/MathsTest';
import PracticeQuestions from './components/PracticeQuestions/PracticeQuestions';
import Ncert from './components/NCERT/Ncert';
import Skeleton from './Learning/Skeleton/Skeleton';
import HistoryTest from './components/HistoryTest/HistoryTest';
import HistoryPracticeQuestions from './components/HistoryPracticeQuestions/HistoryPracticeQuestions';
import SeparationGame from './assessments/SeparationGame/SeparationGame';
import ChemistryTest from './components/ChemistryTest/ChemistryTest';
import ChemistryPracticeQuestions from './components/ChemistryPracticeQuestions/ChemistryPracticeQuestions';
import MethodsForSeparation from './assessments/MethodsForSeparation/MethodsForSeparation';
import StoreContextProvider from './context/StoreContextProvider';
import BiologyLearning from './components/BiologyLearning/BiologyLearning';
import MathsLearning from './components/MathsLearning/MathsLearning';
import BSJLearn from './Learning/BSJLearn/BSJLearn';
import BBLearn from './Learning/BBLearn/BBLearn';
import RCLearn from './Learning/RCLearn/RCLearn';
import HJLearn from './Learning/HJLearn/HJLearn';
import BOTHLearn from './Learning/BOTHLearn/BOTHLearn';
import HistoryLearning from './components/HistoryLearning/HistoryLearning';
import GeographyLearning from './components/GeographyLearning/GeographyLearning';


const App = () => {

  const [showLogin, setshowLogin] = useState(false)
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setisOpen] = useState(false) 

  return (
    <StoreContextProvider>
      {showLogin ? <LoginPopUp setshowLogin = {setshowLogin}/> : <></>}
      <div className='app'>
        <NavBar showMenu={showMenu} setShowMenu={setShowMenu} setshowLogin={setshowLogin} /> 
        <SideBar showMenu={showMenu} setShowMenu={setShowMenu} isOpen={isOpen} setisOpen={setisOpen}/>  

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="learn" element={<Learn />}>
          <Route path='subjects/maths' element={<MathsLearning/>}/>
          <Route path='subjects/geography' element={<GeographyLearning/>}/>
          <Route path='subjects/history' element={<HistoryLearning/>}/>
          <Route path='subjects/biology' element={<BiologyLearning/>}/>
          <Route path='subjects/biology/skeleton' element={<Skeleton/>}/>
          <Route path='subjects/biology/ballSocketJoint' element={<BSJLearn/>}/>
          <Route path='subjects/biology/boneOfTheHand' element={<BOTHLearn/>}/>
          <Route path='subjects/biology/hingeJoint' element={<HJLearn/>}/>
          <Route path='subjects/biology/ribCage' element={<RCLearn/>}/>
          <Route path='subjects/biology/backBone' element={<BBLearn/>}/>
          <Route index element={<Front isOpen={isOpen} setisOpen={setisOpen}/>} />
          <Route path="subjects" element={<Subjects />} />
          <Route path='practice' element={<Practice/>}/>
          <Route path='practice/maths' element={<MathsTest/>}/>
          <Route path='practice/maths/NCERT' element={<Ncert/>}/>
          <Route path='practice/maths/practiceQuestions' element={<PracticeQuestions/>}/>
          <Route path='practice/maths/practiceQuestions/angleHunter' element={<AngleHunter/>}/>
          <Route path='practice/maths/practiceQuestions/shapeExplorer' element={<ShapeExplorer/>}/>
          <Route path='practice/maths/practiceQuestions/escapeRoomGame' element={<EscapeRoomGame/>}/>
          <Route path='practice/maths/practiceQuestions/treasureHuntGame' element={<TreasureHuntGame/>}/>
          <Route path='practice/maths/practiceQuestions/secretCodeBreaker' element={<SecretCodeBreaker/>}/>
          <Route path='practice/maths/practiceQuestions/spaceAdventure' element={<SpaceAdventure/>}/>
          <Route path='practice/maths/practiceQuestions/mysteryDetective' element={<MysteryDetective/>}/>
          <Route path='practice/maths/practiceQuestions/raceAgainsttime' element={<RaceAgainstTime/>}/>
          <Route path='practice/maths/practiceQuestions/perpendicular' element={<PerpendicularQuest/>}/>
          <Route path='practice/maths/practiceQuestions/polygon' element={<PolygonQuest/>}/>
          <Route path='practice/maths/practiceQuestions/triangle' element={<TriangleQuest/>}/>
          <Route path='practice/maths/practiceQuestions/quadrilateral' element={<QuadrilateralQuest/>}/>
          <Route path='practice/maths/NCERT/mathQuiz' element={<QuizApp/>}/>
          <Route path='practice/history' element={<HistoryTest/>}/>
          <Route path='practice/history/practiceQuestions' element={<HistoryPracticeQuestions/>}/>
          <Route path='practice/history/practiceQuestions/historyQuiz' element={<Mystery/>}/>
          <Route path='practice/chemistry' element={<ChemistryTest/>}/>
          <Route path='practice/chemistry/practiceQuestions' element={<ChemistryPracticeQuestions/>}/>
          <Route path='practice/chemistry/practiceQuestions/separationAdventureGame' element={<SeparationGame/>}/>
          <Route path='practice/chemistry/practiceQuestions/methodsForSeparation' element={<MethodsForSeparation/>}/>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Chatbot isOpen={isOpen} setIsOpen={setisOpen}/>
      {/* <Skeleton/> */}
      {/* <FactCard/> */}
      </div>
      <Footer />
    </StoreContextProvider>
  );
};

export default App;
