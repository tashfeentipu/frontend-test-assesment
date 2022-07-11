import { LoaderImage } from "../../Assets";

const Loader = (props) => {
    return props.loading && <LoaderImage /> || <div>
        {props.children}
    </div>
}

export default Loader