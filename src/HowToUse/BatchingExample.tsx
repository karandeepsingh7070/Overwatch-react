import { useSharedState } from "../Hooks/useSharedState"

type Author = {
    name: string
};
  
type User = {
    type: string
};

const BatchingExample = () => {
    const [user,setUser] = useSharedState<User>('user')
    const [author,setAuthor] = useSharedState<Author>('author')

    const handleStateUpdate = () => {
        // both fn will be batched
        setUser({...user, type : "Admin"})
        setAuthor({...author,name : "Karan"})
    }
  return (<>
    <h2>Test State Batching</h2>
    <h5>{`Current user is ${user?.type} and Author is ${author?.name}`}</h5>
    <p>{`How it works : it'll combine both excecution and run state update only once`}</p>
    <button onClick={handleStateUpdate}>Update User to Admin & Reveal Auther</button>
  </>)
}

export default BatchingExample