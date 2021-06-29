//NPM ADD REACT-ROUTER-DOM / NPM ADD @TYPES/REACT-ROUTER
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";


import { AuthContextProvider } from './contexts/AuthContext'
import { AdminRoomm } from "./pages/adminRoomm";





function App() { //SWITCH É PARA NÃO REPETIR AS PAGINAS
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch> 
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />

          <Route path="/admin/rooms/:id" component={AdminRoomm} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
