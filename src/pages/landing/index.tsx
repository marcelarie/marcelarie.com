import { Link } from 'react-router-dom'
import { HOME } from 'routes'
import './styles.scss'
import SLanding from './styled'

const Landing = () => {
    return (
        <SLanding className="landing">
            <div className="landing__welcome">
                <p>
                    Hello! My name is Marcel and I'm a <span id="age">25 </span>
                    y/o software developer from Barcelona.<br/> My journey as a
                    programmer started recently, so there are lots of things
                    still to learn.
                </p>
                <p>
                    I work with React and TypeScript for my Frontend projects,
                    and Node.JS with Express.JS for the backend. I love equally
                    creating beautiful websites with a minimal UI and a solid
                    functionality, and setup performant, efficient and scalable
                    servers and databases.
                </p>
                <p>
                    At my
                    <Link to={HOME}> Blog </Link> I explain my learning process
                    to{' '}
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://medium.com/taking-note/learning-from-the-feynman-technique-5373014ad230"
                    >
                        really understand it
                    </a>
                    , sharing it with you to acquire more knowledge from the
                    feedback. Enjoy!
                </p>
            </div>
        </SLanding>
    )
}

export default Landing
