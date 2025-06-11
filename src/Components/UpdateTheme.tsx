import { useSharedState } from '../Hooks/useSharedState';
// import { Theme } from '../Modals';

type Theme = {
  type: string
};

const UpdateTheme = () => {
    const [theme, setTheme] = useSharedState<Theme>('theme');

    const handleClick = () => {
      let newTheme = {...theme, type : theme.type == 'light' ? 'dark' : 'light'}
      setTheme(newTheme)

    }
  return (<button onClick={() => handleClick()}>
    {`Update theme to ${theme.type == 'light' ? 'dark' : 'light'}`}
    </button>)
}

export default UpdateTheme