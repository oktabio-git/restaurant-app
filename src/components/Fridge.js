import Main from "./Main";
import Tabs from "./Tabs";
import Table from "./Table";
import categories from "../categories.json";
import units from "../units.json";

function Fridge() {
    return (
        <div className="row justify-content-center mt-3">
            <Tabs />
            <Table />
            <button className="btn btn-primary w-25 mt-3">+ New Ingredient</button>
            <Main categories={categories} units={units} />;
        </div>
    );
}
export default Fridge;
