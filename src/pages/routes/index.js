import { Route, Switch} from "react-router"
import Iam from "../iam"
import Projects from "../projects/projects"

const Routes = ()=>{
    return(
        <Switch>
            <Route exact path="/">
                <Projects/>
            </Route>
            <Route path="/iam">
                <Iam/>
            </Route>
        </Switch>
    )
}
export default Routes