import React from 'react'
import styles from './Users.module.css';
import userPhoto from '../../Assets/Images/user.jpg';
import {UsersPagePropsType} from '../../Redux/users_reducer';
import {NavLink} from 'react-router-dom';


type UsersPresentationPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    toggledButton: number[]
    usersPage: UsersPagePropsType
    setCurrentPage: (page: number) => void
    followButtonTC: (userID: number, followed: boolean) => void
}

export const Users = (props: UsersPresentationPropsType) => {
    let counter = []
    for (let i = 1; i <= Math.ceil(props.totalUsersCount / props.pageSize); i++) counter.push(i)

    return (
        <div>
            {
                counter.map(page => <span key={Math.random()}
                                          className={props.currentPage === page ? styles.boldText : ''}
                                          onClick={() => props.setCurrentPage(page)}>{page} </span>)
            }
            <div className={styles.main}>
                {props.usersPage.items.map(m =>
                    <div className={styles.usersBlocks} key={m.id}>
                        <div className={styles.imageBlock}>
                            {/*Ссылка на страницу Profile*/}
                            <NavLink to={`/profile/${m.id}`}>
                                <img src={m.photos.small !== null ? m.photos.small : userPhoto} className={styles.image}
                                     alt={'User avatar'}/>
                            </NavLink>
                            <button disabled={props.toggledButton.some(id => id === m.id)}
                                    onClick={() => props.followButtonTC(m.id, m.followed)}>
                                {m.followed ? 'Follow' : 'Unfollow'}
                            </button>
                        </div>
                        <div className={styles.rightField}>
                            <div className={styles.upField}>
                                <div>{m.name}</div>
                                <div>
                                    <div>Russia,</div>
                                    <div>Moscow</div>
                                </div>
                            </div>
                            <div className={styles.status}>{m.status}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}