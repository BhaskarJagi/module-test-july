import React,{ useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { selectedPost } from "../redux/actions/infoActions";
import {LiaGreaterThanSolid} from 'react-icons/lia'


const Info = () => {
    
    let [details,setDetails] = useState(true)
    let [info,setInfo] = useState(false)
    const poster = useSelector(state => state.infoReducer)
    const data = useSelector(state => state.postReducer.data)
    const dispatch = useDispatch()
    
    function displayDetails(){
        setInfo(false)
        setDetails(true)
    }
    function displayInfo(){
        setDetails(false)
        setInfo(true)
    }
    
    return(
        <div className="info-page">
           {
            poster &&
            <div className="poster-card">
                <img src={` https://picsum.photos/200?random=${poster.id}`} alt="user image"/>
                <div className="poster-info">
                    <div>
                        <button onClick={() => displayDetails()} className="detail-btn">Detail</button>
                        <button onClick={() => displayInfo()} className="info-btn">User Info</button>
                    </div>
                    <div>
                    {
                        details && !info ? (
                            <p>{poster.body}</p>
                        ):(
                            <div>
                                <p><span>User ID: </span> {poster.userId}</p>
                                <p><span>Main ID: </span> {poster.id}</p>
                                <p><span>Title: </span> {poster.title}</p>
                            </div>
                        )
                    }
                    </div>

                </div>
            </div>
           }
            <div className="cards-container">
                {
                    data && 
                    data.map((user,index) => (
                        <div className="user-card" key={index}>
                            <img src={` https://picsum.photos/200?random=${user.id}`} alt="user image"/>
                            <h4>Post Title</h4>
                            <div className="title">
                                <p>{user.title}.<span onClick={() => dispatch(selectedPost(user))}>Read more...</span></p>
                                <button onClick={() => dispatch(selectedPost(user))} className="more-btn"><LiaGreaterThanSolid/></button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Info