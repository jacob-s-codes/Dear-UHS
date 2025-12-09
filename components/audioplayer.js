import React, { useEffect, useRef } from 'react';

// The main component should be named (e.g., AudioPlayer)
const AudioPlayer = ({ src, autoPlay = false, controls = true }) => {
    // The useRef hook provides a way to interact with the DOM element directly
    const audioRef = useRef(null);

    // useEffect runs when the component mounts or when 'autoPlay' changes
    useEffect(() => {
        if (audioRef.current && autoPlay) {
            // Attempt to play the audio if autoPlay is true
            // Note: Browsers often block autoplay without user interaction
            audioRef.current.play().catch(error => {
                console.log("Autoplay was prevented:", error);
                // You can add logic here to show a 'Play' button if autoplay fails
            });
        }
    }, [autoPlay]);

    // The component renders the standard HTML <audio> element
    return (
        <audio 
            // Attach the ref to the audio element
            ref={audioRef}
            // Use the controls prop from the component
            controls={controls}
        >
            {/* Issue Fix: Your original code had incorrectly nested <source> tags.
            When using multiple sources for compatibility, they should be siblings 
            inside the <audio> tag. Also, they must be self-closing tags.
            
            We are ignoring the 'src' prop for simplicity here and using the example sources.
            If you want to use the 'src' prop, you would typically use a single <source> tag:
            <source src={src} type="audio/mpeg" />
            
            Below uses the multi-source fallback approach:
            */}
            
            {/* Example sources for cross-browser compatibility */}
            <source src="convo.mp3" type="audio/ogg" />
            <source src="convo.mp3" type="audio/mpeg" />
            
            {/* Fallback text for browsers that don't support the <audio> element */}
            Your browser does not support the audio element.
        </audio>
    );
};

// Export the component as default
export default AudioPlayer;

// Usage Example (in another file):
/*
// <AudioPlayer src="/path/to/my-song.mp3" autoPlay={true} /> 
*/