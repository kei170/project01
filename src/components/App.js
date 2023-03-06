import Header from "./Header";
// import Content from "./Content";
import Footer from "./Footer";
import { Children } from "react";

function App({children}){
  return (
    <div id="wrap">
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default App;