import { Slide, AttentionSeeker, Fade } from "react-awesome-reveal";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center text-white text-2xl bg-black h-16 font-[Work Sans]">
      <Fade>
        <h1 className="text-4xl font-semibold">Teachers Hell</h1>
      </Fade>
      <Slide direction="up" cascade triggerOnce>
        <div className="flex space-x-6 justify-around ">
          <li className="list-none font-semibold">Review</li>
          <li className="list-none font-semibold">Send Prayer</li>
          <li className="list-none font-semibold">Burn in Hell</li>
        </div>
      </Slide>
    </nav>
  );
}
