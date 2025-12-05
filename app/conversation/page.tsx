
"use client"
import { motion } from 'framer-motion';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useEffect } from 'react';
// import SplitType from "split-type";
const Page = () => {

    // useEffect(() => {
    //     const elements = document.querySelectorAll<HTMLElement>(".slower-split");

    //     elements.forEach((el) => {
    //       // Split the text
    //       const text = new SplitType(el, { types: "chars" });

    //       // Animate the characters
    //       gsap.from(text.chars, {
    //         scrollTrigger: {
    //           trigger: el,
    //           start: "top 60%",
    //           end: "bottom 30%",
    //           scrub: true,
    //         },
    //         opacity: 0,
    //         stagger: 0.05,
    //         duration: 1,
    //       });
    //     });
    //   }, []);


    const messages = [
        { id: 1, sender: "You", text: "Hi, it's Jacob! So glad we're working together this semester :) " },
        { id: 2, sender: "Friend", text: "Same here! Looking forward to reading your letter" },
        { id: 3, sender: "Time", text: "Sat, Sep 6 at 9:18 PM" },
        { id: 4, sender: "You", text: "I have my first letter ready 😬" },
        { id: 5, sender: "Friend", text: "Awesome, I’m ready whenever 👀" },
        // msg.from 'J' (Jacob/You) should be right/blue
        { id: 6, sender: "Image", from: "J", text: "", src: "/jacobarchive1.png", link: "https://docs.google.com/document/d/1_E66rLTLh1SvB-U-MPbXiJ-5qDUgYwy0l6NgB1NIyEw/edit?usp=sharing" },
        { id: 7, sender: "Time", text: "Sat, Sep 13 at 2:34 PM" },
        { id: 8, sender: "Friend", text: "Response is ready… you want it now or in class?" },
        { id: 9, sender: "You", text: "Ooh awesome! I’m excited. I guess now?" },
        // msg.from 'I' (Ishan/Friend) should be left/gray
        { id: 10, sender: "Image", from: "I", text: "", src: "/ishanarchive1.png", link: "https://www.youtube.com/watch?v=wLAtDidkJOw" },
        { id: 9, sender: "You", text: "DUDE" },
        { id: 9, sender: "You", text: "🔥🔥🔥" },
        { id: 9, sender: "You", text: "Was not expecting that" },
        { id: 8, sender: "Friend", text: "It just occurred to me that Ashley will be reading these 😭" },
        { id: 8, sender: "You", text: "She’s going to love it" },
        { id: 3, sender: "Time", text: "Sat, Sep 20 at 5:25 PM" },
        { id: 10, sender: "Image", from: "J", text: "", src: "/jacobarchive2.png", link: "https://dear-uhs-dayinlife.vercel.app/" },
        { id: 9, sender: "You", text: "enjoy :)" },
        { id: 8, sender: "Friend", text: "THIS IS SO COOL" },
        { id: 8, sender: "Friend", text: "how did you have time to make an entire clone YouTube" },
        { id: 9, sender: "You", text: "Thank god for Rosh Hashannah" },
        { id: 8, sender: "Friend", text: "My only complaint is that the subscribe button doesn’t work" },
        { id: 3, sender: "Time", text: "Sat, Sep 27 at 7:51 PM" },
        { id: 8, sender: "Friend", text: "I’ll give you my comic strip in person tomorrow" },
        { id: 10, sender: "Image", from: "I", text: "", src: "/ishanarchive2.png", link: "https://drive.google.com/file/d/1-vXaH1Hn6Kq7kzVWIlKikAwOENTxaV1n/view?usp=sharing" },
        { id: 3, sender: "Time", text: "Sat, Oct 4 at 3:06 PM" },
    ];


    return (
        <div className="h-full bg-iron-grey flex flex-col items-center font-">
            <div className=' h-screen flex flex-col items-center justify-center'>
                <p className='text-center slower-split text-white max-w-5xl text-5xl font-michroma'>“Always there, unchanged, in a configuration nobody else could see, was a glowing list of messages from all the people you knew, and from people you didn&apos;t know, all in the same letters, like the universal handwriting of thought or of the world.”</p>
                <p className=' text-white text-5xl font-michroma pt-6 '>-Elif Batuman, <span className=' italic'>The Idiot</span></p>
            </div>

            <div className="w-full max-w-md bg-white rounded-3xl  flex flex-col  font-sans">
                <div className="w-full flex justify-between py-4 px-4 top-0 sticky backdrop-blur-xl">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" className='text-blue-600 w-10 h-auto'>
                        <path d="M15 6 L9 12 L15 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <div className="relative bg-gray-400 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <img
                            src="/envelope.svg"
                            alt=""
                            className="w-16 h-auto absolute"
                        /> */}
                        <div className='bg-white w-1 h-6 rounded-lg'></div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-camera-video w-10 h-auto text-blue-600 mr-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
                    </svg>

                </div>


                <p className='text-center font-semibold text-gray-400 pt-4'>iMessage</p>
                <p className='text-center font-semibold text-gray-400'>Tue, Sep 2 at 9:12 PM</p>

                <div className="flex flex-col gap-3 overflow-y-auto px-4 pb-4 bg-gray-50 min-h-[50vh]">
                    {messages.map((msg, index) => {

                        // --- Shared Animation Properties ---
                        const animationProps = {
                            initial: { opacity: 0, y: 20 },
                            whileInView: { opacity: 1, y: 0 },
                            viewport: { once: true, amount: 0.2 },
                            transition: { duration: 0.3, delay: index * 0.05 },
                            key: msg.id,
                        };

                        // 1. Time message (Center)
                        if (msg.sender === "Time") {
                            return (
                                <motion.div
                                    {...animationProps}
                                    className="text-gray-400 self-center font-semibold text-xs mt-3 mb-1"
                                >
                                    {msg.text}
                                </motion.div>
                            );
                        }

                        // 2. Image message (Left/Right, Gray/Blue)
                        if (msg.src) {
                            const isJacob = msg.from === "J"; // 'You'
                            const bubbleColor = isJacob ? "bg-blue-500" : "bg-[#828488]";
                            const alignment = isJacob ? "self-end" : "self-start";

                            return (
                                <motion.div
                                    {...animationProps}
                                    // Outer div handles alignment
                                    className={`max-w-[70%] ${alignment}`} 
                                >
                                    <a href={msg.link} target="_blank" className="block">
                                        {/* Inner div handles color and ASYMMETRIC rounding for the image/link container */}
                                        <div className={`p-1 shadow-md ${bubbleColor} rounded-xl ${isJacob ? 'rounded-br-lg' : 'rounded-bl-lg'}`}>
                                            <img
                                                src={msg.src}
                                                alt="Shared Content"
                                                className="rounded-xl w-full h-auto object-cover"
                                                onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x200/cccccc/333333?text=Content+Link'; }}
                                            />
                                        </div>
                                    </a>
                                </motion.div>
                            );
                        }

                        // 3. Text message (Left/Right, Gray/Blue)
                        const isYou = msg.sender === "You";
                        const bubbleColor = isYou ? "bg-blue-500" : "bg-gray-200";
                        const alignment = isYou ? "self-end" : "self-start";
                        const textColor = isYou ? "text-white" : "text-gray-900"; // Dark text for light gray bubble
                        const roundingClass = isYou ? 'rounded-xl rounded-br-lg' : 'rounded-xl rounded-bl-lg';


                        return (
                            <motion.div
                                {...animationProps}
                                className={`p-3 max-w-[80%] text-lg shadow ${textColor} ${bubbleColor} ${alignment} ${roundingClass}`}
                            >
                                {msg.text}
                            </motion.div>
                        );
                    })}
                </div>


                {/* <div className="flex gap-2 border-t pt-3">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="flex-1 px-3 py-2 border rounded-xl focus:outline-none"
                    />
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-xl">
                        Send
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default Page