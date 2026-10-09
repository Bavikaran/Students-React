import Students from './pages/Students'
import Table from './components/Table';



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






const columnStudent: any[] = [
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






function App() {

  const showAlert = (message: string) => {
    alert(message);
  };
    

return (
<div> 
  <Students pageName={"STUDENTS PAGE"} pageNumber={1} showMegAlert={showAlert}/>
  <br/>
  <Table tableData={studentData} column={columnStudent}/>
  <br/>
  <Table tableData={clothItems} column={columnCloth}/>
</div>
)

}

export default App
