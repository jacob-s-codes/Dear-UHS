
"use client"
import { motion } from 'framer-motion';
const Page = () => {

    const messages = [
        { id: 1, sender: "You", text: "Hi, it's Jacob! So glad we're working together this semester :) " },
        { id: 2, sender: "Friend", text: "Same here! Looking forward to reading your letter" },
        { id: 3, sender: "Time", text: "Sat, Sep 6 at 9:18 PM" },
        { id: 4, sender: "You", text: "I have my first letter ready 😬" },
        { id: 5, sender: "Friend", text: "Awesome, I’m ready whenever 👀" },
        { id: 6, sender: "Image", text: "", src: "/jacobarchive1.png", link: "https://docs.google.com/document/d/1_E66rLTLh1SvB-U-MPbXiJ-5qDUgYwy0l6NgB1NIyEw/edit?usp=sharing"}
    ];


    return (
        <div className="h-full bg-iron-grey flex flex-col items-center font-">
            <div className=' h-screen flex flex-col items-center justify-center'>
                <p className='text-center  text-white max-w-3xl text-3xl font-michroma'>“Always there, unchanged, in a configuration nobody else could see, was a glowing list of messages from all the people you knew, and from people you didn&apos;t know, all in the same letters, like the universal handwriting of thought or of the world.”</p>
            </div>

            <div className="w-full max-w-md bg-white rounded-2xl shadow  flex flex-col  font-sans">
                <div className="w-full flex justify-between pt-4 px-4 top-0 sticky">

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

                <div className="flex flex-col gap-[5vh] overflow-y-auto  p-2">
                    {messages.map((msg, index) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className={`p-3  max-w-[80%]  text-lg ${msg.sender === "You"
                                ? "bg-blue-500 text-white self-end shadow rounded-2xl"
                                : msg.sender === "Friend" ? "bg-gray-400 text-white self-start shadow rounded-2xl" : msg.sender === "Time" ? "text-gray-400 self-center bg-none font-semibold" : "bg-[#3b77db] self-end bg-none rounded-lg"
                                }`}
                        >
                            {msg.src ? (
                                <a href={msg.link} target="_blank"><img
                                    src={msg.src}
                                    alt=""
                                    
                                    className="rounded-2xl self-end"
                                /></a>
                            ) : (
                                <div
                                    className={` text-lg ${msg.sender === "You"
                                            ? "bg-blue-500 text-white self-end rounded-2xl"
                                            : msg.sender === "Friend"
                                                ? "bg-gray-400 text-white self-start rounded-2xl"
                                                : "text-gray-400 self-center font-semibold"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            )}
                        </motion.div>
                    ))}


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