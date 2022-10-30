import Pais from "./DropDown";

function Country() {
    return (
        <div className="container-2">
            <form>
                <label htmlFor="Country">País</label>
                <Pais />
            </form>
        </div>
    )
}

export default Country;