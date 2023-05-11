import '../index.css'
import Gallery from './Gallery'

function Home() {
    return (
        <main className='home'>
                <Gallery /> 
            <div className='home--2'> 2 </div>
            <div className='home--3'> 3 </div>
            <div className='home--4'> 4 </div>
        </main>
    )
}

export default Home