import DisplayTodos from "./components/DisplayTodos";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Header />
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Money Transfer App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
