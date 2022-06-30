import Header from "./components/Header"
import Post from "./Post"
import styles from "./App.module.css"
import "./global.css"
import Sidebar from "./components/Sidebar"


function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
       <Sidebar />
        <main>
            <Post author={"Lucas Juste"} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus vel animi repudiandae impedit eius ipsam expedita accusamus quam velit, iusto itaque esse doloribus culpa quidem iure est quas quaerat facilis!"} />
             <Post author={"Lucas Juste"} content={"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus vel animi repudiandae impedit eius ipsam expedita accusamus quam velit, iusto itaque esse doloribus culpa quidem iure est quas quaerat facilis!"} />
        </main>    
      </div>
    </> 
    
  ) 
}

export default App
