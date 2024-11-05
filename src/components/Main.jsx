import ChatBox from "./ChatBox";
import ChatFooter from "./ChatFooter";
import { useState } from "react";

function Main() {
  const [messages, setMessages] = useState([
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolore harum consequuntur sed ut minima cupiditate et eligendi beatae atque ipsa laudantium nihil sequi voluptatem saepe repudiandae, quae incidunt rerum.",
      response: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, eius maxime! Vero, sed quidem! Accusamus eveniet ratione ipsam voluptatibus quae magni amet ducimus expedita laudantium? Repellendus libero accusamus quasi ipsa!
      Quidem quo asperiores non, sit esse iste illum corrupti. Praesentium mollitia perferendis exercitationem veritatis deleniti necessitatibus numquam culpa molestiae ipsam porro assumenda quasi accusamus animi, ullam at iste repellendus est?
      Mollitia eum, pariatur reiciendis quasi deserunt aperiam tempore aliquam modi ea aut consequuntur tenetur culpa doloremque vitae ducimus alias explicabo assumenda molestiae, recusandae quaerat fugit voluptatum a accusamus. Nam, explicabo. `,
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolore harum consequuntur sed ut minima cupiditate et eligendi beatae atque ipsa laudantium nihil sequi voluptatem saepe repudiandae, quae incidunt rerum.",
      response: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, eius maxime! Vero, sed quidem! Accusamus eveniet ratione ipsam voluptatibus quae magni amet ducimus expedita laudantium? Repellendus libero accusamus quasi ipsa!
      Quidem quo asperiores non, sit esse iste illum corrupti. Praesentium mollitia perferendis exercitationem veritatis deleniti necessitatibus numquam culpa molestiae ipsam porro assumenda quasi accusamus animi, ullam at iste repellendus est?
      Mollitia eum, pariatur reiciendis quasi deserunt aperiam tempore aliquam modi ea aut consequuntur tenetur culpa doloremque vitae ducimus alias explicabo assumenda molestiae, recusandae quaerat fugit voluptatum a accusamus. Nam, explicabo. `,
    },
    {
      question:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolore harum consequuntur sed ut minima cupiditate et eligendi beatae atque ipsa laudantium nihil sequi voluptatem saepe repudiandae, quae incidunt rerum.",
      response: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, eius maxime! Vero, sed quidem! Accusamus eveniet ratione ipsam voluptatibus quae magni amet ducimus expedita laudantium? Repellendus libero accusamus quasi ipsa!
      Quidem quo asperiores non, sit esse iste illum corrupti. Praesentium mollitia perferendis exercitationem veritatis deleniti necessitatibus numquam culpa molestiae ipsam porro assumenda quasi accusamus animi, ullam at iste repellendus est?
      Mollitia eum, pariatur reiciendis quasi deserunt aperiam tempore aliquam modi ea aut consequuntur tenetur culpa doloremque vitae ducimus alias explicabo assumenda molestiae, recusandae quaerat fugit voluptatum a accusamus. Nam, explicabo. `,
    },
  ]);

  function addMessage({ question, response }) {
    setMessages([
      ...messages,
      {
        question,
        response,
      },
    ]);
  }

  return (
    <>
      {/* Displays ALl previous chats messages */}
      <ChatBox messages={messages} />
      {/* Displays a box to ask question and a footer message */}
      <ChatFooter messages={messages} onAddMessage={addMessage} />
    </>
  );
}

export default Main;
