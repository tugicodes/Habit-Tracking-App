import Card from "./Cards";
import timerImage from '../assets/timer.png';
import trackingImage from '../assets/keeptrack.png';
import notesImage from '../assets/notes.png';
import remindImage from '../assets/remind.png';

export default function Services(){
    return(
        <section className="servicesSection">
                   <h2 className="servicesTitle">Our Services</h2>
                     
                <div className="servicesCards">

                    <Card
                    image={timerImage}
                    title="Habit timer"
                    description="Set timers for your habits and track your progress over time."
                    />
                    <Card
                    image={trackingImage}
                    title="Habit tracking"
                    description="Track your habits and see your progress over time with our easy-to-use habit tracking feature."
                    />
                    <Card
                    image={notesImage}
                    title="Note taking"
                    description="Take notes on your habits and reflect on your progress with our habit journaling feature."
                    />
                    <Card
                    image={remindImage}
                    title="Habit reminders"
                    description="Set reminders for your habits and never forget to practice them again with our habit reminder feature."
                    />

                 </div>


        </section>
        

    );

}