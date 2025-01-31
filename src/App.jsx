// import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Body from "./components/Body";
// import Login from "./components/Login";
// import Profile from "./components/Profile";
// import { Provider } from "react-redux";
// import appStore from "./utils/appStore";
// import Feed from "./components/Feed";
// import Connections from "./components/Connections";
// import Requests from "./components/Requests";
// function App() {
//   return (
//     <>
//     <Provider store={appStore}>
//     <BrowserRouter basename="/">
//     <Routes>
//     <Route path="/" element={<Body/>}>
//      <Route path="/" element={<Feed/>}/>
//      <Route path="/login" element={<Login/>}/>
//      <Route path="/profile" element={<Profile/>}/>
//      <Route path="/connections" element={<Connections/>}/>
//      <Route path="/requests" element={<Requests/>}/>
//     </Route>
    
//     </Routes>
//     </BrowserRouter>
//     </Provider>
    
    
      
//     </>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Feed from "./components/Feed";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import PrivateRoute from "./components/PrivateRoute";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Feed />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/connections"
                element={
                  <PrivateRoute>
                    <Connections />
                  </PrivateRoute>
                }
              />
              <Route
                path="/requests"
                element={
                  <PrivateRoute>
                    <Requests />
                  </PrivateRoute>
                }
              />
              <Route
                path="/chat/:targetUserId"
                element={
                  <PrivateRoute>
                    <Chat />
                  </PrivateRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;

