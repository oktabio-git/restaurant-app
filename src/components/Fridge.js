import Form from "./Form";
import Tabs from "./Tabs";
import Table from "./Table";
import categories from "../categories.json";
import units from "../units.json";
import { useState } from "react";

const Fridge = () => {
    const [visible, setVisible] = useState(false);
    const handleToggle = () => {
        setVisible((current) => !current);
    };
    const [data, setData] = useState([]);
    const sendData = (data) => {
        console.log(data);
        setData(data);
    } 
    // const handleOnSubmit = (libro) => {
    //     console.log(libro);
    // };

    return (
        <div className="row mt-3">
            <div className="col-10 offset-1">
                <Tabs />
            </div>
            <div className="col-10 offset-1">
                <div className="row">
                    <div className={`${visible ? "col-9" : "col-12"}`}>
                        <Table data={data} />
                        <button
                            className="btn btn-primary w-25 mt-3"
                            onClick={handleToggle}
                        >
                            + New Ingredient
                        </button>
                    </div>
                    {visible && (
                        <div className="col-3">
                            <Form
                                // handleOnSubmit={handleOnSubmit}
                                sendData={sendData}
                                categories={categories}
                                units={units}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Fridge;
