import Profile from './Profile/Profile'
function App() {

  return (
    <div>
      <Profile
        fullName="TLIOUANT Mohamed el amine"
        bio="I am a full-stack developer, an IT professional who develops software application's client and server side. I apply 
        a wide range of coding skills and help other programmers solve problems. 
        I also test and debug software and optimize the code."
        profession="Junior full stack developer"
      >
        <img src='./Picture/myPicture' alt='me'/>
      </Profile>
    </div >
  );
}

export default App;
