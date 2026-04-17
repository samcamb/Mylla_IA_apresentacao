import { Router as WouterRouter, Route, Switch } from "wouter";
import Landing from "@/pages/Landing";

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={Landing} />
        <Route>
          <Landing />
        </Route>
      </Switch>
    </WouterRouter>
  );
}

export default App;
