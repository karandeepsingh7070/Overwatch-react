import { useSharedState } from '../Hooks/useSharedState';
// import { Theme } from '../Modals';

type Theme = {
  type: string
};

const UpdateTheme = () => {
    const [theme, setTheme] = useSharedState<Theme>('theme');
  return (<button onClick={() => setTheme({...theme, type : theme.type == 'light' ? 'dark' : 'light'})}>
    {`Update theme to ${theme.type == 'light' ? 'dark' : 'light'}`}
    </button>)
}

export default UpdateTheme