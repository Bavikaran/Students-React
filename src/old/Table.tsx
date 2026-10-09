import type React from "react";
import Button from "../components/Button";

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


















