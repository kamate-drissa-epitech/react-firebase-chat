import { useState } from "react"
import "./Chat.css"
import EmojiPicker from "emoji-picker-react"


const Chat = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

  const handleEmoji = (e) => {
    setText(prev => prev + e.emoji)
    setOpen(false)
  }

  

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="Avatar" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="/phone.png" alt="" />
          <img src="/video.png" alt="" />
          <img src="/info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora sit eos soluta voluptatem saepe repudiandae ut, sapiente placeat dignissimos, est provident. Ex assumenda nostrum aliquam molestias aspernatur officia dolor maxime autem impedit fuga, minus corporis ea necessitatibus esse error optio illum tempora repellat doloremque, debitis qui accusamus. Sunt, expedita!</p>
            <span> 1 mim</span>

          </div>
        </div>
        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora sit eos soluta voluptatem saepe repudiandae ut, sapiente placeat dignissimos, est provident. Ex assumenda nostrum aliquam molestias aspernatur officia dolor maxime autem impedit fuga, minus corporis ea necessitatibus esse error optio illum tempora repellat doloremque, debitis qui accusamus. Sunt, expedita!</p>
            <span> 1 mim</span>
          </div>
        </div>
        <div className="message ">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora sit eos soluta voluptatem saepe repudiandae ut, sapiente placeat dignissimos, est provident. Ex assumenda nostrum aliquam molestias aspernatur officia dolor maxime autem impedit fuga, minus corporis ea necessitatibus esse error optio illum tempora repellat doloremque, debitis qui accusamus. Sunt, expedita!</p>
            <span> 1 mim</span>
            
          </div>
        </div>
        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora sit eos soluta voluptatem saepe repudiandae ut, sapiente placeat dignissimos, est provident. Ex assumenda nostrum aliquam molestias aspernatur officia dolor maxime autem impedit fuga, minus corporis ea necessitatibus esse error optio illum tempora repellat doloremque, debitis qui accusamus. Sunt, expedita!</p>
            <span> 1 mim</span>
            
          </div>
        </div>
        <div className="message ">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora sit eos soluta voluptatem saepe repudiandae ut, sapiente placeat dignissimos, est provident. Ex assumenda nostrum aliquam molestias aspernatur officia dolor maxime autem impedit fuga, minus corporis ea necessitatibus esse error optio illum tempora repellat doloremque, debitis qui accusamus. Sunt, expedita!</p>
            <span> 1 mim</span>
            
          </div>
        </div>
        <div className="message own">
          {/* <img src="./avatar.png" alt="" /> */}
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora sit eos soluta voluptatem saepe repudiandae ut, sapiente placeat dignissimos, est provident. Ex assumenda nostrum aliquam molestias aspernatur officia dolor maxime autem impedit fuga, minus corporis ea necessitatibus esse error optio illum tempora repellat doloremque, debitis qui accusamus. Sunt, expedita!</p>
            <span> 1 mim</span>
            
          </div>
        </div>
      </div>
      <div className="bottom">
          <div className="icons">
            <img src="./img.png" alt="" />
            <img src="./camera.png" alt="" />
            <img src="./microphone.png" alt="" />
          </div>
          <input type="text" value={text} placeholder="Type your message" onChange={(e) => setText(e.target.value)} />
          <div className="emoji" >
            <img src="./emoji.png" alt="Emoji"  onClick={() => setOpen(prev => !prev)} />
            <div className="picker">
              <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
            </div>
          </div>
          <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat