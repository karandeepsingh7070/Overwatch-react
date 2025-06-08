import PublisherComponent from "./Components/PublisherComponent"
import SubscriberComponent from "./Components/SubscriberComponent"

function App() {

  return (<>
  <div style={{display: "flex", gap : "1rem",flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh"}}>
    Pubsub Implementation
    <PublisherComponent />
    <SubscriberComponent />
    </div>
    </>)
  
}

export default App
