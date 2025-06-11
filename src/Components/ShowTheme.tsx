import { useSharedState } from '../Hooks/useSharedState';
// import { Theme } from '../Modals';

type Theme = {
  type: string
};

const ShowTheme = () => {
    const [theme] = useSharedState<Theme>('theme');
  return (<>
    <h1>{`The selected theme is ${theme.type}`}</h1>
  </>)
}

export default ShowTheme