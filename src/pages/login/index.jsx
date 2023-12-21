import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import Button from '../../components/button';
import Input from '../../components/input';
import { useLoginRequest } from '../../api/login/login';
import { toast, ToastContainer } from 'react-toastify';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSuccess = (response) => {
    const data = response?.data;
    toast.success('success', response);
    localStorage.setItem('__token__', data?.access_token);
    localStorage.setItem('__profile__', JSON.stringify(data?.data));
    navigate('/');
    setIsSubmitting(false);
  };

  const onError = (error) => {
    console.log(error);
    toast.error(error?.response?.data?.message);
    setIsSubmitting(false);
  };

  const options = {
    onError,
    onSuccess,
  };
  const { mutate: loginRequest } = useLoginRequest(options);
  const schema = z
    .object({
      email: z.string().email({ message: 'Email address is invalid' }),
      password: z.string().min(3, { message: 'Password length is not valid' }),
    })
    .required();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (values) => {
    handleLoginRequest(values);
  };

  const handleLoginRequest = (data) => {
    setIsSubmitting(true);
    loginRequest(data);
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center p-6">
      <form
        className="w-full md:w-3/6 xl:w-2/6 px-6 rounded-xl py-3 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <section className="text-center my-4">
          <h3 className=" text-stochostech text-xl font-bold uppercase">
            Stochostech
          </h3>
          <p className="my-2 text-xl">Welcome Back</p>
          <p>Please enter your Account details</p>
        </section>
        <section>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                placeholder="Email"
                type="email"
                title={'Email'}
                field={field}
                error={error}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <Input
                placeholder="Password"
                type="password"
                title={'Password'}
                field={field}
                error={error}
              />
            )}
          />

          <div className="my-6">
            <Button isSubmitting={isSubmitting} text={'Login'} />
          </div>
        </section>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default Login;
