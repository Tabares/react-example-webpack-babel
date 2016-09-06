import React from 'react';
import Header from './Header.jsx'
import TableRow from './TableRow.jsx'


class Table extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
          data:
          [
             {
                "id":1,
                "name":"Foo",
                "age":"20"
             },

             {
                "id":2,
                "name":"Bar",
                "age":"30"
             },

             {
                "id":3,
                "name":"Baz",
                "age":"40"
             }
          ]
      }
    }

   render() {
      return (
         <div>
         <h1>Table on components</h1>
            <Header/>
            <table>
               <tbody>
                  {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
               </tbody>
            </table>
         </div>
      );
   }
}

export default Table;
