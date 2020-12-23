import React, { useState, useEffect , useRef} from 'react';
import './home.css'

const data = {
    name: 'David',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    av: 'https://www.socialketchup.in/wp-content/uploads/2020/05/fi-vill-JOHN-DOE.jpg'
}
export const Home = () => {
// color 

// element
const addPostRef = useRef(null);

    const [post, setpost] = useState([data, data, data])
    useEffect(() => {
        console.log(post, '[new post');
        addPostRef.current.style.color ='white';
    }, [post])

    const addData = () => setpost([...post, data])
    
    return (<>
        <button ref={addPostRef} onClick={addData}>  add new Post </button>
        <div className='container'>
            {
                post.map((v, i) => <div className='card' style={{
                    width:
                        post.length < 4 ? '25vw' : (100 / post.length) + 'vw'
                }} key={i}>
                    <img src={v.av} alt='image' /><br />
                    <b>{
                        v.name
                    }</b>
                    <p>{
                        v.content
                    }</p>
                </div>)
            }
        </div>
    </>)
}