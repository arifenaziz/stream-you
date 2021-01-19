import React,{Suspense,useEffect} from 'react';
import Layout from "./components/theme/Layout/Layout";
import Home from './pages/Home/Home';

import {
  BrowserRouter as Router,  
  Switch,
  Route,
  Redirect,
  withRouter 
} from "react-router-dom";


const VideoCategories =React.lazy(()=>
  import('./pages/VideoCategories/VideoCategories')
);

const VideoChannels =React.lazy(()=>
  import('./pages/VideoChannel/VideoChannel')
);

const About =React.lazy(()=>
  import('./pages/About/About')
);

const Terms =React.lazy(()=>
  import('./pages/Terms/Terms')
);

const Policy =React.lazy(()=>
  import('./pages/Policy/Policy')
);

const VideoSingle =React.lazy(()=>
  import('./pages/VideoSingle/VideoSingle')
);


let routes=(
  <Switch>

<Route path="/video/:id" render={()=>
  <Suspense fallback={<div>Loading...</div>}>
    <VideoSingle/>
  </Suspense>
  }/>

<Route path="/policy" render={()=>
  <Suspense fallback={<div>Loading...</div>}>
    <Policy/>
  </Suspense>
  }/>

<Route path="/terms" render={()=>
  <Suspense fallback={<div>Loading...</div>}>
    <Terms/>
  </Suspense>
  }/>

  <Route path="/about" render={()=>
  <Suspense fallback={<div>Loading...</div>}>
    <About/>
  </Suspense>
  }/>

  <Route path="/categories" render={()=>
  <Suspense fallback={<div>Loading...</div>}>
    <VideoCategories/>
  </Suspense>
  }/>

  <Route path="/channels" render={()=>
  <Suspense fallback={<div>Loading...</div>}>
    <VideoChannels/>
  </Suspense>
  }/>
                                                        
  {/* <Route path="/forms" component={Forms} />                         */}

  <Route path="/" exact>
    <Home />
  </Route>
  <Redirect to="/" />
  </Switch>
);

function App() {
  return (
       <Layout>
         {routes}
       </Layout>   
  );
}

export default App;
