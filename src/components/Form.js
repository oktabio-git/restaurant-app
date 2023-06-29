import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        props.sendData(data);
    };

    // const [ingredient, setIngredient] = useState({
    //     name: ingredient ? ingredient.name : "",
    //     category: ingredient ? ingredient.category : "",
    //     quantity: ingredient ? ingredient.quantity : "",
    //     unit: ingredient ? ingredient.unit : "",
    // });

    // const [errorMsg, setErrorMsg] = useState("");
    // const { name, category, quantity, unit } = ingredient;

    // const handleOnSubmit = (event) => {
    //     event.preventDefault();
    //     const values = [name, category, quantity, unit];
    //     let errorMsg = "";

    //     const allFieldComplete = values.every((field) => {
    //         const value = `${field}`.trim();
    //         return value !== "" && value !== "0";
    //     });

    //     if (allFieldComplete) {
    //         const ingredient = {
    //             id: uuidv4(),
    //             name,
    //             category,
    //             quantity,
    //             unit,
    //         };
    //         handleOnSubmit(ingredient);
    //     } else {
    //         errorMsg = "Please, complete all the fields.";
    //     }
    //     setErrorMsg(errorMsg);
    // };

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     switch (name) {
    //         case "quantity":
    //             if (value === "" || parseInt(value) === +value) {
    //                 setIngredient((prevState) => ({
    //                     ...prevState,
    //                     [name]: value,
    //                 }));
    //             }
    //             break;
    //         default:
    //             setIngredient((prevState) => ({
    //                 ...prevState,
    //                 [name]: value,
    //             }));
    //     }
    // };

    const navigate = useNavigate();
    const handleCancel = () => {
        navigate("/");
    };

    const categoryData = props.categories.map((category) => {
        return (
            <option key={category.id} value={category.id}>
                {category.name}
            </option>
        );
    });

    const unitData = props.units.map((unit) => {
        return (
            <option key={unit.id} value={unit.id}>
                {unit.name}
            </option>
        );
    });

    return (
        <div className="row mt-3 d-flex">
            {/* {errorMsg && <p className="errorMsg">{errorMsg}</p>} */}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="g-3 needs-validation text-start"
                noValidate
            >
                <label className="form-label text-secondary fs-7">Name</label>
                <input
                    className="form-control mb-2"
                    type="text"
                    name="name"
                    placeholder="Name"
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                    // onChange={handleInputChange}
                />
                {errors.name && errors.name.type === "required" && (
                    <div className="mb-2 invalid-field">
                        Name field is required.
                    </div>
                )}

                <label className="form-label text-secondary fs-7">
                    Category
                </label>
                <select
                    className="form-control mb-2"
                    name="category"
                    {...register("category", { required: true })}
                    // onChange={handleInputChange}
                    required
                >
                    {categoryData}
                </select>
                {errors.category && errors.category.type === "required" && (
                    <div className="mb-2 invalid-field">
                        Category field is required.
                    </div>
                )}

                <label className="form-label text-secondary fs-7">
                    Quantity
                </label>
                <input
                    className="form-control mb-2"
                    type="number"
                    min="1"
                    name="quantity"
                    placeholder="Quantity"
                    {...register("quantity", {
                        required: true,
                        min: 1,
                        max: 99,
                        value: 1,
                        pattern: /[0-9]+/,
                    })}
                    // onChange={handleInputChange}
                />
                {errors.quantity && errors.quantity.type === "required" && (
                    <div className="mb-2 invalid-field">
                        Quantity field is required.
                    </div>
                )}

                <label className="form-label text-secondary fs-7">
                    Unit of measure
                </label>
                <select
                    className="form-control mb-2"
                    name="unit"
                    {...register("unit", { required: true })}
                    // onChange={handleInputChange}
                >
                    {unitData}
                </select>
                {errors.unit && errors.unit.type === "required" && (
                    <div className="mb-2 invalid-field">
                        Unit field is required.
                    </div>
                )}
                <div className="text-center">
                    <button
                        className="btn btn-danger mt-3 me-2"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                    <button className="btn btn-primary mt-3" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
export default Form;
