import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    //const formatNickname = (nickname) => `@${nickname}`
    const Amilcar = {initialIsFollowing: false, userName: 'StebR367'}

    //Ahora con listas
    const users = [
        {
        userName: 'Sara_s17',
        name: 'Sara Sofía',
        initialIsFollowing: false

        },
        {
        userName: 'Luisa_s17',
        name: 'Luisa Ordoñez',
        initialIsFollowing: false

        },
        {
        userName: 'Daniel_s17',
        name: 'Daniel Ramirez',
        initialIsFollowing: false

        },
    ]

    return (
        <section className='App'>
            {
                users.map(({userName, name, initialIsFollowing}) => (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName}
                        initialIsFollowing={initialIsFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
            <TwitterFollowCard 
                {...Amilcar}> {/* Mala practica. Otra forma de pasar los datos por props, pasa cada uno de los componentes. */}
                Amilcar Rodriguez
            </TwitterFollowCard>

            <TwitterFollowCard 
                initialIsFollowing = {true}
                userName={'Natalia_07'} >
                Natalia Perez
            </TwitterFollowCard>

            <TwitterFollowCard 
            initialIsFollowing = {false}
                serName={'Richardcr7'}>
                Amilcar Ricardo
            </TwitterFollowCard>
        </section>
        
    )

}