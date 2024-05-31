import { useEffect, useState } from "react";

function Typing({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  duration = 1000
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setisdeleting] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < text[index].length) {
          setDisplayedText((prev) => prev + text[index].charAt(displayedText.length));
        } else {
          setTimeout(() => setisdeleting(true), duration)
        } 
      } else {
        if (displayedText.length > 0) {
           setDisplayedText((prev) => prev.slice(0,-1))
        } else {
          setisdeleting(false);
          setIndex((prev) => (prev + 1) % text.length)
         }
      }
    };

    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout); 
  },[displayedText, isDeleting, index, text, typingSpeed, deletingSpeed, duration] )
  return (
    <div className="typing-effect">
      {displayedText}
      <span className="caret">|</span>
    </div>
  )
}
export default Typing;