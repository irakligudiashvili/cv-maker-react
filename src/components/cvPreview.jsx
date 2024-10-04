import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/cvPreview.css'

function CvPreview(){
    return (<>
    <div className='cv'>
        <div className='cv__header'>
            <div className='cv__img' />
            <div className='div__header__details'>
                <h1 className='cv__name'>John Smith</h1>

                <div className='cv__contact'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href='mailto:example@email.com'>example@email.com</a>
                </div>
                <div className='cv__contact'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>111-111-111</p>
                </div>
                <div className='cv__contact'>
                    <FontAwesomeIcon icon={faGithub} />
                    <a href='https://github.com/johnsmith' target='_blank'>johnsmith</a>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default CvPreview