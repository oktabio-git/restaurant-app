const Table = () => {
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit of Measure</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Tomato</td>
                    <td>Vegetables & Fruits</td>
                    <td>1</td>
                    <td>Kilograms</td>
                </tr>
            </tbody>
        </table>
    );
};
export default Table;
