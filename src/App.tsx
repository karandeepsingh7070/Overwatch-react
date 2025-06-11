// import PublisherComponent from "./Components/PublisherComponent"
// import SubscriberComponent from "./Components/SubscriberComponent"
import ShowTheme from "./Components/ShowTheme";
import UpdateTheme from "./Components/UpdateTheme";
import { applyMiddleware } from "./StateManagement/Middleware";
import { createSharedState } from "./StateManagement/sharedState";
// Initialising a single shared state
createSharedState('theme', {type : 'light'});
// also write a function to initialise multiple state using a single function

applyMiddleware('theme', (value, next) => {
    console.log('Theme changed to:', value);
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
