import './App.css'
import { useState } from 'react';
import PropTypes from 'prop-types';

export function TwitterFollowCard({initialIsFollowing, userName = 'Desconocido', children = 'Desconocido'}){
    
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followButton is-following': 'tw-followButton'
    
    return (
        <article className='tw-followCard'>
            <header className='tw-header'>
                <img className='tw-perfil' alt="This person dont exist" src="https://thispersondoesnotexist.com/"></img>
                <div className='tw-div'>
                    <strong>{children}</strong>
                    <span className='tw-nickname'>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-Card-Text'>
                        {text}
                    </span>

                    <span className='tw-followCard-StopFollow'>
                        Dejar de seguir
                    </span>
                </button>
            </aside>

        </article>
    )

}

TwitterFollowCard.propTypes = {
    userName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    initialIsFollowing : PropTypes.bool,
    children: PropTypes.string
  };