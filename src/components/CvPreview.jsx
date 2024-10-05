import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/CvPreview.css'
import placeholderImage from '../assets/placeholder_portrait.png';

function CvPreview({uploadedImage, formData}){
    const backgroundImage = uploadedImage ? `url(${uploadedImage})` : `url(${placeholderImage})`;

    return (<>
    <div className='cv'>
        <div className='cv__header'>
            <div className='cv__img' style={{ backgroundImage }} />
            <div className='div__header__details'>
                <h1 className='cv__name'>{formData.fullName || 'John Smith'}</h1>

                <div className='cv__contact'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <a href={`mailto:${formData.email || 'example@email.com'}`}>{formData.email || 'example@email.com'}</a>
                </div>
                <div className='cv__contact'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>{formData.phoneNumber || '111-111-111'}</p>
                </div>
                <div className='cv__contact'>
                    <FontAwesomeIcon icon={faGithub} />
                    <a href={`https://github.com/${formData.githubUsername || 'johnsmith'}`} target='_blank'>{formData.githubUsername || 'johnsmith'}</a>
                </div>
            </div>
        </div>

        <div className='cv__section'>
            <h2 className='cv__section__header'>Work Experience</h2>
            <div className='cv__section__content'>
                <div className='cv__section__subheader'>
                    <h3>{formData.companyName}</h3>
                    <p>{formData.startDate} - {formData.endDate}</p>
                </div>
                <ul className='cv__section__ul'>
                    {formData.workObligations && formData.workObligations.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>

        <div className='cv__section'>
            <h2 className='cv__section__header'>Education</h2>
            <div className='cv__section__content'>
                <div className='cv__section__subheader'>
                    <h3>Company Name</h3>
                    <p>Dev Ops</p>
                    <p>Masters</p>
                </div>
            </div>
            <div className='cv__section__content'>
                <div className='cv__section__subheader'>
                    <h3>Company Name</h3>
                    <p>Computer Science</p>
                    <p>Bachelor</p>
                </div>
            </div>
        </div>
    </div>
    </>)
}

export default CvPreview