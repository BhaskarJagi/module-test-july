import React,{useEffect} from "react";
import { fetchPost } from "../redux/actions/postActions";
import { selectedPost } from "../redux/actions/infoActions";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {LiaGreaterThanSolid} from 'react-icons/lia'


const Home = () => {
    const {loading, data, error} = useSelector(state => state.postReducer)
    console.log({loading, data, error})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(
        () => {
            dispatch(fetchPost())
        },[]
    )

    function getInfo(user){
        navigate('/info')
        dispatch(selectedPost(user))
    }
    
    return(
        <div className="home-page">
            <h2>Social Media For Travellers</h2>
            <input type="text" placeholder="Search here..." className="search-bar"/>
            <div className="cards-container">
                {
                    data && 
                    data.map((user,index) => (
                        <div className="user-card" key={index}>
                            <img src={` https://picsum.photos/200?random=${user.id}`} alt="user image"/>
                            <h4>Post Title</h4>
                            <div className="title">
                                <p>{user.title}.<span onClick={() => getInfo(user)}>Read more...</span></p>
                                <button onClick={() => getInfo(user)} className="more-btn"><LiaGreaterThanSolid/></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home