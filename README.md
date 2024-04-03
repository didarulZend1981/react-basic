Terminal :npm create vite@latest react-basic -- --template react

Terminal :npm install react-router-dom localforage match-sorter sort-by

Terminal :npm run dev

terminal :npm install -D tailwindcss postcss autoprefixer

terminal :npx tailwindcss init -p
terminal :npm i -D daisyui@latest

terminal :npm install firebase

13.
    1. create a context as below
          export const DataContext = createContext(null)
    2.Warp the children components with context provider.
          const data = {name:"jack"}
          <DataContext.Provider value={data}>
               <ChildrenComponent/>
          </DataContext.Provider>
    3. access context value
          import {DataContext} from "../path"
          const contextData = useContext(DataContext)