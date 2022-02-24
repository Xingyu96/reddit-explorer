import React, { useState, useEffect } from 'react';
import './ProfileViewer.css'
import {getList} from "./ProfileApi";

const ProfileViewer = () => {
  const [username, setUsername] = useState("");
  const [resultUsername, setResultUsername] = useState("Search Result");
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  
  const setResultName = (name) => {
    if (name.length === 0) {
      setResultUsername("Search Result")
    } else {
      setResultUsername(name)
      getList(name).then((userInfo) => {
        if (userInfo.error) {
          setUserInfo(null)
          setError(userInfo.error)
        } else {
          setUserInfo(userInfo)
          setError(null)
        }
      })
    }
  }
  
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-10-tablet is-offset-1-tablet is-10-mobile is-offset-1-mobile is-6-desktop is-offset-3-desktop">
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
                    <td>Number of comments</td>
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
            {error && (
              <div className="notification is-danger is-light">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileViewer