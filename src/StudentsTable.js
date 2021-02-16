function StudentsTable (props) {
    return(
        <div>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Average</th>
                </tr>
                {
                    props.students.map(item=>{
                        return(
                            <tr>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.average}</td>

                            </tr>
                        )
                    })
                }

            </table>
        </div>
    )

}
export default StudentsTable;
