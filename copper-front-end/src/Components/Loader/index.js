import { LoaderImage } from "../../Assets";
import "./styles.css"

const Loader = (props) => {
    return props.loading && <tr><div className="LoaderContainer" ><img src={LoaderImage} className="Loader" /></div></tr> || <>
        {props.children}
    </>
}

export default Loader