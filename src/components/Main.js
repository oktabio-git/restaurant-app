const Main = (props) => {
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
        <div className="row mt-3 d-flex justify-content-center">
            <div className="col-4">
                <form>
                    <input
                        className="form-control mb-2"
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                    />

                    <select className="form-control mb-2" name="category" required>
                        {categoryData}
                    </select>

                    <input
                        className="form-control mb-2"
                        type="number"
                        name="quantity"
                        placeholder="Quantity"
                        required
                    />

                    <select className="form-control mb-2" name="unit" required>
                        {unitData}
                    </select>

                    <button className="btn btn-danger w-25 mt-3 me-3">
                        Cancel
                    </button>
                    <button className="btn btn-primary w-25 mt-3">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Main;
