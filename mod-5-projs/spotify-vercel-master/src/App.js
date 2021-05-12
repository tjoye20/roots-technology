
import './App.css';
import axios from 'axios';
import api from './services/api';
import { useEffect, useState } from 'react';
import { searchbytrack } from './services';
import ListItem from './components/ListItem';


function App() {
  const [searchInput, setsearchInput] = useState('')
  const [songList, setsongList] = useState([])
  const [err, seterr] = useState({})
  useEffect(() => {
    const ClientId = 'c2ef3245d42344228d7b3ab0308c1d25'
    const ClientSecret = 'ec9c263f02ab4e6fad99cfb4da9d8075'

    axios('https://accounts.spotify.com/api/token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(ClientId + ':' + ClientSecret)
      },
      data: 'grant_type=client_credentials',
      method: 'POST'
    })
      .then(tokenResponse => {
        api.setAccessToken(tokenResponse.data.access_token);
        console.log(tokenResponse.data)
      })
  }, [])
  const search = async () => {
    let res = await searchbytrack(searchInput)
    if (res.success) {
      setsongList(res.data.tracks.items)
      seterr({})
    } else {
      console.log(res.message)
      setsongList([])
      seterr({ id: 0, message: 'no result found' })
    }

  }
  console.log(songList)
  return (
    <div className='flex-col' style={{ padding: '20px' }}>
      <div className='flex-row search-box-container ' style={{ alignSelf: 'center' }}>

        <input className='text-input' onChange={(e) => { setsearchInput(e.target.value) }} />
        <button onClick={() => { search() }}>Search</button>
      </div>
      <div>
        {err.id === 0 && <p>{err.message}</p>}
      </div>
      <div className='song-listing'>

        {songList.map((item, i) => {
          return <ListItem item={item} key={i} />



        })}

      </div>


    </div>
  );
}

export default App;
