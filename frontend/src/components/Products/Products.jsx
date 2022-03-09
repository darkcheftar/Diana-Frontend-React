import Karolina from './1.Karolina.png'
import moodtrack from './2.MoodTracking.png'
import periodtrack from './3.PeriodTracking.png'
import consultationfrom from './4.Consultation.png'
import potion from './5.Potion.png'
const Product = ({title, description, cta, bg}) =>{
    return (
        <>
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
            <button className="cta">{cta}</button>
            <img src={bg} alt={title} />
        </>
    )
}


const data =  [
    {"title":"Liberate your everyday wellness","description":"Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.","cta":"Upgrade your self-care ","bg":Karolina},
    {"title":"Track your mood","description":"All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day.","cta":"Track you mood on the app","bg":moodtrack},
    {"title":"Track your period","description":"Stay in the know with reliable AI-based and science-backed period, ovulation, and PMS predictions. The intuitive design makes tracking your cycle effortless and helps you stay on top of your monthly data.","cta":"Track you period on the app","bg":periodtrack},
    {"title":"Consult with wellness experts","description":"Set up health consultations with experienced doctors and therapists on our app. Simply select a service, answer a few questions, and we’ll connect you to someone who is the right-fit for you.","cta":"Get a consultation","bg":consultationfrom},
    {"title":"Get your personalized period box","description":"Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app.","cta":"Create your box on the app","bg":potion}
];

const Products = ()=>{
    console.log(data);
    return <>{data.map(attributes=><Product {...attributes} key={attributes.title} />)}</>};

export default Products;