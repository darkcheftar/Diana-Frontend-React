import './About.scss';
import testtube from './testtube.svg';
import sparkle from './sparkle.svg';
import phone from './phone.svg';
const Simplelogo = ({image, content, alt})=>{
    return (
        <div className="simplelogo">
        <img src={image} alt={alt} />
        <div className="content">{content}</div>
        </div>
    )
};

const data = [
    {
        image:testtube,
        alt:'testtube',
        content:"Consciously formulated products that deliver feel-good results fast"
    },
    {
        image:sparkle,
        alt:'sparkle',
        content:"In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body"
    },
    {
        image:phone,
        alt:'phone',
        content:"In-app consultation portals that connect you with compassionate wellness experts "
    }
];

const About = () => {
    return (
        <>
            <section className='bg-first'>
                <p className="title">About Diana</p>
                <p className="moto">A platform that looks out for you</p>
                <p className="content">Diana empowers you to understand how your body works so you can look and feel your best. </p>
                <hr />
                <div className="philosophy">
                    <div className="heading">Our Philosophy</div>
                    {/* eslint-disable-next-line */}
                    <p className="content">Sustainable wellness is a big-picture, inside out approach</p>
                        <div className="content">
                            <div className="main">
                            Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. 
                            <span>That’s why we’ve created an integrated ecosystem of: </span>
                            </div>
                            {data.map(value=><Simplelogo {...value} key={value.alt}/>)}
                            </div>
                            <div className="extra">
                                Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
                            </div>
                </div>
            </section>
            <section className="bg-second">
                <h1 className="heading">
                What makes us different?
                <p className="rewiring">Reimagining and rewiring self-care</p> 
                </h1>
                <div className="content">
                <p>You care about conscious consumption, and so do we. </p>

<p>When it comes to your health, “good enough” is not good enough. We’re here to flip the script on that narrative because you deserve the best </p>


We collaborate with researchers and doctors to 
<ul>
<li>Help you get granular about your health and self-care with personalized insights, and</li>

<li>Equip you with simple, sustainable products that get the job done</li>
</ul>
<p>No to-the-moon-and-back claims in this neck of the woods.</p>

<p>We’re just solving real problems for real people here. </p>
</div>
            </section>
        </>
    )
}

export default About;