import { useForm } from 'react-hook-form';
// import { motion } from 'framer-motion';
import { Map } from './Map';

export const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    // console.log('~ e', e);
    // console.log('errors', errors);

    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }

    // reset();
  };

  // useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     console.log('isSubmitSuccessful',isSubmitSuccessful)
  //     reset({ name: '', email: '', subject: '', message: '' });
  //     console.log('formState', formState);
  //   }
  // }, [formState, reset]);

  return (
    <section
      id="contact"
      className=" md:flex justify-between md:my-32 py-32 px-10 md:h-full bg-slate-700"
    >
      <div className="basic-1/2 p-2 bg-zinc-600">
        <h1 className="text-4xl p-5 font-playfair">Contact Me</h1>
        <form
          className="text-black flex flex-col gap-2"
          onSubmit={onSubmit}
          // target="_blank"
          action="https://formsubmit.co/64028c3f488ace2d11097b65eb3c823f"
          method="POST"
        >
          <div className="flex gap-2">
            <input
              {...register('name', { required: true, maxLength: 20 })}
              placeholder="Name"
              className="w-1/2 p-2 rounded-lg"
            />
            {errors.name && (
              <p className="text-rose-500 mt-1">
                {errors.name.type === 'required' && 'This field is required.'}
              </p>
            )}
            <input
              {...register('email', {
                required: true,
                pattern: /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/,
              })}
              placeholder="Email"
              className="w-1/2 p-2 rounded-lg"
            />
            {errors.email && (
              <p className="text-rose-500 mt-1">
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}
          </div>
          <input
            {...register('subject', { required: true })}
            placeholder="Subject"
            className="p-2 rounded-lg"
          />
          {errors.subject && (
            <p className="text-rose-500 mt-1">
              {errors.subject.type === 'required' && 'This field is required.'}
            </p>
          )}
          <textarea
            {...register('message', { required: true, maxLength: 2000 })}
            placeholder="Type your message..."
            className="p-2 rounded-lg"
            rows="4"
            cols="50"
          />
          {errors.message && (
            <p className="text-rose-500 mt-1">
              {errors.message.type === 'required' && 'This field is required.'}
              {errors.message.type === 'maxLength' &&
                'Max length is 2000 char.'}
            </p>
          )}
          <button type="submit"> Send</button>
        </form>
      </div>
      <div>
        <Map />
      </div>
    </section>
  );
};
