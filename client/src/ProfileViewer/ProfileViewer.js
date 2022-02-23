import React, { useState, useEffect } from 'react';
import './ProfileViewer.css'
import {getList} from "./ProfileApi";

const ProfileViewer = () => {
  const [username, setUsername] = useState("");
  const [resultUsername, setResultUsername] = useState("Search Result");
  const [userInfo, setUserInfo] = useState(null);
  
  const setResultName = (name) => {
    if (name.length === 0) {
      setResultUsername("Search Result")
    } else {
      setResultUsername(name)
      getList(name).then( (userInfo) => {
        console.log(userInfo)
        setUserInfo(userInfo)
      })
    }
  }
  
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-6-desktop is-offset-3-desktop">
          <section className="section no-left-right-padding">
            <h2 className="title">Username Search</h2>
            <h3 className="subtitle">Search for reddit username to pull up basic information</h3>
          </section>
          <div className="field">
            <div className="label">Username</div>
            <div className="control">
              <input id="username" className="input" type="text" 
                placeholder="Enter username" 
                onChange={e => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button 
                className="button is-link"
                onClick={e => {
                  setResultName(username)
                }}
              >Search</button>
            </div>
          </div>
          <br/>
          <div className="block">
            {userInfo && (
              <div className="block">
                <table className="table is-hoverable">
                  <thead>
                  <tr>
                    <th>{resultUsername} profile overview</th>
                    <th>{}</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>Number of posts</td>
                    <td>{userInfo.posts}</td>
                  </tr>
                  <tr>
                    <td>Total comment karma</td>
                    <td>{userInfo.comment_karma}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileViewer