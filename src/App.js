import logo from './logo.svg';
import './App.css';
import * as React from "react";
import StudentsTable from "./StudentsTable";

class App extends React.Component{
  state = {
    students: [{firstName: "Avi",lastName:"sucar",average: 87},{firstName: "Avi",lastName:"neelavi",average: 79}],
    firstNameFilter: "",
    lastNameFilter: "",
    averageFilter: ""
  }
  onGlobalChange = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  render() {
      const filtered = this.state.students.filter((student)=> {
          if (student.firstName.startsWith(this.state.firstNameFilter) &&
              student.lastName.startsWith(this.state.lastNameFilter) &&
              String(student.average).startsWith(this.state.averageFilter)){
              return true;

          }
          else {

              return false
          };
              });


    return(
        <div className="App">
          <div>First Name: <input onChange={this.onGlobalChange} name={"firstNameFilter"} value={this.state.firstNameFilter}/></div>
          <div>Last Name: <input onChange={this.onGlobalChange}  name={"lastNameFilter"} value={this.state.lastNameFilter}/></div>
          <div>Average: <input onChange={this.onGlobalChange} name={"averageFilter"} value={this.state.averageFilter}/></div>
            <div>
                <h5>There is: {filtered.length} that founded</h5>
                {(this.state.firstNameFilter != "" || this.state.lastNameFilter != "" || this.state.averageFilter != "" ) &&
                < StudentsTable students={filtered}/>

                }
                {
                    filtered.length == 0 &&
                        <h4>Nothing Found</h4>
                }
            </div>

        </div>
    )
  }
  }

  export default App;
