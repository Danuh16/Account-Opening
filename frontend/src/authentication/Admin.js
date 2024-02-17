import axios from 'axios';
import * as yup from 'yup';
import AdminHome from './AdminHome'
import Home from './Home'

function Admin() {
    const [admin, setAdmin] = useState(false);
    const [userData, setUserData] = useState("");
    const [data, setData] = useState([]);

    const getAllUser = () => {
      fetch("http://localhost:4000/getAllUser", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userData");
          setData(data.data);
        });
    };

    const getUserData = async () => {
      try {
        const response = await axios.post('http://localhost:4000/userData', {
          method: 'POST',
          crossDomain: true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({
            token: window.localStorage.getItem('token')
          })
        });
        const user = await response.json();
        console.log(user);
        if (user.data.userType === 'Admin') {
          setAdmin(true);
        }
        setUserData(user.data);
        if (user.data === 'token expired') {
          alert('Token expired login again');
          window.localStorage.clear();
          window.location.href = './Form';
        } else {
          window.location.href = '/Admin';
        }
      } catch (error) {
        console.error(error);
      }
    };
    useEffect(() => {
      getUserData();
      getAllUser();
    }, []);
return (admin ? <AdminHome /> : <Home userData={userData} /> &&
                    <table border={1}>
                      <tr>
                        <th>FullName</th>
                        <th>Tel NO.</th>
                        <th>Mother's Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Date of Birth</th>
                      </tr>
                      {data.map((i) => {
                        return (
                          <tr>
                            <td>{i.fullName}</td>
                            <td>{i.telNo}</td>
                            <td>{i.mothername}</td>
                            <td>{i.country}</td>
                            <td>{i.city}</td>
                            <td>{i.dateOfBirth}</td>
                          </tr>
                        )
                      })
                    }
                      </table>
             );
}
export default Admin;