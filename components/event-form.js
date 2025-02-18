import Contact from "./EvenntComponent/contact";
import EventCard from "./EvenntComponent/EventCard";
import EventDetails from "./EvenntComponent/EventDetails";
import Pricing from "./EvenntComponent/Pricing";

export default function EventForm() {
  return (
    <section className="w-full relative py-16">
      <form className="w-full relative create-event-form pt-2">
        <EventDetails />
        <EventCard />
        <Pricing />
        <Contact />
        <div className="w-full relative flex justify-end">
          <button className="custom-btn mt-10">Preview</button>
        </div>
      </form>
    </section>
  );
}
