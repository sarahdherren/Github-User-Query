import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function User(props) {


    return (
        <div>
            <button className='reset' onClick={props.resetHandler}>
                <GitHubIcon />
                <span>find new user</span>
            </button>
            <div className='cardHeader'>
                <div className='cardAvatar'>
                    <img src={props.userData.avatar_url} alt='user avatar' />
                </div>
                <div className='cardTitle'>
                    <h2>{props.userData.name}</h2>
                    <p>{props.userData.login}</p>
                    <h3>Followers:</h3>
                    <div className='followers'>
                        {props.followers.map(follower => (
                            <div className='follower'>
                            <div className='imgWrapper'>
                                <img src={follower.avatar_url} alt='follower avatar' />
                            </div>
                            <a href={`http://github.com/${follower.login}`}>{follower.login} </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='repoWrapper'>
            <h3>Repositories:</h3>
                <div className='repositories'>
                        {props.repos.map(repo => (
                                <ul>
                                    <li>
                                        <a href={repo.html_url}>{repo.name} </a>
                                    </li>
                                </ul>
                            ))}
                </div>
            </div>
        </div>
    )
}
