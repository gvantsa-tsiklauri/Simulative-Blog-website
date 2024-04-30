import axios from 'axios';
import { useState, useEffect } from 'react';


function Axios() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(response) {
          setData(response.data);
          console.log(data);
        })
        .catch(function(error) {
          console.error('Error fetching data:', error);
        });
    }, []);

    return (
        data.map(item => <p>{item.body}</p>)
    )
}

export default Axios