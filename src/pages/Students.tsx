import { useState, type ChangeEvent, useEffect } from 'react'
import axios from 'axios';
import '../App.css'
import Button from '../components/Button';
import Input from '../components/Input';
import Table from '../components/Table';



interface IProps {
  pageName: string
  pageNumber: number
  showMegAlert: (msg: string) => void
}


const studentColumn: any[] = [
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
    }
];


function Students(props: IProps) {


  interface IStudent {
    id?: string;
    name: string;
    age: number;
    address: string;
    phoneNumber: string;
  }

  const [count, setCount] = useState(0)
  const [result, setResult] = useState<"Pass" | "Fail">("Fail")
  const [student, setStudent] = useState<IStudent>({ name: "", age: 0, address: "", phoneNumber: "" }) as any
  const [students, setStudents] = useState<IStudent[]>([])
  const [isEditKey, setIsEditKey] = useState<number>();


  const API_BASE_URL = "https://6a0825e7fa9b27c848fab28e.mockapi.io/api/v1";


  function onClick(action: 'increase' | 'decrease') {

    const x = action === "increase" ? (count + 1) : (count - 1)
    setCount(x);
    setResult(x > 5 ? "Pass" : "Fail")

  }


  function onchangeValues(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.name, e.target.value);
    setStudent({ ...student, [e.target.name]: e.target.name === "age" ? Number(e.target.value) : e.target.value });

  }





  function onSave() {

    const studentList = [...students];
    if (isEditKey !== undefined && student.id) {
      axios.put(`${API_BASE_URL}/students/${student.id}`, student).then((res) => {
        console.log(res.data);
        getAllStudents();
      });
      setStudents(studentList.map((item, index) => index === isEditKey ? student : item));
      setIsEditKey(undefined);
    } else {
      axios.post(`${API_BASE_URL}/students`, student).then((res) => {
        console.log(res.data);
        getAllStudents();
      })
    }
    setStudent({ name: "", age: 0, address: "", phoneNumber: "" });

    studentList.map((data, index) => {
      console.log(data, index);
    })

  }


  function onDelete(id: number) {
    axios.delete(`${API_BASE_URL}/students/${id}`).then((res) => {
      console.log("Deleted:", res.data);
      getAllStudents();
    })
  }


  function onEdit(rowData: IStudent, index: number) {
    const studentList = [...students];
    setStudent(rowData);
    setIsEditKey(index);
    console.log("Student Data: ", studentList);

    studentList.map((data, index) => {
      console.log(data, index);
    })
  }




  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = async () => {
    const API_BASE_URL = "https://6a0825e7fa9b27c848fab28e.mockapi.io/api/v1";
    const response = await axios.get(`${API_BASE_URL}/students`);
    console.log("all data: ", response.data);
    setStudents(response.data);
  }




  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <h1 style={{ textAlign: "center", color: "var(--accent)" }}>{props.pageName}</h1>
      <h3 style={{ textAlign: "center", color: "var(--accent)" }}>{`Page Number: ${props.pageNumber}`}</h3>
      <section id="center">
        <Button name='Click Here' onClick={() => props.showMegAlert("HELLO....")} />
      </section>

      <br/>
      <section style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "12px", flexWrap: "wrap", marginTop: "12px", marginBottom: "16px", width: "100%" }}>
        <Button name='Increase Count' bgColor="var(--accent-bg)" size="md" onClick={() => (onClick("increase"))} />
        <Button name='Decrease Count' bgColor="var(--accent-bg)" size="md" onClick={() => (onClick("decrease"))} />
      </section>
      <div className="counter"> Count is {count} </div>
      <div className="counter"> Result: {result} </div>

      <section style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "20px" }}>
        <div>
          <Input name='name' value={student.name} onChange={(event) => onchangeValues(event)} placeholder='Name' type='text' />
        </div>
        <div>
          <Input name='age' value={student.age} onChange={(event) => onchangeValues(event)} placeholder='Age' type='number' />
        </div>
        <div>
          <Input name='address' value={student.address} onChange={(event) => onchangeValues(event)} placeholder='Address' type='text' />
        </div>
        <div>
          <Input name='phoneNumber' value={student.phoneNumber} onChange={(event) => onchangeValues(event)} placeholder='Phone Number' type='text' />
        </div>

        <div className="counter">Name: {student.name} | Age: {student.age} | Address: {student.address} | Phone Number: {student.phoneNumber}</div>
        <br />
        <Button name='Save Students' onClick={onSave} />
        <br/>  
      </section>


      <div style={{ width: "100%" }}>
        <Table tableData={students} column={studentColumn} onEdit={onEdit} onDelete={onDelete}/>
      </div>


    </div>
  )
}

export default Students





































{/*<Table
          tableData={students}
          column={studentColumn}
          actions={(rowData, index) => (
            <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
              <Button name="Edit"   size="sm" onClick={() => onEdit(rowData, index)} />
              <Button name="Delete" size="sm" onClick={() => rowData.id && onDelete(rowData.id)} />
            </div>
          )}
        /> */}







































































      {/*<div className="counter">
        <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "sans-serif" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left", fontWeight: "bold", backgroundColor: "var(--accent-bg)", color: "var(--bg)" }}>Id</th>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left", fontWeight: "bold", backgroundColor: "var(--accent-bg)", color: "var(--bg)" }}>Name</th>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left", fontWeight: "bold", backgroundColor: "var(--accent-bg)", color: "var(--bg)" }}>Age</th>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left", fontWeight: "bold", backgroundColor: "var(--accent-bg)", color: "var(--bg)" }}>Address</th>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left", fontWeight: "bold", backgroundColor: "var(--accent-bg)", color: "var(--bg)" }}>Phone Number</th>
              <th style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left", fontWeight: "bold", backgroundColor: "var(--accent-bg)", color: "var(--bg)" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((data, index) => {
              return (
                <tr key={index}>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{data.id}</td>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{data.name}</td>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{data.age}</td>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{data.address}</td>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left" }}>{data.phoneNumber}</td>
                  <td style={{ borderBottom: "1px solid #ddd", padding: "8px", textAlign: "left" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                      <Button name='Delete' onClick={() => data.id && onDelete(data.id)} />
                      <Button name='Edit' onClick={() => onEdit(data, index)} />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>  


      </div>   */}