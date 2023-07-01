import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section
      id="contact"
      className=" md:flex my-10 py-32 px-10 md:h-full bg-slate-700"
    >
      <div className="basic-1/2 p-2 bg-zinc-600">
        <h1 className="text-4xl p-5 font-playfair">Contact Me</h1>
        <form
          className="text-black flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
          target="_blank"
          action=""
          method="POST"
        >
          <div className="flex gap-2">
            <input
              {...register('Name')}
              placeholder="Name"
              className="w-1/2 p-2 rounded-lg"
            />
            <input
              {...register('Email')}
              placeholder="Email"
              className="w-1/2 p-2 rounded-lg"
            />
          </div>
          <input
            {...register('Subject')}
            placeholder="Subject"
            className="p-2 rounded-lg"
          />
          <textarea
            {...register('Message')}
            placeholder="Type your message..."
            className="p-2 rounded-lg"
            rows="4"
            cols="50"
          />
          <button type="submit"> Send</button>
        </form>
      </div>
      <div className="basic-1/2"> map</div>
    </section>
  );
};

// import { useState } from 'react';

// export function Contact() {
//   const [title, setTitle] = useState('');

//   const handleChange = (event) => {
//     setTitle(event.target.value);
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();

//     console.log(title);
//     setTitle('');
//   };
//   return (
//     <div id="contact">
//       <h3> Add a book</h3>
//       <form onSubmit={handleSubmit}>
//         <label> Title</label>
//         <input value={title} onChange={handleChange} />
//         <button> Add</button>
//       </form>
//     </div>
//   );
// }
