import type React from "react";
import Button from "./Button";

const thStyle: React.CSSProperties = {
  border: "1px solid #dddddd",
  textAlign: "center",
  padding: "8px",
  backgroundColor: 'var(--accent-bg)',
  fontWeight: "bold",
};

const tdStyle: React.CSSProperties = {
  border: "1px solid #dddddd",
  textAlign: "center",
  padding: "8px",
};


{/*}
const clothItems = [
  {
    id: 1,
    name: "Cotton Fabric",
    color: "White",
    price: 850,
    stock: 120,
  },
  {
    id: 2,
    name: "Silk Fabric",
    color: "Red",
    price: 2500,
    stock: 45,
  },
  {
    id: 3,
    name: "Denim Fabric",
    color: "Blue",
    price: 1800,
    stock: 75,
  },
];


const columnCloth: any[] = [
    {
        key: 'id',
        name: 'ID'
    },
    {
        key: 'name',
        name: 'Name'
    },
    {
        key: 'color',
        name: 'Color'
    },
    {
        key: 'price',
        name: 'Price'
    },
    {
        key: 'stock',
        name: 'Stock'
    }
];


const studentData:any[] = [
  {
    createdAt: "2026-10-05T12:09:57.376Z",
    name: "Olga Lubowitz",
    avatar: "https://avatars.githubusercontent.com/u/1471797",
    address: "12477 Franecki Hill",
    age: "6723",
    mark: "4466",
    phoneNumber: "202-906-6398 x2704",
    id: "1",
  },
  {
    createdAt: "2026-10-05T18:37:05.680Z",
    name: "Megan Bartell",
    avatar: "https://avatars.githubusercontent.com/u/90281538",
    address: "719 Barton Loaf",
    age: "8236",
    mark: "948",
    phoneNumber: "317-599-8739 x4199",
    id: "2",
  },
  {
    createdAt: "2026-10-05T15:51:50.476Z",
    name: "Gwendolyn Stanton",
    avatar:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/29.jpg",
    address: "436 N Railroad Street",
    age: "2617",
    mark: "901",
    phoneNumber: "535-476-5522 x97235",
    id: "3",
  },
];


const column: any[] = [
    {
        key: 'id',
        name: 'ID'
    },
    {
        key: 'name',
        name: 'Name'
    },
    {
        key: 'age',
        name: 'Age'
    },
    {
        key: 'address',
        name: 'Address'
    },
    {
        key: 'phoneNumber',
        name: 'Phone Number'
    },
    
];

*/}




interface ITable {
    column: any[];
    tableData: any[];
    onEdit?: (rowData: any, index: number) => void;
    onDelete?: (id: number) => void;
}




function Table(props: ITable) {
    const {column, tableData, onEdit, onDelete} = props;

  return (
    <div >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "sans-serif",
        }}
      >
        <thead>
          <tr>
            {
                column.map((col, index) => {
                    return (
                    <th key={index} style={thStyle}> {col.name} </th>
                    );
                })
            }
            {(onEdit || onDelete) && <th style={thStyle}>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {
            tableData.map((data, index) => {

                return (
                    <tr key={index}>
                        {
                            column.map((col, ny) => {
                                return (
                                    <td key={`${index}_${ny}`} style={tdStyle}> {data[col.key]} </td>
                                );
                            })
                        }
                        {(onEdit || onDelete) && (
                          
                          <td style={tdStyle}>
                            <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
                              {onEdit && (<Button size='sm' name='Edit' onClick={() => onEdit(data, index)}/>)}
                              {onDelete && (<Button size='sm' name='Delete' onClick={() => onDelete(data.id)}/>)}
                            </div>
                          </td>
  
                        )}
                    </tr>
                );

            })
          }
        </tbody>

      </table>
    </div>
  );
}

export default Table;


















