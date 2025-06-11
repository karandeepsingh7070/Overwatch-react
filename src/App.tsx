// import PublisherComponent from "./HowToUse/PublisherComponent"
// import SubscriberComponent from "./HowToUse/SubscriberComponent"
import ShowTheme from "./HowToUse/ShowTheme";
import UpdateTheme from "./HowToUse/UpdateTheme";
import { applyMiddleware } from "./StateManagement/Middleware";
import { createSharedState } from "./StateManagement/sharedState";
// Initialising a single shared state
createSharedState('theme', {type : 'light'});
// also write a function to initialise multiple state using a single function

applyMiddleware('theme', (value, next) => {
    console.log('From Global Middleware : Theme changed to:', value);
    next(value);
  });
function App() {

  return (<>
  <div style={{display: "flex", gap : "1rem",flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
    {/* Pubsub Implementation */}
    {/* <PublisherComponent />
    <SubscriberComponent /> */}
    State Management
    <ShowTheme />
    <UpdateTheme />
    </div>
    </>)
  
}

export default App
