import { Spinner } from "react-bootstrap"
import './Loader.css'

function Loader() {
    return(
        <Spinner className="loader" animation="grow" variant="warning" />
    )
}

export default Loader