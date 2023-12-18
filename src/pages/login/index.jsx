import Button from '../../components/button';
import Input from '../../components/input';

const Login = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center p-6">
      <form className="w-full md:w-3/6 xl:w-2/6 px-6 rounded-xl py-3 shadow-md">
        <section className="text-center my-4">
          <h3 className=" text-stochostech text-xl font-bold uppercase">
            Stochostech
          </h3>
          <p className="my-2 text-xl">Welcome Back</p>
          <p>Please enter your Account details</p>
        </section>
        <Input
          placeholder="Username"
          name="name"
          type="text"
          title={'Username'}
        />
        <Input placeholder="Email" name="email" type="email" title={'Email'} />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          title={'Password'}
        />
        <div className="my-6">
          <Button text={'Login'} />
        </div>
      </form>
    </section>
  );
};

export default Login;
